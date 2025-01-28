import { apiConfig } from "./api-config"
import dayjs from "dayjs"

export async function scheduleFetchByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`)
        const data = await response.json()
        
        const dailySchedules = data.filter((schedule) => 
            dayjs(date).isSame(schedule.when, "day")
        )

        return dailySchedules
    } catch(err) {
        console.log(err)
        alert(err)
    }
}