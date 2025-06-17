<template>
  <div class="bg-white rounded-xl shadow-md p-8 mb-8">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Procesando tu documento</h2>
    <p class="text-gray-600 mb-8">
      Estamos analizando tu PDF con IA. Esto puede tomar unos segundos...
    </p>

    <div class="border-2 border-gray-200 rounded-lg p-12 text-center">
      <div class="mx-auto max-w-md">
        <!-- Icono de carga animado -->
        <svg class="h-12 w-12 mx-auto text-indigo-400 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>

        <h3 class="mt-6 text-lg font-medium text-gray-900">{{ fileName }}</h3>
        <p class="mt-2 text-sm text-gray-500">{{ fileSize }} MB</p>

        <!-- Barra de progreso -->
        <div class="mt-8 w-full bg-gray-200 rounded-full h-2.5">
          <div 
            class="bg-indigo-600 h-2.5 rounded-full" 
            :style="{ width: progress + '%' }"
          ></div>
        </div>
        <p class="mt-2 text-sm text-gray-500">{{ progress }}% completado</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  fileName: {
    type: String,
    required: true
  },
  fileSize: {
    type: Number,
    required: true
  }
})

const progress = ref(0)

// Simulación de progreso (remover en implementación real)
onMounted(() => {
  const interval = setInterval(() => {
    if (progress.value < 100) {
      progress.value += Math.floor(Math.random() * 10) + 1
      if (progress.value > 100) progress.value = 100
    } else {
      clearInterval(interval)
    }
  }, 800)
})
</script>