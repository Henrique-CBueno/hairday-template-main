import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";
import dayjs from "dayjs";

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }){
    hours.innerHTML = ""

    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))

    const opening = openingHours.map((hour) => {
        const [scheduleHour, _] = hour.split(":")

        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const available = !unavailableHours.includes(hour) && !isHourPast
        return({
            hour,
            //available: !isHourPast,
            available,
        })
    })

    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour
        if(hour === "9:00"){
            hourHeaderAdd("Manhã")

        } else if(hour === "13:00"){

            hourHeaderAdd("Tarde")
        } else if(hour === "18:00"){

            hourHeaderAdd("Noite")

        }
               
        
        
        hours.appendChild(li)
    })

    hoursClick()

}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")

    header.textContent = title
    hours.appendChild(header)

}