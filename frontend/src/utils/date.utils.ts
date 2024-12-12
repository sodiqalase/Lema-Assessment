import dayjs from "dayjs";

export const formatDate = (date: string) => {
    return dayjs(date).format("DD MMM YYYY hh:mm A");
};
export const convertDateToString = (date: Date) =>
    dayjs(date).format("YYYY-MM-DD");


export const convertStringToDateObject = (date: string) => dayjs(date).toDate();

export const calculateTokenExpiration = (seconds: number) => {
    const secondsToMilliseconds = seconds * 1000;
    const computedMilliseconds = new Date().getTime() + secondsToMilliseconds;
    return {
        dateToExpire: new Date(computedMilliseconds),
        millisecondsToExpire: computedMilliseconds,
    };
};

export const getDateRange = (range: DatePeriodInterface) => {
    let start_date, end_date;

    switch (range) {
        case "CURRENT WEEK":
            start_date = dayjs().startOf("week").format("YYYY-MM-DD");
            end_date = dayjs().endOf("week").format("YYYY-MM-DD");
            break;
        case "LAST WEEK":
            start_date = dayjs()
                .subtract(1, "week")
                .startOf("week")
                .format("YYYY-MM-DD");
            end_date = dayjs()
                .subtract(1, "week")
                .endOf("week")
                .format("YYYY-MM-DD");
            break;
        case "CURRENT MONTH":
            start_date = dayjs().startOf("month").format("YYYY-MM-DD");
            end_date = dayjs().endOf("month").format("YYYY-MM-DD");
            break;
        case "LAST MONTH":
            start_date = dayjs()
                .subtract(1, "month")
                .startOf("month")
                .format("YYYY-MM-DD");
            end_date = dayjs()
                .subtract(1, "month")
                .endOf("month")
                .format("YYYY-MM-DD");
            break;
        case "CURRENT YEAR":
            start_date = dayjs().startOf("year").format("YYYY-MM-DD");
            end_date = dayjs().endOf("year").format("YYYY-MM-DD");
            break;
        case "LAST YEAR":
            start_date = dayjs()
                .subtract(1, "year")
                .startOf("year")
                .format("YYYY-MM-DD");
            end_date = dayjs()
                .subtract(1, "year")
                .endOf("year")
                .format("YYYY-MM-DD");
            break;
        default:
            start_date = dayjs().startOf("week").format("YYYY-MM-DD");
            end_date = dayjs().endOf("week").format("YYYY-MM-DD");
    }

    return { start_date, end_date };
};

export enum DatePeriodEnum {
    "CURRENT WEEK" = "Current Week",
    "LAST WEEK" = "Last Week",
    "CURRENT MONTH" = "Current Month",
    "LAST MONTH" = "Last Month",
    "CURRENT YEAR" = "Current Year",
    "LAST YEAR" = "Last Year",
}

export type DatePeriodInterface = keyof typeof DatePeriodEnum | "CUSTOM PERIOD";


export const appendTimeZone = (dateString?: string) => {
    if (!dateString) {
        return "";
    }
    return `${dateString}Z`;
};