/*composition*/

const { createApp, ref } = Vue;

const CalculatorComponent = {

  setup() {
    // Estados reactivos para los dos números y el respuestaado
    const numero1 = ref(0);
    const numero2 = ref(0);
    const respuesta = ref(0);

    // Función para sumar
    const sumar = () => {
      respuesta.value = numero1.value + numero2.value;
    };

    // Función para restar
    const restar = () => {
      respuesta.value = numero1.value - numero2.value;
    };

    // Función para multiplicar
    const multiplicar = () => {
      respuesta.value = numero1.value * numero2.value;
    };

    // Función para dividir
    const dividir = () => {
      if (numero2.value !== 0) {
        respuesta.value = numero1.value / numero2.value;
      } else {
        alert("No se puede dividir por cero");
      }
    };

    return {
      numero1,
      numero2,
      respuesta,
      sumar,
      restar,
      multiplicar,
      dividir
    };
  }
};

// Crear y montar la aplicación principal
createApp(CalculatorComponent).mount('#app');
