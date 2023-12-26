"use client";
import React, { useState, useEffect } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Loading from "@/app/components/Loading";
import { InformationCircleIcon } from "@heroicons/react/16/solid";
import Tooltip from "@/app/components/Tooltip";
import axios from "axios";
import AlertBox from "@/app/components/AlertBox";
import dynamic from "next/dynamic";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
const ManageForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [appointmentData, setAppointmentData] = useState(null);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    try {
      await axios
        .post("http://localhost:3000/api/appointment/manage", {
          data: {
            email: data.email,
            verifyCode: data.verifyCode,
          },
        })
        .then((res) => {
          setLoading(false);
          if (res.data === null) {
            setError("alertBox", { message: "Girdiğiniz bilgilere ait randevu kayıt bulunamadı. Lütfen bilgilerinizi kontrol ederek tekrar deneyin." });
          } else {
            setAppointmentData(res.data);
          }
        })
        .catch(({ response }) => {
          setLoading(false);
          console.log(response);
          if (response && response.status === 403) {
            setError(response.data[0].path[0], { message: response.data[0].message });
            setFocus(response.data[0].path[0]);
          } else {
            setError("alertBox", {});
          }
        });
    } catch (error) {
      console.log(error);
      setError("alertBox", {});
    }
  };

  const AppointmentForm = dynamic(() => import("@/app/appointment/_components/AppointmentForm"), {
    ssr: false,
  });

  return (
    <div className="space-y-8">
      <div className="border-b border-gray-900/10 pb-8">
        {!appointmentData && (
          <div className="flex flex-col items-center text-center">
            <div className='relative pb-4'>
                <div className='absolute -top-[3px] left-1 rotate-12 w-10 h-10 rounded-md bg-indigo-600'></div>
                <div className=' flex justify-center items-center w-10 h-10 p-1 rounded-md backdrop-blur-sm bg-white/30 z-50'>
                    <DocumentTextIcon className='w-6 h-6 fill-none text-white' />
                </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Randevu İşlemleri</h2>
            <p className="text-sm text-gray-600">Aşağıdaki bilgileri doldurarak işlemlerinizi yapabilirsiniz.</p>
          </div>
        )}

        {appointmentData ? (
          <AppointmentForm data={appointmentData} />
        ) : (
          <form
            className="flex flex-col items-center mt-4 space-y-4"
            onSubmit={(e) => {
              clearErrors();
              handleSubmit(onSubmit)(e);
            }}
          >
            <div className="w-1/2">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Mail Adresi {errors.email && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2 relative">
                <input {...register("email", { required: true })} id="email" defaultValue={"dene@deneme.dene"} type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400" />
              </div>
            </div>
            <div className="w-1/2">
              <label htmlFor="verifyCode" className="flex items-center text-sm font-medium leading-6 text-gray-900">
                <span className="mr-1">Randevu Kodu</span>
                <Tooltip message={"E-posta hesabınıza gönderilen 6 haneli kod"} position="top">
                  <InformationCircleIcon className="w-3 h-3 fill-zinc-950/80" />
                </Tooltip>
                {errors.verifyCode && <span className="text-red-600">*</span>}
              </label>
              <div className="mt-2 flex justify-center items-center space-x-2">
                <input {...register("verifyCode", { required: true })} id="verifyCode" defaultValue={"QYR192"} maxLength={6} type="text" className="block w-full rounded-md border-0 py-1.5 uppercase font-extrabold font-mono tracking-widest text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400" />
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
              <button type="submit" className="flex rounded-md self-end bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {loading && <Loading />} Gönder
              </button>
            </div>
            {errors.alertBox && (
              <div className="mt-3">
                <AlertBox type="warning" action="dismiss">
                  {errors.alertBox.message}
                </AlertBox>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ManageForm;
