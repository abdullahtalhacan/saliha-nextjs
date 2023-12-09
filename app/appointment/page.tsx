import React from 'react'
import Schedule from './Schedule'
import WarningBox from '../components/WarningBox'

const Appointment = () => {
    const ageRange = {
        min: 10,
        max: 65
    }
    return (
        <div className="max-w-5xl px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="bg-white rounded-xl shadow p-4 sm:p-7">
                <div className="mb-8 text-center">
                    <h2 className="text-xl font-bold text-gray-800">
                        Randevu Formu
                    </h2>
                    <p className="text-sm text-gray-600">
                        Aşağıdaki bilgileri doldurarak başvurunuzu yapınız.
                    </p>
                </div>

                <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">

                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5">
                            Tam Adınız
                        </label>
                        
                    </div>
                    <div className="sm:col-span-9">
                        <div className="sm:flex">
                            <input id="af-account-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-zinc-950/20 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Adınız" />
                            <input type="text" className="py-2 px-3 pe-11 block w-full border-zinc-950/20 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Soyadınız" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5">
                            Mail
                        </label>
                    </div>

                    <div className="sm:col-span-9">
                        <input type="email" className="py-2 px-3 pe-11 block w-full border-zinc-950/20 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="mailadresiniz@site.com" />
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5">
                            Randevu Zamanı
                        </label>
                    </div>

                    <div className="sm:col-span-9">
                        <Schedule />
                    </div>


                    <div className="sm:col-span-3">
                        <div className="inline-block">
                            <label htmlFor="af-account-phone" className="inline-block text-sm text-gray-800 mt-2.5">
                                Telefon
                            </label>
                            <span className="text-sm text-gray-400">
                                (Whatsapp)
                            </span>
                        </div>
                    </div>

                    <div className="sm:col-span-9">
                        <div className="sm:flex">
                            <input type="text" className="py-2 px-3 pe-11 block w-full border-zinc-950/20 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="+x(xxx)xxx-xx-xx" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-gender-checkbox" className="inline-block text-sm text-gray-800 mt-2.5">
                            Cinsiyet
                        </label>
                    </div>

                    <div className="sm:col-span-9">
                        <fieldset>
                            <div className="sm:flex">
                                <label htmlFor="male" className="flex py-2 px-3 w-full border border-zinc-950/20 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 disabled:opacity-50 disabled:pointer-events-none">
                                    <input id='male' type="radio" name="gender" value="male" className="shrink-0 mt-0.5 border-zinc-950/20 rounded-full text-blue-600 focus:ring-0 focus:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none" />
                                    <span className="text-sm text-gray-500 ms-3">Erkek</span>
                                </label>

                                <label htmlFor="female" className="flex py-2 px-3 w-full border border-zinc-950/20 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 disabled:opacity-50 disabled:pointer-events-none">
                                    <input id="female" type="radio" name="gender" value="female" className="shrink-0 mt-0.5 border-zinc-950/20 rounded-full text-blue-600 focus:ring-0 focus:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none" />
                                    <span className="text-sm text-gray-500 ms-3">Kadın</span>
                                </label>
                            </div>
                        </fieldset>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5">
                            Yaş
                        </label>
                    </div>

                    <div className="sm:col-span-9">
                        <select id="af-submit-app-category" className="py-2 px-3 pe-9 block w-full border-zinc-950/20 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                            {
                                Array.from(new Array(ageRange.max - ageRange.min), (_, index) => (
                                    <option key={index} value={index + ageRange.min}>{ index + ageRange.min }</option>
                                ))
                            }
                            <option value="65+">65+</option>
                        </select>
                    </div>

                    <div className='sm:col-span-3'></div>
                    <div className="sm:col-span-9"><WarningBox /></div>
                </div>

                <div className="mt-5 flex justify-end gap-x-2">
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Randevuyu Tamamla
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Appointment