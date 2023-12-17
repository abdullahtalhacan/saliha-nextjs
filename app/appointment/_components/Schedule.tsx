"use client"
import React, { useEffect, useState } from 'react'
import { RegisterData } from '../types';
import {
  generateMonthArray,
  getMonthName,
  findIndex,
  getWeekDays,
} from "../../utils/helpers";
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

type ScheduleType = {
  currentDay: number
  currentMonth: number
  currentYear: number
  activeMonth: number
  activeYear: number
  lang?: string
  state: (data: RegisterData) => void
}

const Schedule = ({currentDay, currentMonth, currentYear, activeMonth, activeYear, lang = "tr-TR", state }: ScheduleType) => {

  const areaHight = 76 //px
  
  const [daysArray, setDaysArray] = useState(generateMonthArray(currentYear, currentMonth, lang))
  const [todaysIndex, setTodaysIndex]: any | {
    row: number;
    column: number;
  } = useState(findIndex(daysArray, currentDay, getMonthName(currentMonth, 'short', lang)))

  const [selectedDate, setSelectedDate] = useState<{
    row: number;
    column: number;
    day: number;
    month: number;
    year: number
  }>(todaysIndex)

  const daysOfWeek = getWeekDays(1, lang)

  const daysColumn = daysArray.length - 1

  const [activeColumn, setActiveColumn] = useState(todaysIndex.row)

  const handlePrevColumn = () => {
    setActiveColumn((prev: any) => activeColumn === 0 ? 0 : prev - 1)
  }
  const handleNextColumn = () => {
    setActiveColumn((prev: any) => activeColumn === daysColumn ? daysColumn : activeColumn + 1)
  }

  useEffect(() => {
    setDaysArray(generateMonthArray(activeYear, activeMonth, lang))
    if (selectedDate.month === undefined){
      activeMonth === currentMonth ? setActiveColumn(selectedDate.row) : setActiveColumn(0)
    }
    else{
      activeMonth === selectedDate.month ? setActiveColumn(selectedDate.row) : 
      currentMonth === activeMonth ? setActiveColumn(todaysIndex.row) : setActiveColumn(0)
    }
  }, [activeMonth])

  useEffect(() => {
    state({
      name: 'selectedDay',
      value: {
        day: selectedDate.day,
        month: selectedDate.month,
        year: selectedDate.year,
      }
    })
  }, [selectedDate])

  return (
    <div className="flex space-x-4 items-center justify-center">
      <div onClick={() => handlePrevColumn()} className="border p-2 cursor-pointer border-zinc-950/20 rounded-lg group hover:border-transparent hover:bg-indigo-600">
        <ChevronLeftIcon className="w-6 h-6 stroke-indigo-700 group-hover:stroke-white"/>
      </div>
      <div className="w-full border border-zinc-950/20 rounded-lg">
        <div className="flex justify-center font-medium text-zinc-800 bg-indigo-50 space-x-6 rounded-t-lg px-4 py-2">
          {Object.keys(daysOfWeek).map((_, key) => (
            <span key={key} className="w-full text-center justify-center items-center select-none">
              {daysOfWeek[key]}
            </span>
          ))}
        </div>
        <div className="overflow-hidden" style={{
            height: areaHight + "px",
          }}
        >
          <div className="grid grid-cols-7 rounded-b-lg transition-all duration-300" style={{
              transform: `translateY(-${areaHight * activeColumn}px)`,
            }}
          >
            {daysArray.map((items, index) =>
              items.map((item, key) => (
                <div
                  key={key}
                  onClick={() =>
                    item.month === getMonthName(activeMonth, "short", lang)
                      ? !(item.month === getMonthName(currentMonth, "short", lang) && item.number + 1 <= currentDay)
                        ? selectedDate.row === index && selectedDate.column === key
                          ? item.month === getMonthName(selectedDate.month, "short", lang)
                            ? setSelectedDate({
                              row: index,
                              column: key,
                              day: item.number,
                              month: activeMonth,
                              year: activeYear,
                            })
                            : setSelectedDate({
                              row: index,
                              column: key,
                              day: item.number,
                              month: activeMonth,
                              year: activeYear,
                            })
                          : setSelectedDate({
                            row: index,
                            column: key,
                            day: item.number,
                            month: activeMonth,
                            year: activeYear,
                          })
                        : undefined
                      : undefined
                  }
                  className={`w-full flex flex-col px-8 space-y-1 text-center items-center select-none justify-center py-2 ${
                    item.month === getMonthName(activeMonth, "short", lang)
                      ? !(item.month === getMonthName(currentMonth, "short", lang) && item.number + 1 <= currentDay)
                        ? selectedDate.row === index && selectedDate.column === key
                          ? item.month === getMonthName(selectedDate.month, "short", lang)
                            ? "text-white bg-indigo-600 cursor-pointer"
                            : "hover:text-white hover:bg-indigo-600 cursor-pointer"
                          : "hover:text-white hover:bg-indigo-600 cursor-pointer"
                        : "text-zinc-400 cursor-not-allowed"
                      : "text-zinc-400 cursor-not-allowed"
                  }`}
                >
                  <span
                    className={`font-bold p-1 w-8 h-8 text-center ${
                      item.month === getMonthName(currentMonth, "short", lang) && todaysIndex.row === index && todaysIndex.column === key
                        ? "text-white bg-indigo-600 rounded-full"
                        : ""
                    }`}
                  >
                    {item.number}
                  </span>
                  <span>{item.month}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div onClick={() => handleNextColumn()} className="border p-2 cursor-pointer border-zinc-950/20 rounded-lg group hover:border-transparent hover:bg-indigo-600">
        <ChevronRightIcon className="w-6 h-6 stroke-indigo-700 group-hover:stroke-white"/>
      </div>
    </div>
  );
}

export default Schedule