export type DayType = {
    day: number
}
export type MonthType = {
    month: number
}
export type YearType = {
    year: number
}
export type RowAndColumnType = {
    row: number
    column: number
}
export type LimitType = 1 | 2 | 3 | 4 | 5 | 6;
export type LocaleType = Intl.LocalesArgument
export type MonthTextFormatOptions = "short" | "numeric" | "2-digit" | "long" | "narrow" | undefined
export type WeekDayTextFormatOptions = "short" | "long" | "narrow" | undefined
export type MonthAndYearType = YearType & MonthType
export type DirectionType = "left" | "right"
export type DateType = DayType & MonthAndYearType
export type SelectedDayType = DayType & MonthType & YearType & RowAndColumnType