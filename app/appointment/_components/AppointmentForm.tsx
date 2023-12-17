'use client'
import React, { useState } from "react";

import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { RegisterData } from "../types";
import { getMonthName, getDayName, objectIndexValidate } from "../../utils/helpers";
import axios from "axios";
import Months from "./Months";
import Tooltip from "../../components/Tooltip";
import Schedule from "./Schedule";
import TimeSlot from "./TimeSlot";
import AgreementBox from "./AgreementBox";
import Loading from "@/app/components/Loading";
import AlertBox from "@/app/components/AlertBox";
import Link from "next/link";

const AppointmentForm = () => {
  type ComponentsDataType = {
    timeSlot: string | undefined
    activeMonth: {
      number: number
      year: number
    }
    selectedDay: {
      day: number | undefined;
      month: number | undefined;
      year: number | undefined;
      [key: string]: number | undefined;
    }
    agreement: boolean
  }
  const { register, handleSubmit, setFocus, setError, clearErrors, formState: { errors } } = useForm()
  const [loading, setLoading] = useState<boolean>(false)
  const [componentsData, setComponentsData] = useState<ComponentsDataType>({
    timeSlot: undefined,
    activeMonth: {
      number: 0,
      year: 0
    },
    selectedDay: {
      day: undefined,
      month: undefined,
      year: undefined,
    },
    agreement: false
  })
  const date = new Date()
  const ymd = date.toISOString().split('T')[0].split('-')
  const currentYear = parseInt(ymd[0])
  const currentMonth = parseInt(ymd[1])
  const currentDay = parseInt(ymd[2])
  const ageRange = {
    min: 10,
    max: 65
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    
    const validation = objectIndexValidate(componentsData.selectedDay, 'number')

    if(!validation)
      setError('schedule', { message: 'Randevu gününü seçiniz' })
    else if(!componentsData.timeSlot)
      setError('timeSlot', { message: 'Seans saatini seçiniz' })
    else if(!componentsData.agreement)
      setError('agreement', { message: 'Koşullari kabul ediniz' })
    else{
      setLoading(true)
      let formData = data
      formData['schedule'] = componentsData.selectedDay
      formData['timeSlot'] = componentsData.timeSlot
      formData['agreement'] = componentsData.agreement
      await axios.post('http://localhost:3000/api/appointment', {
        data: formData
      }).then((res) => {
        setLoading(false)
        console.log("🚀 ~ constonSubmit:SubmitHandler<FieldValues>= ~ res:", res)
      }).catch(({ response }) => {
        setLoading(false)
        console.log(response)
        if(response.status === 403) {
          setError(response.data[0].validation,{ message: response.data[0].message })
          setFocus(response.data[0].validation)
        } else {
          setError("alertBox",{})
        }
      })
    }

    
  }
  const handleRegister = ({ name, value }: RegisterData) => {
    clearErrors()
    setComponentsData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const printKey = (key: any) => {
    console.log("🚀 ~ printKey ~ printKey:", errors)
    console.log("🚀 ~ printKey ~ key:", key)
    return key
  }
  
  return (
    <form onSubmit={e => {
      clearErrors()
      handleSubmit(onSubmit)(e)
    }}>
      <div className="space-y-8">
        <div className="border-b border-gray-900/10 pb-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">Randevu Formu</h2>
            <p className="text-sm text-gray-600">Aşağıdaki bilgileri doldurarak başvurunuzu yapınız.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Adınız {errors.name && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2">
                <input
                  {...register("name", { required: true })}
                  id="name"
                  defaultValue={"testtt"}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">
                Soyadınız {errors.surname && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2">
                <input
                  {...register("surname", { required: true })}
                  id="surname"
                  defaultValue={"testtt"}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Mail Adresi {errors.email && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2 relative">
                <input
                  {...register("email", { required: true })}
                  id="email"
                  defaultValue={"testtt@asdasd"}
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400"
                />
              </div>

            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Telefon <span className="text-gray-400">(Whatsapp)</span> {errors.phone && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2">
                <input
                  {...register("phone", { required: true })}
                  id="phone"
                  defaultValue={"12312312123"}
                  type="text"
                  pattern="[0-9]*"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400"
                />
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
                  <input {...register("gender", { required: true })} defaultChecked value={"female"} id="female" type="radio" className="h-4 w-4 border-zinc-950/20 text-indigo-600 focus:ring-0 focus:ring-offset-0" />
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
          <div className="max-w-2xl space-y-5 pb-8 px-6">
            <Months
              currentMonth={currentMonth}
              currentYear={currentYear}
              state={handleRegister}
            />
            <Tooltip message={errors.schedule && errors.schedule.message} trigger={errors.schedule !== undefined}>
              <Schedule
                currentDay={currentDay}
                currentMonth={currentMonth}
                currentYear={currentYear}
                activeMonth={componentsData.activeMonth.number}
                activeYear={componentsData.activeMonth.year}
                state={handleRegister} />
            </Tooltip>
            <Tooltip message={errors.timeSlot && errors.timeSlot.message} trigger={errors.timeSlot !== undefined}>
              <TimeSlot
                startingTime={10}
                endingTime={20}
                isActive={componentsData.selectedDay.day}
                activeTimes={true}
                timeZone="Europe/Istanbul"
                state={handleRegister}
              />
            </Tooltip>
          </div>
        </div>
      </div>

      <Tooltip message={errors.agreement && errors.agreement.message} trigger={errors.agreement !== undefined}>
        <AgreementBox state={handleRegister}>
          <ul className='mt-2 list-disc'>
            <li>Seans süresi 45 Dakikadır.</li>
            <li>Seans ücreti <span className="font-semibold">300 TL</span>&apos;dir.</li>
            <li>Randevunuz seans ücreti ödendikten sonra aktif hale gelecektir.</li>
            <li>Randevunuzu seans saatinden 12 saat öncesine kadar düzenleyebilir veya iptal edeblirsiniz.</li>
            <li>Seans ücretini IBAN adresimize gönderebilirsiniz. Gönderme işlemi sırasında mutlaka açıklama kısmına <span className="underline underline-offset-2">tam adınızı</span> yazınız.</li>
            {
              (componentsData.selectedDay.day && componentsData.timeSlot) &&
              <div className='w-full flex justify-center py-1'>
                <h4 className="w-max font-bold px-2 py-1.5 bg-zinc-950/10 rounded-md">
                  Seansınız {componentsData.selectedDay.day} {getMonthName(componentsData.selectedDay.month as number, "long")} {componentsData.selectedDay.year} tarihinde {getDayName((`${componentsData.selectedDay.year}-${componentsData.selectedDay.month}-${componentsData.selectedDay.day}`), 'long')} günü, saat {componentsData.timeSlot}&apos;da yapılacaktır
                </h4>
              </div>
            }
          </ul>
          <h3 className='font-medium'>Hükümleri ve koşulları okudum, kabul ediyorum.</h3>
        </AgreementBox>
      </Tooltip>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="submit" className="rounded-md flex bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        {loading && <Loading />} Randevuyu Tamamla 
        </button>
      </div>
      {
        errors.alertBox && (
          <div className="mt-3">
            <AlertBox type="danger" action="dismiss">
              <span>Üzgünüz işlemlerinizi şu anda gerçekleştiremiyoruz. Lütfen <Link className="font-medium underline hover:text-red-600" href={"/contact"}>iletişim</Link> sayfasındaki form ile veya mail adresinden bizimle iletişime geçiniz.</span>
            </AlertBox>
          </div>
        )
      }
      
    </form>
  );
};

export default AppointmentForm;
