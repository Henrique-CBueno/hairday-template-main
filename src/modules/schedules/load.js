import { scheduleFetchByDay } from "../../services/schedule-fatch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "./show.js";

const selectDate = document.getElementById("date")

export async function schedulesDay() {
    const date = selectDate.value

    const dailySchedules = await scheduleFetchByDay({ date })

    schedulesShow({ dailySchedules })

    hoursLoad({date, dailySchedules})
}