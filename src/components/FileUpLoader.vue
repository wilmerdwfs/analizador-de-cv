<template>
  <div class="bg-white rounded-xl shadow-md p-8 mb-8">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Analiza tus PDFs con IA</h2>
    <p class="text-gray-600 mb-8">
      Sube tus documentos PDF y obtén análisis inteligentes en segundos.
    </p>
    
    <div 
      class="border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer"
      :class="file ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-indigo-400'"
    >
      <div class="mx-auto max-w-md">
        <div v-if="!file">
          <!-- Estado inicial (sin archivo) -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
          </svg>
          <h3 class="mt-4 text-lg font-medium text-gray-900">Selecciona archivos con el boton de abajo</h3>
        </div>

        <div v-else>
          <!-- Estado con archivo subido -->
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <h3 class="mt-4 text-lg font-medium text-gray-900">Archivo listo para analizar</h3>
            <div class="mt-3 bg-white p-3 rounded-md border border-gray-200 w-full">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                <span class="ml-2 text-sm font-medium text-gray-700 truncate max-w-xs">{{ file.name }}</span>
                <span class="ml-auto text-xs text-gray-500">{{ (file.size / 1024 / 1024).toFixed(2) }} MB</span>
              </div>
            </div>
            <p class="mt-3 text-sm text-gray-500">¿Cambiar archivo?</p>
          </div>
        </div>

        <!-- Input de archivo (siempre presente) -->
        <label for="pdf" class="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
          {{ file ? 'Seleccionar otro archivo' : 'Seleccionar archivos' }}
          <input id="pdf" type="file" @change="handleChange" accept="application/pdf" class="hidden" />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['pdf-loaded']);
const file = ref(null);

const handleChange = (e) => {
  const selectedFile = e.target.files[0];
  if (selectedFile) {
    file.value = selectedFile;
    emit('pdf-loaded', selectedFile);
  }
};
</script>