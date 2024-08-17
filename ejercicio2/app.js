/*composition*/

const { createApp, ref } = Vue

createApp({
  setup() {
    return {
      contador: ref(0)
    }
  }
}).mount('#app')