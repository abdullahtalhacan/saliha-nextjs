'use client'
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import AlertBox from "../components/AlertBox";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

const Contact = () => {
    const {
        register,
        handleSubmit,
        setFocus,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState<boolean>(false);
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setLoading(true)
        try {
            await axios.post('http://localhost:3000/api/mail', {
                data
            }).then((res) => {
                setLoading(false)
                setError("alertBox", {type: "success", message: "Mesajınız bize ulaştı. En kısa sürede sizlere geri dönüş yapacagız."})
            }).catch(({response}) => {
                setLoading(false)
                console.log(response)
                if (response && response.status === 403) {
                    setError(response.data[0].validation, { message: response.data[0].message })
                    setFocus(response.data[0].validation)
                } else {
                    setError("alertBox", { type: "danger", message: "Üzgünüz şu anda form ile mail gönderilemiyor. Lütfen telefon ile veya mail adresinden bizimle iletişime geçiniz." })
                }
            })
        } catch (error) {
            setLoading(false)
            setError("alertBox", {type: "danger", message: "Üzgünüz şu anda form ile mail gönderilemiyor. Lütfen telefon ile veya mail adresinden bizimle iletişime geçiniz."})
        }
    };
    useEffect(() => {console.log("🚀 ~ Contact ~ errors:", errors)}, [errors])
    
    return (
        <div className="py-10">
            <div className="max-w-5xl  mx-auto rounded-xl shadow bg-white">
                <div className="grid grid-cols-2 gap-28 px-4 py-5 sm:px-6 lg:px-12 lg:py-14">
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Bizimle iletişime geçin</h1>
                        <p className="mt-1 text-gray-600">Size daha iyi hizmet verebilmek için buradayız. Her türlü soru, öneri veya geri bildirimleriniz için bize aşağıdaki form ile yada iletişim bilgilerinden ulaşabilirsiniz.</p>
                        <form onSubmit={e => {
                            clearErrors()
                            handleSubmit(onSubmit)(e)
                        }}>
                            <div className="flex flex-col space-y-3">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Adınız {errors.name && <span className="text-red-600">*</span>}
                                    </label>
                                    <div className="mt-2">
                                        <input {...register("name", { required: true })} id="name" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Mail Adresi {errors.email && <span className="text-red-600">*</span>}
                                    </label>
                                    <div className="mt-2">
                                        <input {...register("email", { required: true })} id="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                        Mesajınız {errors.message && <span className="text-red-600">*</span>}
                                    </label>
                                    <div className="mt-2">
                                        <textarea {...register("message", { required: true })} name="message" id="message" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-red-400 invalid:text-red-500 focus:invalid:border-red-400 focus:invalid:ring-red-400"></textarea>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center justify-end gap-x-6">
                                    <button type="submit" className="rounded-md flex bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        {loading && <Loading />} Gönder
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col space-y-10 items-center">
                        <img src="/contact/image.svg" alt="" />
                        <div>
                            <div className="flex items-center space-x-4">
                                <PhoneIcon className="h-4 w-4" />
                                <span>+90 555 555 55 55</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <EnvelopeIcon className="h-4 w-4" />
                                <span>info@salihanurcan.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    errors.alertBox && (
                        <div className="w-full mt-3 px-4 pb-5 sm:px-6 lg:px-12">
                            <AlertBox type={errors.alertBox.type as "danger" | "warning" | "info" | "success"} action="dismiss">
                                <span>{ errors.alertBox.message as any }</span>
                            </AlertBox>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Contact;
