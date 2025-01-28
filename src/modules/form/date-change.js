import { schedulesDay } from "../schedules/load"

const selectedDate = document.getElementById("date")

selectedDate.onchange = () => {

    schedulesDay()

}
