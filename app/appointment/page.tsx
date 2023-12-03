import React from 'react'
import Schedule from './Schedule'

const Appointment = () => {

    return (
        <div className="max-w-5xl px-4 py-5 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="bg-white rounded-xl shadow p-4 sm:p-7">
                <div className="mb-8 text-center">
                    <h2 className="text-xl font-bold text-gray-800">
                        Appointment Form
                    </h2>
                    <p className="text-sm text-gray-600">
                        Manage your name, password and account settings.
                    </p>
                </div>

                <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">

                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5">
                            Full name
                        </label>
                        <div className="hs-tooltip inline-block">
                            <button type="button" className="hs-tooltip-toggle ms-1">
                                <svg className="inline-block w-3 h-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </button>
                            <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm" role="tooltip">
                                Displayed on public forums, such as Preline
                            </span>
                        </div>
                    </div>

                    <div className="sm:col-span-9">
                        <div className="sm:flex">
                            <input id="af-account-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Maria" />
                            <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Boone" />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5">
                            Email
                        </label>
                    </div>

                    <div className="sm:col-span-9">
                        <input id="af-account-email" type="email" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="maria@site.com" />
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5">
                            Meeting Time
                        </label>
                    </div>

                    <div className="sm:col-span-9">
                        <Schedule />
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5">
                            Meeting Tool
                        </label>
                    </div>

                    <div className="sm:col-span-9">
                        <div className="mx-auto">
                            <nav className="max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4">
                                <button type="button" className="w-full flex items-center justify-center space-x-3 hover:bg-indigo-100 p-3 md:p-5 rounded-xl">
                                    <img src="/icon/whatsapp.svg" alt="" className='flex-shrink-0 hidden sm:block h-7 w-7' />
                                    <span className="block font-semibold text-gray-800">Whatsapp</span>
                                </button>
                                <button type="button" className="w-full flex items-center justify-center space-x-3 hover:bg-indigo-100 p-3 md:p-5 rounded-xl">
                                    <img src="/icon/skype.svg" alt="" className='flex-shrink-0 hidden sm:block h-7 w-7' />
                                    <span className="block font-semibold text-gray-800">Skype</span>
                                </button>
                                <button type="button" className="w-full flex items-center justify-center space-x-3 hover:bg-indigo-100 p-3 md:p-5 rounded-xl">
                                    <img src="/icon/zoom.svg" alt="" className='flex-shrink-0 hidden sm:block h-7 w-7' />
                                    <span className="block font-semibold text-gray-800">Zoom</span>
                                </button>
                            </nav>
                        </div>

                    </div>

                    <div className="sm:col-span-3">
                        <div className="inline-block">
                            <label htmlFor="af-account-phone" className="inline-block text-sm text-gray-800 mt-2.5">
                                Phone
                            </label>
                            <span className="text-sm text-gray-400">
                                (Optional)
                            </span>
                        </div>
                    </div>

                    <div className="sm:col-span-9">
                        <div className="sm:flex">
                            <input id="af-account-phone" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="+x(xxx)xxx-xx-xx" />

                        </div>

                        <p className="mt-3">
                            <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../docs/index.html">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                                Add phone
                            </a>
                        </p>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-gender-checkbox" className="inline-block text-sm text-gray-800 mt-2.5">
                            Gender
                        </label>
                    </div>

                    <div className="sm:col-span-9">
                        <div className="sm:flex">
                            <label htmlFor="af-account-gender-checkbox" className="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                <input type="radio" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="af-account-gender-checkbox" defaultChecked />
                                <span className="text-sm text-gray-500 ms-3">Male</span>
                            </label>

                            <label htmlFor="af-account-gender-checkbox-female" className="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                <input type="radio" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="af-account-gender-checkbox-female" />
                                <span className="text-sm text-gray-500 ms-3">Female</span>
                            </label>

                            <label htmlFor="af-account-gender-checkbox-other" className="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                                <input type="radio" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="af-account-gender-checkbox-other" />
                                <span className="text-sm text-gray-500 ms-3">Other</span>
                            </label>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5">
                            BIO
                        </label>
                    </div>

                    <div className="sm:col-span-9">
                        <textarea id="af-account-bio" className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows={6} placeholder="Type your message..."></textarea>
                    </div>
                </div>

                <div className="mt-5 flex justify-end gap-x-2">
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                        Cancel
                    </button>
                    <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Appointment