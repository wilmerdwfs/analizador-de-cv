<template>
  <DefaultLayout>
    <div class="space-y-6 max-w-3xl mx-auto p-4">
      <FileUploader v-if="!loading" @pdf-loaded="procesarPDF" />

      <Loader v-if="loading" />

      <Button 
        @click="analizar" 
        :disabled="!pdfText || loading"
        class="w-full sm:w-auto"
      >
        {{ loading ? 'Analizando...' : 'Analizar' }}
      </Button>

      <!-- Mostrar la tarjeta solo cuando haya resultados -->
      <CardHojaVidaAnalizada 
        v-if="analisisResultado"
        :analisis="analisisResultado"
      />

      <!-- Mensaje de error -->
      <div 
        v-if="error"
        class="p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded"
      >
        <p>{{ error }}</p>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref } from 'vue';
import FileUploader from '@/components/FileUpLoader.vue';
import Loader from '@/components/ui/Loader.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Button from '@/components/ui/Button.vue';
import CardHojaVidaAnalizada from '@/components/CardHojaVidaAnalizada.vue';
import { usePdfTextExtractor } from '@/composables/usePdfTextExtractor';
import { procesarCVCompleto } from '@/usecases/cvProcessor';

const pdfText = ref('');
const analisisResultado = ref(null);
const loading = ref(false);
const error = ref('');

const procesarPDF = async (file) => {
  try {
    pdfText.value = await usePdfTextExtractor(file);
    error.value = '';
  } catch (err) {
    error.value = 'Error al leer el archivo PDF';
    console.error(err);
  }
};

const analizar = async () => {
  if (!pdfText.value) return;
  
  loading.value = true;
  error.value = '';
  analisisResultado.value = null;

  try {
    // 1. Obtenemos la respuesta completa
    const resultado = await procesarCVCompleto(pdfText.value);
    
    // 2. Debug: Verificamos la estructura de la respuesta
    console.log('Respuesta completa:', resultado);
    
    // 3. Accedemos correctamente a los datos
    analisisResultado.value = {
      nivel: resultado.analysis?.nivel || 'Junior',
      añosExperiencia: resultado.analysis?.añosExperiencia || 0,
      habilidadesClave: resultado.analysis?.habilidadesClave || [],
      recomendaciones: resultado.analysis?.recomendaciones.fortalezas || 'Análisis completado'
    };
    
  } catch (err) {
    console.error('Error detallado:', {
      message: err.message,
      response: err.response?.data,
      stack: err.stack
    });
    
    error.value = 'Error al analizar el CV: ' + (err.response?.data?.message || err.message);
    
    analisisResultado.value = {
      nivel: 'Junior',
      añosExperiencia: 0,
      habilidadesClave: [],
      recomendaciones: 'No se pudo analizar el CV',
    };
  } finally {
    loading.value = false;
  }
};
</script>
