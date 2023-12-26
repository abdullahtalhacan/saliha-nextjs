import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { useState, useRef } from "react";
import { RefType } from "../types";

type AgreementBoxType = {
    children:  JSX.Element | JSX.Element[]
    isActive: boolean
    onSelect: (value: boolean) => void
}

const AgreementBox = ({children, isActive, onSelect} : AgreementBoxType) => {
    const boxRef: RefType = useRef(null)
    const [toggle, setToggle] = useState<boolean>(false)
  return (
    <div 
        ref={boxRef}
        style={{
            height: isActive ? boxRef?.current?.scrollHeight + "px" : 0,
        }} 
        onClick={() => {
            setToggle(!toggle)
            onSelect && onSelect(!toggle) //I avoided using useEffect
        }} className="overflow-hidden transition-all duration-300">
      <div className={`${toggle ? "bg-green-50" : "bg-red-50 hover:bg-red-100 "} p-2 rounded-md cursor-pointer transition-all duration-300`}>
        <div className="flex px-6 relative">
            <div className="absolute right-0 top-0 flex items-center justify-center rounded-lg">
                {toggle ? <CheckCircleIcon className="w-5 h-5 text-green-400" /> : <span className="w-5 h-5 text-center text-red-400">*</span>}
            </div>
            <div className={`ml-4 text-sm ${toggle ? "text-green-700" : "text-red-700"}`}>
                {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementBox;
