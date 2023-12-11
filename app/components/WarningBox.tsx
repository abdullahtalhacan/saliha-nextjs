'use client'

import { useState } from "react"

const WarningBox = () => {
    const [toggle, setToggle] = useState<boolean>(false)
  return (
      <div onClick={() => setToggle(!toggle)} className={`${toggle ? 'bg-green-50' : 'bg-red-50'} p-2 rounded-md cursor-pointer transition-all duration-300`}>
          <div className='flex px-6 relative'>
              <div className="absolute right-0 top-0 flex items-center justify-center rounded-lg">
                  {
                      toggle ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-green-400"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd"></path></svg>
                      ) : (
                        <span className="w-5 h-5 text-center text-red-400">*</span>
                      )
                  }
              </div>
              <div className={`ml-4 text-sm ${toggle ? 'text-green-700' : 'text-red-700'}`}>
                  <ul className='mt-2 list-disc'>
                      <li>Seans süresi 45 Dakikadır.</li>
                      <li>Seans ücreti <span className="font-semibold">300 TL</span>'dir.</li>
                      <li>Randevunuz seans ücreti ödendikten sonra aktif hale gelecektir.</li>
                      <li>Randevunuzu seans saatinden 12 saat öncesine kadar düzenleyebilir veya iptal edeblirsiniz.</li>
                      <li>Seans ücretini IBAN adresimize gönderebilirsiniz. Gönderme işleminde açıklama kısmına <span className="underline underline-offset-2">adınızı</span> yazınız.</li>
                  </ul>

                  <h3 className='font-medium mt-4'>Hükümleri ve koşulları okudum, kabul ediyorum.</h3>
              </div>
          </div>
      </div>
  )
}

export default WarningBox