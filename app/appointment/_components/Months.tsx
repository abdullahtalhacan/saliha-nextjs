import React, { useEffect, useState } from 'react'
import { getMonthName, getNextMonth } from '../../utils/helpers';
import { RegisterData } from '../types';

type MonthsType = { 
    currentMonth: number
    currentYear: number
    lang?: string
    state: (data: RegisterData) => void
}

const Months = ({currentMonth, currentYear, lang = 'tr-TR', state} : MonthsType) => {

    const [activeMonth, setActiveMonth] = useState(currentMonth)
    const [activeYear, setActiveYear] = useState<number>(currentYear)
    const format = "long"
    const months = [
        {
            name: getMonthName(currentMonth, format, lang),
            number: currentMonth
        },
        {
            name: getMonthName(getNextMonth(currentMonth), format, lang),
            number: getNextMonth(currentMonth)
        },
        {
            name: getMonthName(getNextMonth(currentMonth, true), format, lang),
            number: getNextMonth(currentMonth, true)
        }
    ];
    const handleActiveMonth = (activeMonth: number, newMonth: number) => {
        const monthDifference = newMonth - activeMonth;
        if (Math.abs(monthDifference) > 1) {
            setActiveYear(activeYear - Math.sign(monthDifference));
        }
        setActiveMonth(newMonth);
       
    }
    useEffect(() => {
        state({
            name: 'activeMonth',
            value: {
                number: activeMonth,
                year: activeYear
            }
        })
    }, [activeMonth])
    return (
        <div className="grid grid-cols-3 gap-3">
            {months.map((item, key) => (
                <a
                    key={key}
                    onClick={() => handleActiveMonth(activeMonth, item.number)}
                    className={`py-2 text-center cursor-pointer ${item.number === activeMonth
                            ? "text-white bg-indigo-700"
                            : "text-indigo-600 hover:text-white hover:bg-indigo-600"
                        } font-semibold border border-zinc-950/20 rounded-lg`}
                >
                    {item.name}
                </a>
            ))}
        </div>
    )
}

export default Months