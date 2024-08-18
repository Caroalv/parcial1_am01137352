/*composition*/

const { createApp, ref, watchEffect } = Vue;

createApp({
  setup() {
    // Crear una referencia reactiva para almacenar el estado del tema
    const TemaOscuro = ref(false);

    // Función para alternar entre temas
    const cambiarTema = () => {
      TemaOscuro.value = !TemaOscuro.value;
    };

   
    watchEffect(() => {
      document.body.className = TemaOscuro.value ? 'dark-theme' : 'light-theme';
    });

    // Retornar las propiedades y funciones para su uso en el template
    return { TemaOscuro, cambiarTema };
  },
  template: `
    <div>
      <h2>{{ TemaOscuro ? 'Tema Oscuro' : 'Tema Claro' }}</h2>
      <button @click="cambiarTema">
        Cambiar a Tema {{ TemaOscuro ? 'Claro' : 'Oscuro' }} 
      </button>
    </div>
  `
}).mount('#app');