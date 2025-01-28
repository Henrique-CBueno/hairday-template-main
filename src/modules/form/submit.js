import dayjs from "dayjs"
 const form = document.querySelector("form")
 const selectedDate = document.getElementById("date")

 const clientName = document.getElementById("client")

 let todayDate = dayjs(new Date()).format("YYYY-MM-DD")

 selectedDate.value = todayDate
 
 selectedDate.min = todayDate

 form.addEventListener("submit", (event) => {
     event.preventDefault()
    
     try{

        const name = clientName.value.trim()

        if(!name){
            return alert("Nome é obrigatorio")
        }
        
        
        const hourSeclected = document.querySelector(".hour-selected")

        if (!hourSeclected) {
            return alert("Selecione um horário")
        }

        const hour = parseInt(hourSeclected.innerText.split(":")[0], 10)
        const when = dayjs(selectedDate.value).add(hour, "hour")

        const id = new Date().getTime()

        console.log({
            id,
            name, 
            when,
        })

     } catch(err) {
        console.log(err)
        alert(err)
     }
 })
