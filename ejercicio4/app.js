/*composition*/

const { createApp, ref } = Vue;

// Definimos un nuevo componente llamado 'InputAlertComponent'
const InputAlertComponent = {

  setup() {
    // Estado reactivo para almacenar el valor del input
    const inputValue = ref('');

    // Función para mostrar el valor del input en una alerta
    const showAlert = () => {
      alert(inputValue.value);
    };

    return {
      inputValue,
      showAlert
    };
  }
};

// Crear y montar la aplicación principal
createApp(InputAlertComponent).mount('#app');
