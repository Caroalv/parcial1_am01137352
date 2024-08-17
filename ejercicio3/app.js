/*composition*/

const { createApp, ref } = Vue;

createApp({
  setup() {
    // Estado del mensaje (visible o no)
    const mensajevisible = ref(false);

    // Función para cambiar el estado del mensaje
    const toggleMessage = () => {
      mensajevisible.value = !mensajevisible.value;
    };

    // Retornamos las variables y funciones que queremos usar en el template
    return {
      mensajevisible,
      toggleMessage
    };
  }
}).mount('#app');
