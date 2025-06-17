import { analizarCVConIA } from '@/services/cvAnalysisService';

export const procesarCVCompleto = async (textoCV) => {
  try {
    const analysis = await analizarCVConIA(textoCV);
    return {
      analysis
    };
  } catch (error) {
    console.error('Error en procesarCVCompleto:', error);
    throw error;
  }
};