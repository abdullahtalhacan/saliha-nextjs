'use client'
import React, { useEffect, useState, useRef } from "react";

import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { getMonthName, getDayName, objectIndexValidate } from "../../utils/helpers";
import axios from "axios";
import Tooltip from "../../components/Tooltip";
import TimeSlot from "./TimeSlot";
import AgreementBox from "./AgreementBox";
import Loading from "@/app/components/Loading";
import AlertBox from "@/app/components/AlertBox";
import Link from "next/link";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import MonthPicker from "./MonthPicker";
import DayPicker from "./DayPicker";
import { DateType, MonthAndYearType } from "./types";

const AppointmentForm = ({ state, data }: any) => {
  const { register, handleSubmit, setFocus, setError, clearErrors, formState: { errors } } = useForm({
    defaultValues: data
  })
  const [loading, setLoading] = useState<boolean>(false)
  
  const date = new Date()
  const today = { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()}
  
  const ageRange = {
    min: 10,
    max: 65
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if(selectedDayDate && !(objectIndexValidate(selectedDayDate, 'number')))
      setError('dayPicker', { message: 'Randevu gününü seçiniz' })
    else if(!activeTime)
      setError('time', { message: 'Seans saatini seçiniz' })
    else if(!agreement)
      setError('agreement', { message: 'Koşullari kabul ediniz' })
    else{
      setLoading(true)
      try {
        let formData = data
        formData['date'] = selectedDayDate
        formData['time'] = activeTime
        formData['agreement'] = agreement
        await axios.post('http://localhost:3000/api/appointment', {
          data: formData
        }).then((res) => {
          state(res)
          setLoading(false)
          console.log("🚀 ~ constonSubmit:SubmitHandler<FieldValues>= ~ res:", res)
        }).catch(({ response }) => {
          setLoading(false)
          console.log(response)
          if (response && response.status === 403) {
            setError(response.data[0].path[0], { message: response.data[0].message })
            setFocus(response.data[0].path[0])
          } else {
            setError("alertBox", {})
          }
        })
      } catch (error) {
        console.log(error)
        setError("alertBox", {})
      }
      
    }

    
  }

  let dataDate = undefined

  if(data){
    dataDate = data.date.split("-")
  }

  const [activeMonth, setActiveMonth] = useState<MonthAndYearType>(data && {
    month: Number(dataDate[1]),
    year: Number(dataDate[0])
  })
  const [selectedDayDate, setSelectedDayDate] = useState<DateType>(data && {
    year: Number(dataDate[0]),
    month: Number(dataDate[1]),
    day: Number(dataDate[2])
  })
  const [activeTime, setActiveTime] = useState<string>(data && data.time)
  const [agreement, setAgreement] = useState<boolean>()
  
  const [unavailableDays, setUnavailableDays] = useState<Array<number> | undefined>([1,29,30, 28])
  const [unavailableTimes, setUnavailableTimes] = useState<Array<string> | undefined>(["10:00", "13:00", "16:00"])
  
  const renderControlRef = useRef(false)

  useEffect(() => {
    return () => {
      if(renderControlRef.current){
        //@ts-ignore
        setActiveTime(undefined)
      }
      if(selectedDayDate.day === undefined){
        renderControlRef.current = true
      }
    }
  }, [selectedDayDate])

  useEffect(() => {console.log("🚀 ~ AppointmentForm ~ activeTime:", activeTime)}, [activeTime])
    
  return (
    <form
      onSubmit={(e) => {
        clearErrors();
        handleSubmit(onSubmit)(e);
      }}
    >
      <div className="space-y-8">
        <div className="border-b border-gray-900/10 pb-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative pb-4">
              <div className="absolute -top-[3px] left-1 rotate-12 w-10 h-10 rounded-md bg-indigo-600"></div>
              <div className=" flex justify-center items-center w-10 h-10 p-1 rounded-md backdrop-blur-sm bg-white/30 z-50">
                <CalendarDaysIcon className="w-6 h-6 fill-none text-white" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Randevu Formu</h2>
            <p className="text-sm text-gray-600">Aşağıdaki bilgileri doldurarak başvurunuzu yapınız.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Adınız {errors.name && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2">
                <input {...register("name", { required: true })} id="name" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">
                Soyadınız {errors.surname && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2">
                <input {...register("surname", { required: true })} id="surname" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Mail Adresi {errors.email && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2 relative">
                <input {...register("email", { required: true })} id="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Telefon <span className="text-gray-400">(Whatsapp)</span> {errors.phone && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2">
                <input {...register("phone", { required: true })} id="phone" type="text" pattern="[0-9]*" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400" />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Cinsiyet {errors.gender && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2 flex items-center">
                <div className={`w-1/2 flex gap-x-2 items-center border border-zinc-950/20 shadow-sm border-r-0 py-1.5 px-2 rounded-l-md`}>
                  <input {...register("gender", { required: true })} value={"male"} id="male" type="radio" className="h-4 w-4 border-zinc-950/20 text-indigo-600 focus:ring-0 focus:ring-offset-0" />
                  <label htmlFor="male" className="block text-sm font-medium leading-6 text-gray-900">
                    Erkek
                  </label>
                </div>
                <div className={`w-1/2 flex gap-x-2 items-center border border-zinc-950/20 shadow-sm py-1.5 px-2 rounded-r-md`}>
                  <input {...register("gender", { required: true })} value={"female"} id="female" type="radio" className="h-4 w-4 border-zinc-950/20 text-indigo-600 focus:ring-0 focus:ring-offset-0" />
                  <label htmlFor="female" className="block text-sm font-medium leading-6 text-gray-900">
                    Kadın
                  </label>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                Yaş {errors.age && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2">
                <select id="age" {...register("age", { required: true })} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {Array.from(new Array(ageRange.max - ageRange.min), (_, index) => (
                    <option key={index} value={index + ageRange.min}>
                      {index + ageRange.min}
                    </option>
                  ))}
                  <option value={"65+"}>65+</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="w-full max-w-3xl space-y-5 pb-8 px-6">
            <MonthPicker onSelect={setActiveMonth} selectedDate={activeMonth ? activeMonth : undefined} limit={3} />
            <Tooltip message={errors.date && errors.date.message} trigger={errors.date !== undefined}>
              <DayPicker onSelect={setSelectedDayDate} selectedDayDate={selectedDayDate} currentDate={today} activeMonth={activeMonth ? activeMonth : undefined} unavaliableDays={unavailableDays} />
            </Tooltip>
            <Tooltip message={errors.time && errors.time.message} trigger={errors.time !== undefined}>
              <TimeSlot onSelect={setActiveTime} isActive={Boolean(selectedDayDate?.day)} timeRange={{ startingTime: 9, endingTime: 15 }} timeZone="Europe/Istanbul" activeTime={activeTime} unavailableTimes={unavailableTimes} />
            </Tooltip>
          </div>
        </div>
      </div>

      {activeTime && (
        <div className="flex flex-col space-y-2 mb-2">
          <AlertBox type="info">
            <span className="font-semibold">IBAN:</span> <span className="ml-1 select-all">TR76 0009 9012 3456 7800 1000 01</span>
          </AlertBox>
          <AlertBox type="info">
            Seansınız{" "}
            <span className="font-semibold">
              {selectedDayDate?.day} {getMonthName(selectedDayDate?.month as number, "long")} {selectedDayDate?.year}
            </span>{" "}
            tarihinde <span className="font-semibold">{getDayName([selectedDayDate?.year, selectedDayDate?.month, selectedDayDate?.day], "long")}</span> günü, saat <span className="font-semibold">{activeTime}</span>&apos;da yapılacaktır.
          </AlertBox>
        </div>
      )}

      <Tooltip message={errors.agreement && errors.agreement.message} trigger={errors.agreement !== undefined}>
        <AgreementBox onSelect={setAgreement} isActive={Boolean(activeTime)}>
          <ul className="list-disc">
            <li>Seans süresi 45 Dakikadır.</li>
            <li>
              Seans ücreti <span className="font-semibold">300 TL</span>&apos;dir.
            </li>
            <li>Randevunuz seans ücreti ödendikten sonra aktif hale gelecektir.</li>
            <li>Randevunuzu seans saatinden 12 saat öncesine kadar düzenleyebilir veya iptal edeblirsiniz.</li>
            <li>
              Seans ücretini IBAN adresimize gönderebilirsiniz. Gönderme işlemi sırasında mutlaka açıklama kısmına <span className="underline underline-offset-2">tam adınızı</span> yazınız.
            </li>
          </ul>
          <h3 className="font-medium mt-1">Hükümleri ve koşulları okudum, kabul ediyorum.</h3>
        </AgreementBox>
      </Tooltip>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="submit" className="rounded-md flex bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {loading && <Loading />} Randevuyu Tamamla
        </button>
      </div>
      {errors.alertBox && (
        <div className="mt-3">
          <AlertBox type="danger" action="dismiss">
            <span>
              Üzgünüz işlemlerinizi şu anda gerçekleştiremiyoruz. Lütfen{" "}
              <Link className="font-medium underline hover:text-red-600" href={"/contact"}>
                iletişim
              </Link>{" "}
              sayfasındaki form ile veya mail adresinden bizimle iletişime geçiniz.
            </span>
          </AlertBox>
        </div>
      )}
    </form>
  );
};

export default AppointmentForm;
