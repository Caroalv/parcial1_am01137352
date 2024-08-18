/*composition*/

const { createApp, ref, watch } = Vue;

createApp({
  setup() {
    
    const variable = ref('');
    const message = ref('');

    // Watcher para detectar cambios en la variable
    watch(variable, (newValue, oldValue) => {
      if (newValue !== oldValue) {
        message.value = `The variable has changed to: ${newValue}`;
      }
    });

    // Retornar las propiedades para su uso en el template
    return { variable, message };
  },
  template: `
    <div>
      <input v-model="variable" placeholder="Type something..." />
      <p v-if="message">{{ message }}</p>
    </div>
  `
}).mount('#app');