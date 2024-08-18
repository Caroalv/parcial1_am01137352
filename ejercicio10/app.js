/*composition*/

const { createApp, ref, watch } = Vue;

createApp({
  setup() {
    
    const variable = ref('');
    const mensaje = ref('');

    // Watcher para detectar cambios en la variable
    watch(variable, (nuevovalor, oldValue) => {
      if (nuevovalor !== oldValue) {
        mensaje.value = `La variable cambio a: ${nuevovalor}`;
      }
    });

    // Retornar las propiedades para su uso en el template
    return { variable, mensaje };
  },
  template: `
    <div>
      <input v-model="variable" placeholder="Escribe algo..." />
      <p v-if="mensaje">{{ mensaje }}</p>
    </div>
  `
}).mount('#app');