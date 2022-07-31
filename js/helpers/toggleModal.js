const modalnewTask = document.querySelector('#btnNuevaTarea')
const btnNewTask = document.querySelector('#btnNuevaTarea')
const btnCancelNewTask = document.querySelector('#btnCancelarTarea')


btnNewTask.addEventListener('click', ()=>{
    modalnewTask.classList.add('active')
})

btnCancelNewTask.addEventListener('click', ()=>{
    modalnewTask.classList.remove('active');
})