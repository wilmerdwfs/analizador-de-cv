<template>
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 my-4 border border-gray-200">
    <!-- Encabezado -->
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">Análisis de Hoja de Vida</h2>
      <p class="text-gray-500 mt-1">Resultados del proceso de evaluación</p>
    </div>

    <!-- Nivel y Experiencia -->
    <div class="flex items-center justify-between mb-6 p-4 rounded-lg bg-gray-50">
      <div>
        <h3 class="text-sm font-medium text-gray-500">Nivel Detectado</h3>
        <span 
          class="mt-1 px-3 py-1 rounded-full text-sm font-medium"
          :class="levelColor"
        >
          {{ analisis.nivel }}
        </span>
      </div>
      <div class="text-right">
        <h3 class="text-sm font-medium text-gray-500">Años de Experiencia</h3>
        <p class="mt-1 text-gray-800 font-medium">
          {{ analisis.añosExperiencia }} {{ analisis.añosExperiencia === 1 ? 'año' : 'años' }}
        </p>
      </div>
    </div>

    <!-- Habilidades -->
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-800 mb-3">Habilidades Clave</h3>
      <div v-if="analisis.habilidadesClave.length > 0" class="flex flex-wrap gap-2">
        <span 
          v-for="(habilidad, index) in analisis.habilidadesClave" 
          :key="index"
          class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
        >
          {{ habilidad }}
        </span>
      </div>
      <p v-else class="text-gray-500 italic">No se detectaron habilidades específicas</p>
    </div>

    <!-- Recomendaciones -->
    <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Estado del Análisis</h3>
      <p class="text-red-600">{{ analisis.recomendaciones }}</p>
    </div>

    <!-- Footer -->
    <div class="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
      <p>Este análisis fue generado automáticamente y puede requerir revisión manual.</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  analisis: {
    type: Object,
    default: () => ({
      nivel: 'Junior',
      añosExperiencia: 0,
      habilidadesClave: [],
      recomendaciones: 'No se pudo analizar el CV'
    })
  }
});

const levelColor = computed(() => {
  switch(props.analisis.nivel) {
    case 'Junior': return 'bg-blue-100 text-blue-800';
    case 'Semi-Senior': return 'bg-purple-100 text-purple-800';
    case 'Senior': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
});
</script>