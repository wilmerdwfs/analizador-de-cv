import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './assets/tailwind.css'; // Asegúrate de que esta ruta sea correcta

createApp(App).use(router).mount('#app')