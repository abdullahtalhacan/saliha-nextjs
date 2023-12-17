'use client'

import { useEffect, useState } from "react"
import { RegisterData } from "../types"
import { CheckCircleIcon } from "@heroicons/react/20/solid"

const AgreementBox = ( {state, children}: { state: (data: RegisterData) => void, children: JSX.Element | JSX.Element[] } ) => {
    const [toggle, setToggle] = useState<boolean>(false)

    useEffect(() => {
        state({
            name: 'agreement',
            value: toggle
        })
    }, [toggle])
    
  return (
      <div onClick={() => setToggle(!toggle)} className={`${toggle ? 'bg-green-50' : 'bg-red-50'} p-2 rounded-md cursor-pointer transition-all duration-300`}>
          <div className='flex px-6 relative'>
              <div className="absolute right-0 top-0 flex items-center justify-center rounded-lg">
                  {
                      toggle ? (
                        <CheckCircleIcon className="w-5 h-5 text-green-400"/>
                      ) : (
                        <span className="w-5 h-5 text-center text-red-400">*</span>
                      )
                  }
              </div>
              <div className={`ml-4 text-sm ${toggle ? 'text-green-700' : 'text-red-700'}`}>
                  {  children }
              </div>
          </div>
      </div>
  )
}

export default AgreementBox