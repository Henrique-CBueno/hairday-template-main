import { scheduleCancel } from "../../services/schedule-cancel.js";
import { schedulesDay } from "./load";

const periods = document.querySelectorAll('.period');

periods.forEach((period) => {
    period.addEventListener('click', async (e) => {
        if(e.target.classList.contains('cancel-icon')){
            const item = e.target.closest('li')
            const id = item.dataset.id // Certifique-se de que o id está sendo tratado como string

            if(id) {
                const isConfirmed = confirm('Deseja cancelar o agendamento?')

                if(isConfirmed){
                    console.log(`Cancelling schedule with id: ${id}`); // Verifique o id no console
                    await scheduleCancel({ id })
                    schedulesDay()
                    item.remove()
                }
            }
        }
    });
})