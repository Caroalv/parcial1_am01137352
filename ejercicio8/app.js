/*composition*/

const { createApp, ref } = Vue;

createApp({
  setup() {
    
    const condition = ref(true);

    // Alternar la condición al hacer clic en un botón
    const Condicion = () => {
      condition.value = !condition.value;
    };

    // Retornar las propiedades
    return { condition, Condicion };
  },
  template: `
    <div>
      <h2 v-if="condition">Mensaje cuando es verdadero</h2>
      <h2 v-else>Mensaje cuando es falso</h2>
      <button @click="Condicion">cambiar</button>
    </div>
  `
}).mount('#app');