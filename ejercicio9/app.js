const { createApp, ref, computed } = Vue;

const FullNameComponent = {
  template: `
    <div>
      <h1>Nombre Completo</h1>
      <input v-model="firstName" placeholder="Nombre" />
      <input v-model="lastName" placeholder="Apellido" />
      <p>Nombre completo: {{ fullName }}</p>
    </div>
  `,
  setup() {
    // Estado reactivo para el nombre y el apellido
    const firstName = ref('');
    const lastName = ref('');

    // Computed para combinar el nombre y el apellido en un nombre completo
    const fullName = computed(() => {
      return `${firstName.value} ${lastName.value}`;
    });

    return {
      firstName,
      lastName,
      fullName
    };
  }
};

// Crear y montar la aplicación principal
createApp(FullNameComponent).mount('#app');
