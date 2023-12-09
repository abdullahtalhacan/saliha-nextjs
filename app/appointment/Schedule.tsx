"use client"
import React, { useEffect, useState } from 'react'
import LogPanel from '../components/LogPanel';

const Schedule = () => {

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate();
  }

  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(`${year}-${month}-1`).getDay()
  }

  /**
   * Get the name of a month based on its number.
   * @param {number} monthNumber - The month number (1-12).
   * @param {"short" | "numeric" | "2-digit" | "long" | "narrow" | undefined} format - The format of the month name.
   * @param {string} [lang="tr-TR"] - The language code for localization (default is "tr-TR").
   * @returns {string} The name of the month.
  */
  const getMonthName = (
    monthNumber: number,
    format: "short" | "numeric" | "2-digit" | "long" | "narrow" | undefined,
    lang: string = "en"
  ): string => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString(lang, {
      month: format,
    });
  };

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
                    month: getMonthName(getPrevMonth(month), 'short', lang)
                  }
              } else if (currentDay <= daysInMonth) {
                  // Fill in the days of the current month
                  week[col] = {
                    number: currentDay,
                    month: getMonthName(month, 'short', lang)
                  };
                  currentDay++;
              } else {
                  // Fill in the days from the next month
                  week[col] = {
                    number: currentDay - daysInMonth,
                    month: getMonthName(getNextMonth(month), 'short', lang)
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

  /**
   * Get the current time in a specified timezone.
   *
   * @param {string} timezone - The timezone identifier.
   * @param {string} [lang='tr-TR'] - The language code for localization (default is 'tr-TR').
   * @returns {string} The formatted current time in the specified timezone.
  */
  const getCurrentTimeInLocation = (timezone: string, lang: string = 'tr-TR'): string => {
    const options: Intl.DateTimeFormatOptions = { timeZone: timezone, hour: '2-digit', minute: '2-digit', hour12: false };
    const formatter = new Intl.DateTimeFormat(lang, options);
    return formatter.format(new Date());
  };

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

  const lang = 'tr-TR'
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
  const [activeTime, setActiveTime] = useState<string | boolean>(false)

  const [daysArray, setDaysArray] = useState(generateMonthArray(currentYear, currentMonth))

  useEffect(() => {
    setDaysArray(generateMonthArray(activeMonth === currentMonth ? currentYear : fixedYear(currentYear, currentMonth), activeMonth))
    if(currentMonth === activeMonth){
      setActiveYear(currentYear)
    }else(
      setActiveYear(fixedYear(currentYear, currentMonth))
    )
    if(selectedDateIndex.month === undefined)
      activeMonth === currentMonth ? setActiveRow(selectedDateIndex.row) : setActiveRow(0)
    else
      activeMonth === selectedDateIndex.month ? setActiveRow(selectedDateIndex.row) : setActiveRow(0)
  }, [activeMonth])

  const todaysIndex: any | {
      row: number;
      column: number;
  } = findIndex(daysArray, parseInt(currentDay), getMonthName(currentMonth, 'short', lang))

  const [selectedDateIndex, setSelectedDateIndex] = useState<{
    row: number;
    column: number;
    day: number;
    month: number;
    year: number
  }>(todaysIndex)

  const daysOfWeek = {
    'en-US': [
      { short: 'Sun', long: 'Sunday' },
      { short: 'Mon', long: 'Monday' },
      { short: 'Tue', long: 'Tuesday' },
      { short: 'Wed', long: 'Wednesday' },
      { short: 'Thu', long: 'Thursday' },
      { short: 'Fri', long: 'Friday' },
      { short: 'Sat', long: 'Saturday' }
    ],
    'tr-TR': [
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
      name: getMonthName(currentMonth, "long", lang),
      number: currentMonth
    },
    {
      name: getMonthName(getNextMonth(currentMonth), "long", lang),
      number: getNextMonth(currentMonth)
    },
    {
      name: getMonthName(getNextMonth(currentMonth, true), "long", lang),
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
    <div className="space-y-5 -mt-2.5 select-none">
      <LogPanel activeMonth={activeMonth}
      activeYear={activeYear}
      activeTime={activeTime}
      activeRow={activeRow}
      selectedDate={selectedDateIndex}
      />
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
              {daysArray.map((items, index) =>
                items.map((item, key) => (
                  <div
                    key={key}
                    onClick={() =>
                      item.month === getMonthName(activeMonth, "short", lang)
                        ? setSelectedDateIndex({ row: index, column: key, day: item.number , month: activeMonth, year: activeYear })
                        : undefined
                    }
                    className={`w-full flex flex-col px-8 space-y-2 text-center items-center select-none justify-center py-4 ${
                      item.month === getMonthName(activeMonth, "short", lang)
                        ? selectedDateIndex.row === index && selectedDateIndex.column === key
                          ? item.month === getMonthName(selectedDateIndex.month, 'short', lang)
                            ? "text-white bg-indigo-600 cursor-pointer"
                            : ""
                          : "hover:text-white hover:bg-indigo-600 cursor-pointer"
                        : "text-zinc-400 cursor-not-allowed"
                    }`}
                  >
                    <span
                      className={`font-bold ${
                        todaysIndex.row === index && todaysIndex.column === key
                          ? "px-2 text-white bg-indigo-600 rounded-full"
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
          Randevu saatini seçiniz
        </h3>
        <div className="flex space-x-3 items-center text-sm">
          <span className="text-indigo-700 font-medium">Istanbul Saati (UTC +3)</span>
          <div className='w-1 h-1 bg-zinc-950/70 rounded-full'></div>
          <span className='text-indigo-700 font-semibold'>{currentTime}</span>
          <div className='w-1 h-1 bg-zinc-950/70 rounded-full'></div>
          <div className="flex items-center space-x-2 text-zinc-950/70">
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
            <span>45 dakika görüşme</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Array.from(new Array(timeSlot.length), (_, index: number) => (
          <button
            key={index}
            onClick={() => setActiveTime(prev => timeSlot[index])}
            className={`py-2 text-indigo-700 ${activeTime === timeSlot[index] ? 'text-white bg-indigo-600' : 'hover:text-white hover:bg-indigo-600'} font-semibold border border-zinc-950/20 rounded-lg`}
          >
            {timeSlot[index]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Schedule