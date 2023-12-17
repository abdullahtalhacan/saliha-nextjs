export const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate();
}

export const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(`${year}-${month}-1`).getDay()
}

/**
 * Retrieves the day name for a given date in the specified format and language.
 *
 * @param date - The input date string in a format recognized by the Date constructor ("year-month-day").
 * @param format - The desired format for the day name: "short" (abbreviated), "long" (full), or "narrow" (one-letter).
 * @param lang - The language code in the form of "xx-XX" representing the locale (default is "tr-TR" for Turkish).
 *
 * @returns A string representing the day name for the given date in the specified format and language.
 *
 * @example
 * ```typescript
 *  const dayName = getDayName("2023-12-14", "long", "en-US"); 
 * ```
 * // Outputs: "Wednesday"
 * 
 */
export const getDayName = (date: string, format: "short" | "long" | "narrow" | undefined, lang: string = "tr-TR") => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString(lang, { weekday: format });
};


/**
 * Get the name of a month based on its number.
 * @param {number} monthNumber - The month number (1-12).
 * @param {"short" | "numeric" | "2-digit" | "long" | "narrow" | undefined} format - The format of the month name.
 * @param {string} [lang="tr-TR"] - The language code for localization (default is "tr-TR").
 * @returns {string} The name of the month.
*/
export const getMonthName = (
    monthNumber: number,
    format: "short" | "numeric" | "2-digit" | "long" | "narrow" | undefined,
    lang: string = "tr-TR"
): string => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString(lang, {
        month: format,
    });
};

export const getNextMonth = (monthNumber: number, next?: boolean) => {
    let nextMonth = monthNumber === 12 ? 1 : monthNumber + 1
    return next ? (nextMonth === 12 ? 1 : nextMonth + 1) : nextMonth
}

export const getPrevMonth = (monthNumber: number) => {
    return monthNumber === 1 ? 12 : monthNumber - 1
}

export const getWeekDays = (startingDay: number, lang: string, format: 'long' | 'short' | 'narrow' = 'short') => {
    const baseDate = new Date(Date.UTC(2017, 0, startingDay));
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
        weekDays.push(baseDate.toLocaleDateString(lang, { weekday: format }));
        baseDate.setDate(baseDate.getDate() + 1);
    }
    return weekDays;
};

export const generateMonthArray = (year: number, month: number, lang: string) => {
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

export const generateTimeSlot = (startingTime: number, endingTime: number) => {
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
export const getCurrentTime = (timezone: string, lang: string = 'tr-TR'): string => {
    const options: Intl.DateTimeFormatOptions = { timeZone: timezone, hour: '2-digit', minute: '2-digit', hour12: false };
    const formatter = new Intl.DateTimeFormat(lang, options);
    return formatter.format(new Date());
};

export const generateTimestamp = (year: number, month: number, day: number) => {
    const now = new Date();
    const currentYear = year || now.getFullYear();
    const currentMonth = String((month || now.getMonth()) + 1).padStart(2, '0'); // Months are zero-based
    const currentDay = String(day || now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const timestamp = `${currentYear}-${currentMonth}-${currentDay} ${hours}:${minutes}:${seconds}`;
  
    return timestamp;
  };

export const findIndex = (array: {}[][], targetNumber: number, targetMonth: string) => {
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

/**
 * Checks if all values of the given object match the specified type.
 *
 * @param {Object} objectName - The object to check.
 * @param {string} indexType - The expected type for the values.
 * @returns {boolean} True if all values match the specified type, false otherwise.
 *
 * @example
 * const selectedDay = {
 *   day: undefined,
 *   month: undefined,
 *   year: undefined,
 * };
 * const result = checkMyObject(selectedDay, 'undefined');
 * console.log(result); // Output: true
 */
export const objectIndexValidate = (objectName: { [key: string]: any }, indexType: string): boolean => {
    for (const key in objectName) {
        if (objectName.hasOwnProperty(key) && typeof objectName[key] !== indexType) {
            return false;
        }
    }
    return true;
};

/**
 * Generates a random code in the format "###-###".
 * @returns {string} The randomly generated code.
 */
export const generateRandomCode = () => {
    return `${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}`;
  };