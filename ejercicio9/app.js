/*composition*/

const { createApp, ref, computed } = Vue;

const nombrecompletoComponent = {
  template: `
    <div>
      <h1>Nombre Completo</h1>
      <input v-model="nombres" placeholder="Nombre" />
      <input v-model="apellidos" placeholder="Apellido" />
      <p>Nombre completo: {{ nombrecompleto }}</p>
    </div>
  `,
  setup() {
    // Estado reactivo para el nombre y el apellido
    const nombres = ref('');
    const apellidos = ref('');

    // Computed para combinar el nombre y el apellido en un nombre completo
    const nombrecompleto = computed(() => {
      return `${nombres.value} ${apellidos.value}`;
    });

    return {
      nombres,
      apellidos,
      nombrecompleto
    };
  }
};

// Crear y montar la aplicación principal
createApp(nombrecompletoComponent).mount('#app');
