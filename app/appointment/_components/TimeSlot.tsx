import React, { useRef, useState } from "react";
import { getCurrentTime, generateTimeSlot } from "../../utils/helpers";
import { RegisterData, RefType } from "../types";
import { ClockIcon } from "@heroicons/react/24/outline";

type TimeSlotTypes = {
    startingTime: number,
    endingTime: number,
    timeZone: string,
    isActive: any,
    activeTimes: [] | boolean,
    state: (data: RegisterData) => void
}

const TimeSlot = ({startingTime, endingTime, timeZone, isActive, activeTimes, state}: TimeSlotTypes) => {
  const timeSlotRef: RefType = useRef(null);
  const currentTime = getCurrentTime(timeZone);
  const timeSlot = generateTimeSlot(startingTime, endingTime);
  const [activeTime, setActiveTime] = useState<string | boolean>(false);

  const handleClick = (index: number) => {
    setActiveTime(timeSlot[index])
    state({name: 'timeSlot', value: timeSlot[index]})
  }

  return (
    <div
      ref={timeSlotRef}
      className="space-y-4 overflow-hidden transition-all duration-300"
      style={{
        height: isActive ? timeSlotRef?.current?.scrollHeight + "px" : 0,
      }}
    >
      <div className="flex flex-col justify-center items-center space-y-2">
        <h3 className="max-w-sm font-semibold border-b text-center border-zinc-950/30 px-6 py-2">Randevu saatini seçiniz</h3>
        <div className="flex space-x-3 items-center text-sm">
          <span className="text-indigo-700 font-medium">{ timeZone }</span>
          <div className="w-1 h-1 bg-zinc-950/70 rounded-full"></div>
          <span className="text-indigo-700 font-semibold">{currentTime}</span>
          <div className="w-1 h-1 bg-zinc-950/70 rounded-full"></div>
          <div className="flex items-center space-x-2 text-zinc-950/70">
            <ClockIcon className="w-4 h-4" />
            <span>45 dakika görüşme</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Array.from(new Array(timeSlot.length), (_, index: number) => (
          <a key={index} onClick={() => handleClick(index)} className={`py-2 text-center cursor-pointer text-indigo-700 ${activeTime === timeSlot[index] ? "text-white bg-indigo-600" : "hover:text-white hover:bg-indigo-600"} font-semibold border border-zinc-950/20 rounded-lg`}>
            {timeSlot[index]}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TimeSlot;
