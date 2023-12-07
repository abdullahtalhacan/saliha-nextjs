"use client"
import React, { useEffect, useState } from 'react'

const Schedule = () => {

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate();
  }

  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(`${year}-${month}-1`).getDay()
  }

  const getMonthName = (monthNumber: number, format: "short" | "numeric" | "2-digit" | "long" | "narrow" | undefined) => {
      const date = new Date();
      date.setMonth(monthNumber - 1);
    
      return date.toLocaleString('en-US', {
        month: format,
      });
  }

  const getNextMonth = (monthNumber: number, next?: boolean) => {
      let nextMonth = monthNumber === 12 ? 1 : monthNumber + 1
      return next ? nextMonth + 1 : nextMonth
  }

  const getPrevMonth = (monthNumber: number) => {
    return monthNumber === 1 ? 12 : monthNumber - 1
  }

  const fixedYear = (year: number, month: number) => {
    let fixedYear = year
    if(month === 12)
      fixedYear = fixedYear + 1
    if(month === 1)
      fixedYear = fixedYear - 1

    return fixedYear
  }

  const generateMonthArray = (year: number, month: number) => {
      const daysInMonth = getDaysInMonth(year, month)
      const firstDayOfMonth = getFirstDayOfMonth(year, month)

      // Calculate the last day of the previous month
      const lastDayOfPrevMonth = getDaysInMonth(year, getPrevMonth(month))

      // Calculate the number of days to fill from the previous month
      const daysToFillFromPrevMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth;

      const totalDays = daysInMonth + daysToFillFromPrevMonth;
      const numRows = Math.ceil(totalDays / 7);

      let daysArray = [];
      let currentDay = 1;

      for (let row = 0; row < numRows; row++) {
          let week = [];
          for (let col = 0; col < 7; col++) {
              if (row === 0 && col < daysToFillFromPrevMonth) {
                  // Fill in the days from the previous month
                  week[col] = {
                    number: lastDayOfPrevMonth - daysToFillFromPrevMonth + 1 + col,
                    month: getMonthName(getPrevMonth(month), 'short')
                  }
              } else if (currentDay <= daysInMonth) {
                  // Fill in the days of the current month
                  week[col] = {
                    number: currentDay,
                    month: getMonthName(month, 'short')
                  };
                  currentDay++;
              } else {
                  // Fill in the days from the next month
                  week[col] = {
                    number: currentDay - daysInMonth,
                    month: getMonthName(getNextMonth(month), 'short')
                  }
                  currentDay++;
              }
          }
          daysArray.push(week);
      }

      return daysArray;
  }

  const generateTimeSlot = (startingTime: number, endingTime: number) => {
    const startTime = new Date();
    startTime.setHours(startingTime, 0, 0);
    const endTime = new Date();
    endTime.setHours(endingTime, 0, 0);
    const timeArray = [];
    for (let currentTime = new Date(startTime); currentTime <= endTime; currentTime.setHours(currentTime.getHours() + 1)) {
      timeArray.push(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    }
    return timeArray;
  }

  const getCurrentTimeInLocation = (timezone: string) => {
    const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', hour24: true };
    //@ts-ignore
    const formatter = new Intl.DateTimeFormat('tr-TR', options);
    return formatter.format(new Date());
  }

  const findIndex = (array: {}[][], targetNumber: number, targetMonth: string) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
          //@ts-ignore
            if (array[i][j].number === targetNumber && array[i][j].month === targetMonth) {
                return { row: i, column: j };
            }
        }
    }
    return -1; // Not found
  }

  const lang = 'en'
  const areaHight = 88 // 88 | 176 (px)
  const date = new Date()
  const ymd = date.toISOString().split('T')[0].split('-')
  const currentYear = parseInt(ymd[0])
  const currentMonth = parseInt(ymd[1])    
  const currentDay = ymd[2]
  const currentTime = getCurrentTimeInLocation('Europe/Istanbul')
  const timeSlot = generateTimeSlot(12, 21)

  const [activeMonth, setActiveMonth] = useState(currentMonth)
  const [activeYear, setActiveYear] = useState(currentYear)

  const [daysArray, setDaysArray] = useState(generateMonthArray(currentYear, currentMonth))

  useEffect(() => {
    setDaysArray(generateMonthArray(fixedYear(currentYear, currentMonth), activeMonth))//sorun var 
    activeMonth === currentMonth ? setActiveRow(selectedDayIndex.row) : setActiveRow(0)
  }, [activeMonth])

  const todaysIndex: any | {
      row: number;
      column: number;
  } = findIndex(daysArray, parseInt(currentDay), getMonthName(currentMonth, 'short'))

  const [selectedDayIndex, setSelectedDayIndex] = useState(todaysIndex)

  const daysOfWeek = {
    en: [
      { short: 'Sun', long: 'Sunday' },
      { short: 'Mon', long: 'Monday' },
      { short: 'Tue', long: 'Tuesday' },
      { short: 'Wed', long: 'Wednesday' },
      { short: 'Thu', long: 'Thursday' },
      { short: 'Fri', long: 'Friday' },
      { short: 'Sat', long: 'Saturday' }
    ],
    tr: [
      { short: 'Paz', long: 'Pazar' },
      { short: 'Pts', long: 'Pazartesi' },
      { short: 'Sal', long: 'Salı' },
      { short: 'Çar', long: 'Çarşamba' },
      { short: 'Per', long: 'Perşembe' },
      { short: 'Cum', long: 'Cuma' },
      { short: 'Cts', long: 'Cumartesi' }
    ]
  };
  
  const months = [
    {
      name: getMonthName(currentMonth, "long"),
      number: currentMonth
    },
    {
      name: getMonthName(getNextMonth(currentMonth), "long"),
      number: getNextMonth(currentMonth)
    },
    {
      name: getMonthName(getNextMonth(currentMonth, true), "long"),
      number: getNextMonth(currentMonth, true)
    }
  ];

  const daysRow = daysArray.length - 1

  const [activeRow, setActiveRow] = useState(todaysIndex.row)

  const handlePrevRow = () => {
    setActiveRow((prev: any) => activeRow === 0 ? 0 : prev - 1)
  }
  const handleNextRow = () => {
    setActiveRow((prev: any) => activeRow === daysRow ? daysRow : activeRow + 1)
  }

  return (
    <div className="space-y-5 select-none">
      <div className="grid grid-cols-3 gap-3">
        {months.map((item, key) => (
          <button
            key={key}
            onClick={() => setActiveMonth((prev) => item.number)}
            className={`py-2 ${
              item.number === activeMonth
                ? "text-white bg-indigo-700"
                : "text-indigo-600 hover:text-white hover:bg-indigo-600"
            } font-semibold border border-zinc-950/20 rounded-lg`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <span>{currentYear }</span><br />
      <span>{ JSON.stringify(selectedDayIndex) }</span>


      <div className="flex space-x-4 items-center justify-center">
        <div
          onClick={() => handlePrevRow()}
          className="border p-2 cursor-pointer border-zinc-950/20 rounded-lg group hover:bg-indigo-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-indigo-700 group-hover:stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="w-full border border-zinc-950/20 rounded-lg">
          <div className="flex justify-center font-medium text-zinc-800 bg-indigo-50 space-x-6 rounded-t-lg px-4 py-2">
            {daysOfWeek[lang].map((item, key) => (
              <span
                key={key}
                className="w-full text-center justify-center items-center select-none"
              >
                {item.short}
              </span>
            ))}
          </div>
          <div
            className="overflow-hidden"
            style={{
              height: areaHight + "px",
            }}
          >
            <div
              className="grid grid-cols-7 rounded-b-lg transition-all duration-300"
              style={{
                transform: `translateY(-${areaHight * activeRow}px)`,
              }}
            >

              {
                daysArray.map((items, index) => 
                  items.map((item, key) => (
                    <div
                    key={key}
                    onClick={() => item.month === getMonthName(activeMonth, 'short') 
                      ? setSelectedDayIndex({row: index, column: key}) 
                      : undefined
                    }
                    className={`w-full flex flex-col px-8 space-y-2 text-center items-center select-none justify-center py-4 ${
                      item.month === getMonthName(activeMonth, 'short') ? (
                        selectedDayIndex.row === index && selectedDayIndex.column === key 
                          ? (item.month === getMonthName(currentMonth, 'short') ? 'text-white bg-indigo-600 cursor-pointer' : '') 
                          : 'hover:text-white hover:bg-indigo-600 cursor-pointer') 
                      : ('text-zinc-400 cursor-not-allowed')
                    }`}
                  >
                    <span className={`font-bold ${
                      todaysIndex.row === index && todaysIndex.column === key
                      ? 'px-2 text-white bg-indigo-600 rounded-full' 
                      : ''
                      }`}>
                        { item.number }
                    </span>
                    <span>{ item.month }</span>
                  </div>
                  ))
                )
              }
              
            </div>
          </div>
        </div>
        <div
          onClick={() => handleNextRow()}
          className="border p-2 cursor-pointer border-zinc-950/20 rounded-lg group hover:bg-indigo-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-indigo-700 group-hover:stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-2">
        <h3 className="max-w-sm font-semibold border-b text-center border-zinc-950/30 px-6 py-2">
          Select a time slot
        </h3>
        <div className="flex space-x-4 text-sm">
          <span className="text-indigo-700 font-medium">
            Istanbul Time (UTC +3) { currentTime }
          </span>
          <div className="flex items-center space-x-2 text-zinc-950/70">
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="w-0.5 fill-current"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>45 minute meeting</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {
          Array.from(new Array(timeSlot.length), (_, index: number) => (
            <button key={index} className="py-2 text-indigo-700 hover:text-white hover:bg-indigo-600 font-semibold border border-zinc-950/20 rounded-lg">
              { timeSlot[index] }
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default Schedule