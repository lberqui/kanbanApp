// Apuntamos al formulario para crear la nueva tarea del HTML
const form = document.getElementById('#formTarea');

form.addEventListener('submit', (ev) => {

  ev.preventDefault();
  const formData = ev.target;
  

  const data = {
    title: formData.titulo.value,
    person: formData.responsable.value,
    details: formData.detalleTarea.value,

    deadline: Number(moment().add(formData.plazoEntrega.value, 'days').format('X')),
    created: Number(moment().format("X")),
    state: 'to-do'
  };

  axios.post(`${API_URL}/tasks`, data)
    .then((res) => {
      createTask(res.data);
        formData.reset();
    })
    .catch((err) => console.error(err));
});
