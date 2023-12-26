import { useState, useEffect } from "react";
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { findIndex, generateMonthArray, getMonthName } from "@/app/utils/helpers";
import { DateType, RowAndColumnType, SelectedDayType, DirectionType, LocaleType, MonthAndYearType, WeekDayTextFormatOptions } from "./types";

type DayPickerType = {
  currentDate: DateType
  selectedDayDate?: DateType
  activeMonth?: MonthAndYearType | undefined
  locale?: LocaleType
  format?: WeekDayTextFormatOptions
  unavaliableDays?: Array<number> | undefined
  onSelect?: ({} : DateType) => void
}

const elementHeight = 76 //px

const DayPicker = ({
  currentDate,
  selectedDayDate,
  activeMonth,
  locale = "tr-TR",
  format = "short",
  unavaliableDays,
  onSelect
}: DayPickerType) => {
  
  const [daysArray,setDaysArray] = useState(generateMonthArray(currentDate.year, currentDate.month))
  const [todayIndex, setTodayIndex] = useState<RowAndColumnType | any>(findIndex(daysArray, currentDate.day, activeMonth ? activeMonth.month : currentDate.month))
  const [selectedDay, setSelectedDay] = useState<SelectedDayType>(todayIndex)
  const [activeColumn, setActiveColumn] = useState(todayIndex.row)
  
  useEffect(() => {
    activeMonth && setDaysArray(generateMonthArray(activeMonth?.year, activeMonth?.month))
    if (!(activeMonth?.month === undefined)){
      activeMonth?.month === selectedDay.month ? setActiveColumn(selectedDay.row) : 
      currentDate.month === activeMonth?.month ? setActiveColumn(todayIndex.row) : setActiveColumn(0)
    }
    let selectedDayDateIndex: RowAndColumnType | any = undefined
    if (selectedDayDate) {
      const selectedDaysArray = generateMonthArray(selectedDayDate.year, selectedDayDate.month)
      selectedDayDateIndex = findIndex(selectedDaysArray, selectedDayDate.day, activeMonth ? activeMonth.month : currentDate.month)
      setSelectedDay({
        day: selectedDayDate.day,
        month: selectedDayDate.month,
        year: selectedDayDate.year,
        row: selectedDayDateIndex.row,
        column: selectedDayDateIndex.column
      })
      setActiveColumn(selectedDayDateIndex.row)
    }
  }, [activeMonth])

  useEffect(() => {
    onSelect && onSelect({
      year: selectedDay.year,
      month: selectedDay.month,
      day: selectedDay.day
    })
  }, [selectedDay])
  
  

  const handleColumnAction = (direction : DirectionType ) => {
    direction === "left" ? 
      setActiveColumn((prev: any) => activeColumn === 0 ? 0 : prev - 1)
    :
      setActiveColumn(() => activeColumn === daysArray.length - 1 ? daysArray.length - 1 : activeColumn + 1)
  }

  const ColumnControlButtons = ({direction} : {direction : DirectionType} ) => {
    return(
      <div onClick={() => handleColumnAction(direction)} className="border p-2 cursor-pointer border-zinc-950/20 rounded-lg group hover:border-transparent hover:bg-indigo-600 transition-all duration-200">
          <ChevronLeftIcon className={`w-6 h-6 stroke-indigo-700 group-hover:stroke-white transition-all duration-200 ${direction === 'left' ? "" : "rotate-180"}`}/>
      </div>
    )
  }

  const WeekDays = ({ locale, format }: { locale: LocaleType; format: WeekDayTextFormatOptions }) => {
    const baseDate = new Date(Date.UTC(2017, 0, 1));
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(baseDate.toLocaleDateString(locale, { weekday: format }));
      baseDate.setDate(baseDate.getDate() + 1);
    }
    return (
      <div className="flex justify-center font-medium text-zinc-800 bg-indigo-50 space-x-6 rounded-t-lg px-4 py-2">
        {Object.values(weekDays).map((day, key) => (
          <span key={key} className="w-full text-center justify-center items-center select-none">
            {day}
          </span>
        ))}
      </div>
    );
  };

  const handleDaySelectAction = (map: {item: { number: number, month: number}, index: number, key: number}, currentDate:DateType, activeMonth: MonthAndYearType) => {
    const isActiveMonth = map.item.month === activeMonth.month;
    const isPastDate = isActiveMonth && map.item.number + 1 <= currentDate.day;
  
    if (isActiveMonth) {
      if(!unavaliableDays?.includes(map.item.number)){
        if(!(map.item.month === currentDate.month && isPastDate)){
          setSelectedDay({
            row: map.index,
            column: map.key,
            day: map.item.number,
            month: activeMonth.month,
            year: activeMonth.year,
          });
        }
      }
    }
  };

  const getDateClassName = (map: {item: { number: number, month: number}, index: number, key: number}, currentDate:DateType, activeMonth: MonthAndYearType, activeIndex: SelectedDayType) => {
    const isActiveMonth = map.item.month === activeMonth.month;
    const isPastDate = isActiveMonth && map.item.number + 1 <= currentDate.day;
    const isSelectedDate = activeIndex.row === map.index && activeIndex.column === map.key;
    if (isActiveMonth) {
      if(map.item.month === currentDate.month && isPastDate){
        return "text-zinc-400 cursor-not-allowed";
      }else{
        if(unavaliableDays?.includes(map.item.number)){
          return "text-zinc-400 cursor-not-allowed";
        }else{
          return isSelectedDate
            ? map.item.month === activeIndex.month
              ? "text-white bg-indigo-600 cursor-pointer"
              : "hover:text-white hover:bg-indigo-600 cursor-pointer"
          : "hover:text-white hover:bg-indigo-600 cursor-pointer";
        }
      }
    } else {
      return "text-zinc-400 cursor-not-allowed";
    }
  };
  
  const Days = ({currentDate, activeMonth, selectedDayDate, locale} : {currentDate:DateType, activeMonth: MonthAndYearType, selectedDayDate?: DateType, locale:LocaleType }) => {
    return daysArray.map((days, index) => days.map((item, key) => (
      <div 
        key={key} 
        onClick={() => handleDaySelectAction({item, index, key}, currentDate, activeMonth)} 
        className={`w-full flex flex-col px-8 space-y-1 text-center items-center select-none justify-center py-2 ${getDateClassName({item, index, key}, currentDate, activeMonth, selectedDay)} transition-all duration-200`}>
        <span className={`font-bold font-mono p-1 w-8 h-8 text-center ${item.month === currentDate.month && todayIndex.row === index && todayIndex.column === key ? "text-white bg-indigo-600 rounded-full" : ""}`}>{item.number}</span>
        <span>{ getMonthName(item.month, 'short', locale) }</span>
      </div>
    )))
  }

  return (
    <div className="flex space-x-4 items-center justify-center">
      <ColumnControlButtons direction="left" />
      <div className="w-full border border-zinc-950/20 rounded-lg">
        <WeekDays locale={locale} format={format} />
        <div style={{ overflow: "hidden", height: `${elementHeight}px`}}>
          <div style={{ transform: `translateY(-${elementHeight * activeColumn}px)`}} className="grid grid-cols-7 rounded-b-lg transition-all duration-300">
            <Days currentDate={currentDate} activeMonth={activeMonth ? activeMonth : {month: currentDate.month, year: currentDate.year}} selectedDayDate={selectedDayDate} locale={locale} />
          </div>
        </div>
      </div>
      <ColumnControlButtons direction="right" />
    </div>
  );
};
 

export default DayPicker