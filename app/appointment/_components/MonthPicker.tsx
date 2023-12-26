import { getMonthName } from "../../utils/helpers";
import { MonthAndYearType, LimitType, MonthTextFormatOptions } from "./types";

type MonthPickerType = {
  startingDate?: Date;
  limit?: LimitType;
  locale?: string;
  format?: MonthTextFormatOptions;
  selectedDate?: MonthAndYearType;
  onSelect?: ({} : MonthAndYearType) => void
};

const MonthPicker = ({
  startingDate = new Date,
  limit = 6,
  locale = "tr-TR",
  selectedDate,
  format = 'long',
  onSelect,
}: MonthPickerType) => {

    const months = Array.from({ length: limit }, (_, i) => {
      const nextMonth = new Date(startingDate);
      nextMonth.setMonth(startingDate.getMonth() + i);
      return { month: nextMonth.getMonth() + 1, year: nextMonth.getFullYear() };
    });



    //onSelect && onSelect(selectedDate ? selectedDate : { month: months[0].month, year: months[0].year})
    
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${limit}, minmax(0, 1fr))`,
          gap: "1rem",
        }}
      >
        {months.map(({ month, year }, key) => (
          <div
            key={key}
            onClick={() =>
              onSelect && onSelect({ month, year })
            }
            className={`w-full py-2 text-center cursor-pointer font-semibold border border-zinc-950/20 rounded-lg ${
              selectedDate
                  ? selectedDate.month === month &&
                    selectedDate.year === year
                    ? "text-white bg-indigo-700"
                    : "text-indigo-600 hover:text-white hover:bg-indigo-600"
                  : key === 0
                  ? "text-white bg-indigo-700"
                  : "text-indigo-600 hover:text-white hover:bg-indigo-600"
                
            }`}
          >
            {getMonthName(month, format, locale)}
          </div>
        ))}
      </div>
    );
  
};

export default MonthPicker;
