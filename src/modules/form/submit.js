import dayjs from "dayjs"
import { schedulesDay } from "../schedules/load.js"
import { scheduleNew } from "../../services/schedule-new.js"
const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

const clientName = document.getElementById("client")

let todayDate = dayjs(new Date()).format("YYYY-MM-DD")

selectedDate.value = todayDate

selectedDate.min = todayDate

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    try {
        const name = clientName.value.trim()

        if (!name) {
            return alert("Nome é obrigatorio")
        }

        const hourSeclected = document.querySelector(".hour-selected")

        if (!hourSeclected) {
            return alert("Selecione um horário")
        }

        const hour = parseInt(hourSeclected.innerText.split(":")[0], 10)
        const when = dayjs(selectedDate.value).add(hour, "hour")

        const id = new Date().getTime().toString() // Converte o id para string

        await scheduleNew({
            id,
            name,
            when,
        })

        await schedulesDay()
        clientName.value = ""

    } catch (err) {
        console.log(err)
        alert(err)
    }
})
