'use client'
import React, { useEffect, useRef, useState } from 'react'
import { ArrowSmallRightIcon, CheckCircleIcon, XMarkIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';

type AlertBoxType = {
    type: "danger" | "warning" | "info" | "success";
    title?: string
    action?: "dismiss" | "none";
    link?: never;
    linkName?: never;
    target?: React.HTMLAttributeAnchorTarget
    children: any;
} | {
    type: "danger" | "warning" | "info" | "success";
    title?: string
    action?: "link";
    link: string;
    linkName: string;
    target?: React.HTMLAttributeAnchorTarget
    children: any;
};

const AlertBox = ({type, title, action="none", link, linkName, target, children}: AlertBoxType) => {

  const typeVariants = {
    success: {
      icon: <CheckCircleIcon className='w-5 h-5 text-green-400' />,
      bg: 'bg-green-50',
      text: {
        600: "text-green-600  hover:text-green-500",
        700: "text-green-700",
        800: "text-green-800",
      }
    },
    info: {
      icon: <InformationCircleIcon className='w-5 h-5 text-blue-400' />,
      bg: 'bg-blue-50',
      text: {
        600: "text-blue-600  hover:text-blue-500",
        700: "text-blue-700",
        800: "text-blue-800",
      }
    },
    warning: {
      icon: <ExclamationTriangleIcon className='w-5 h-5 text-yellow-400' />,
      bg: 'bg-yellow-50',
      text: {
        600: "text-yellow-600  hover:text-yellow-500",
        700: "text-yellow-700",
        800: "text-yellow-800",
      }
    },
    danger: {
      icon: <XCircleIcon className='w-5 h-5 text-red-400' />,
      bg: 'bg-red-50',
      text: {
        600: "text-red-600  hover:text-red-500",
        700: "text-red-700",
        800: "text-red-800",
      }
    }
  }

  const alertBoxRef = useRef<HTMLDivElement>(null)
  const [fade, setFade] = useState<boolean>(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (fade) {
      timeoutId = setTimeout(() => {
        alertBoxRef.current && (alertBoxRef.current.style.display = 'none')
      }, 300);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
  }, [fade])
  
  return (
    <div ref={alertBoxRef} className={`p-2 rounded-md ${ typeVariants[type].bg } ${fade ? "opacity-0" : "opacity-100"} transition-all duration-300`}>
      <div className="flex">
        <div className="flex-shrink-0">
          { typeVariants[type].icon }
        </div>
        <div className="ml-3 flex-grow">
          {title && <h3 className={`font-medium text-sm ${typeVariants[type].text[800]}`}>{ title }</h3>}
          <div className={`${title ? 'mt-2' : ""} text-sm ${typeVariants[type].text[700]}`}>
            <p>{children}</p>
          </div>
        </div>
        <div className={`${typeVariants[type].text[600]} ${action !== 'dismiss' ? 'flex group/link items-center ml-auto pl-3' : ''}`}>
          {action !== "none" && (
            action === "dismiss" ? (
              <div className="-mx-1.5 -my-1.5 cursor-pointer" onClick={() => setFade(!fade)}>
                <div className="inline-flex rounded-md p-1.5">
                  <XMarkIcon className="w-5 h-5"/>
                </div>
              </div>
            ) : (
              <p className='ml-6'>
                <a href={link} target={target} className="whitespace-nowrap flex items-center text-sm font-medium">
                  { linkName } 
                  <ArrowSmallRightIcon className='w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-all duration-200' strokeWidth={2}/>
                </a>
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default AlertBox