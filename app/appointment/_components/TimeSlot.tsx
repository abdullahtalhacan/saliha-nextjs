import React, { useEffect, useRef } from "react";
import { getCurrentTime, generateTimeSlot } from "../../utils/helpers";
import { RefType } from "../types";
import { ClockIcon } from "@heroicons/react/24/outline";

type TimeSlotTypes = {
    timeRange: {
      startingTime: number
      endingTime: number
    },
    activeTime?: string
    unavailableTimes: Array<string> | undefined
    timeZone: string
    isActive: boolean
    onSelect?: (value: string) => void,
}

const TimeSlot = ({timeRange, activeTime, timeZone, unavailableTimes, isActive, onSelect}: TimeSlotTypes) => {
  const timeSlotRef: RefType = useRef(null);
  const currentTime = getCurrentTime(timeZone);
  const timeSlot = generateTimeSlot(timeRange.startingTime, timeRange.endingTime);

  const TimeInfoPanel = () => {
    return (
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
    )
  }

  //useEffect(() => {console.log("🚀 ~ TimeSlot ~ activeTime:", activeTime)}, [activeTime])
  

  const GenerateTimeList = () => {
    return Array.from({length: timeSlot.length}, (_, key) => {
      const isAvailable = unavailableTimes && !(unavailableTimes.includes(timeSlot[key]))
      return (
        <a 
          key={key} 
          onClick={() => isAvailable ? onSelect && onSelect(timeSlot[key]) : undefined} 
          className={`py-2 text-center font-semibold select-none border border-zinc-950/20 rounded-lg ${
            isAvailable ? activeTime === timeSlot[key] ? "text-white bg-indigo-600" : "cursor-pointer text-indigo-700 hover:text-white hover:bg-indigo-600" : "bg-gray-100 text-indigo-700 cursor-not-allowed opacity-70"
          }`}>
          { timeSlot[key] }
        </a>
      )
    })
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
        <TimeInfoPanel />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <GenerateTimeList />
      </div>
    </div>
  );
};

export default TimeSlot;
