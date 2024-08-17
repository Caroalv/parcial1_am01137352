const { createApp, ref } = Vue;

createApp({
  setup() {
    
    const condition = ref(true);

    // Alternar la condición al hacer clic en un botón
    const toggleCondition = () => {
      condition.value = !condition.value;
    };

    // Retornar las propiedades
    return { condition, toggleCondition };
  },
  template: `
    <div>
      <h2 v-if="condition">Message when condition is true</h2>
      <h2 v-else>Message when condition is false</h2>
      <button @click="toggleCondition">Toggle Condition</button>
    </div>
  `
}).mount('#app');