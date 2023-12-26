'use client'
import AlertBox from '@/app/components/AlertBox'
import Tooltip from '@/app/components/Tooltip'
import { getDayName, getMonthName } from '@/app/utils/helpers'
import { InformationCircleIcon } from '@heroicons/react/16/solid'
import { BanknotesIcon, CalendarDaysIcon, CheckCircleIcon, ClockIcon, KeyIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useRef } from 'react'

const DetailForm = ({data}: any) => {
    const topDivRef = useRef(null)
    useEffect(() => {
        //@ts-ignore
        topDivRef && topDivRef.current && window.scrollTo({ top: topDivRef.current.offsetTop - 100, behavior: 'smooth' });
    }, [data])
  return (
    <div className='flex flex-col space-y-4 items-center justify-center'>
        <div ref={topDivRef} className="flex flex-col text-center items-center">
            <div className='relative pb-4'>
                <div className='absolute -top-[3px] left-1 rotate-12 w-10 h-10 rounded-md bg-green-600'></div>
                <div className=' flex justify-center items-center w-10 h-10 p-1 rounded-md backdrop-blur-sm bg-white/30 z-50'>
                    <CheckCircleIcon className='w-6 h-6 fill-none text-white' />
                </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Teşekkürler! Randevuz Kayıt Edildi.</h2>
            <p className="text-sm text-gray-600">Lütfen aşağıdaki bilgileri ve e-posta hesabınızı kontrol ediniz</p>
        </div>
        
        <div className='flex'>
            <div className='border border-zinc-950/20 rounded-md px-3 py-1 divide-y divide-zinc-950/20'>
                <div className='grid grid-cols-5 space-x-3 items-center py-4'>
                    <div className='col-span-2 flex items-center mr-3'>
                        <div className='border rounded-md p-1.5  mr-2'>
                            <BanknotesIcon className='w-5 h-5' />
                        </div>
                        <span className='font-semibold'>Ücret</span>
                    </div>
                    <span className='col-span-3'>{ data.price } TL</span>
                </div>
                <div className='grid grid-cols-5 space-x-3 items-center py-4'>
                    <div className='col-span-2 flex items-center mr-3'>
                        <div className='border rounded-md p-1.5  mr-2'>
                            <ClockIcon className='w-5 h-5' />
                        </div>
                        <span className='font-semibold'>Saat</span>
                    </div>
                    <span className='col-span-3'>{ data.time }</span>
                </div>
                <div className='grid grid-cols-5 space-x-3 items-center py-4'>
                    <div className='col-span-2 flex items-center mr-3'>
                        <div className='border rounded-md p-1.5  mr-2'>
                            <CalendarDaysIcon className='w-5 h-5' />
                        </div>
                        <span className='font-semibold'>Tarih</span>
                    </div>
                    <span className='col-span-3'>{data.date.day} { getMonthName(data.date.month, 'long')} {data.date.year}, {getDayName([data.date.year, data.date.month, data.date.day], 'long', 'tr-TR')}</span>
                </div>
                <div className='grid grid-cols-5 space-x-3 items-center py-4'>
                    <div className='col-span-2 flex items-center mr-3'>
                        <div className='border rounded-md p-1.5  mr-2'>
                            <KeyIcon className='w-5 h-5' />
                        </div>
                        <span className='flex items-center font-semibold'>
                            <span className='mr-1'>Randevu Kodu</span>
                            <Tooltip message={"Randevu işlemleri için gerekli"} position='top'>
                                <InformationCircleIcon className='w-3 h-3 fill-zinc-950/80' />
                            </Tooltip>
                        </span>
                    </div>
                    <span className='col-span-3'>{ data.verifyCode }</span>
                </div>
            </div>
        </div>

        <div className='max-w-4xl'>
            <AlertBox type='success'>
                <p>Randevu bilgileriniz <span className='font-semibold text-green-700'>{data.email}</span> adresine gönderildi. Lütfen e-posta adresinizi ve bilgileri kontrol ediniz.Eğer bilgilerde bir yanlışlık olduğunu düşünüyorsanız bizimle iletişime geçebilir yada <span className='font-semibold text-green-700'>Randevu İşlemleri</span> sayfasından bilgilerinizi düzenleyebilirsiniz.</p>
            </AlertBox>
        </div>
    </div>
  )
}

export default DetailForm