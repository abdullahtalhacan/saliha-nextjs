import React from 'react'
import Schedule from './Schedule'
import WarningBox from '../components/WarningBox'

const Appointment = () => {
    const ageRange = {
        min: 10,
        max: 65
    }
    return (
        <div className='max-w-5xl px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
            <form className='bg-white rounded-xl shadow p-4 sm:p-7'>
                <div className="space-y-8">
                    <div className="border-b border-gray-900/10 pb-8">
                        <div className='text-center'>
                            <h2 className="text-xl font-bold text-gray-800">
                                Randevu Formu
                            </h2>
                            <p className="text-sm text-gray-600">
                                Aşağıdaki bilgileri doldurarak başvurunuzu yapınız.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Adınız
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Soyadınız
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mail Adresi
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Telefon <span className='text-gray-400'>(Whatsapp)</span>
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>



                            <div className="sm:col-span-3">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cinsiyet
                                </label>
                                <div className="mt-2 flex items-center">
                                    <div className='w-1/2 flex gap-x-2 items-center border border-zinc-950/20 shadow-sm border-r-0 py-1.5 px-2 rounded-l-md'>
                                        <input
                                            id="push-email"
                                            name="push-notifications"
                                            type="radio"
                                            className="h-4 w-4 border-zinc-950/20 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Erkek
                                        </label>
                                    </div>
                                    <div className='w-1/2 flex gap-x-2 items-center border border-zinc-950/20 shadow-sm py-1.5 px-2 rounded-r-md'>
                                        <input
                                            id="push-email"
                                            name="push-notifications"
                                            type="radio"
                                            className="h-4 w-4 border-zinc-950/20 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Kadın
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Yaş
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-zinc-950/20 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        {
                                            Array.from(new Array(ageRange.max - ageRange.min), (_, index) => (
                                                <option key={index} value={index + ageRange.min}>{index + ageRange.min}</option>
                                            ))
                                        }
                                        <option value="65+">65+</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                        <div className="max-w-2xl pb-8 px-6">
                            <Schedule />
                        </div>
                    </div>
                </div>

                <div className=""><WarningBox /></div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Randevuyu Tamamla
                    </button>
                </div>
            </form>
        </div>
        
    )
}

export default Appointment