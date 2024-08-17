/*composition*/

const { createApp, ref } = Vue

createApp({
  setup() {
      const message = ref('Hola mundo en vue!')
      return {
        message
      }
    }
}).mount('#app')