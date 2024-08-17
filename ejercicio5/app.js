
/*composition*/

const { createApp, ref } = Vue;

const TodoListComponent = {

  setup() {
    // Estado reactivo para la nueva tarea y la lista de tareas
    const nuevaTarea = ref('');
    const tareas = ref([]);

    // Función para agregar una nueva tarea a la lista
    const agregar = () => {
      if (nuevaTarea.value.trim() !== '') {
        tareas.value.push(nuevaTarea.value.trim());
        nuevaTarea.value = ''; // Limpiar el input después de agregar la tarea
      }
    };

    // Función para eliminar una tarea de la lista
    const eliminar = (index) => {
      tareas.value.splice(index, 1);
    };

    return {
      nuevaTarea,
      tareas,
      agregar,
      eliminar
    };
  }
};

// Crear y montar la aplicación principal
createApp(TodoListComponent).mount('#app');
