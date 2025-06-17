import axios from 'axios';

export const analizarCVConIA = async (textoCV) => {
  try {
    const prompt = `
    Analiza el siguiente CV y devuelve un JSON estructurado con:
    - email: Extrae todos los posibles correos electrónicos encontrados (el más probable primero)
    - nivel: Clasifica como "Junior" (0-3 años), "Semi-Senior" (3-5 años) o "Senior" (5+ años)
    - añosExperiencia: Total de años de experiencia relevante
    - habilidadesClave: Lista de 5 habilidades técnicas principales
    - recomendaciones: Breve análisis de fortalezas y áreas a mejorar

    Reglas:
    - Considerar solo experiencia relacionada con el puesto
    - Usar español para las recomendaciones

    CV:
    ${textoCV.slice(0, 3500)}
    `;

    const res = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'gpt-4o-mini', // puedes cambiar a gpt-3.5-turbo si prefieres
        response_format: { type: "json_object" },
        messages: [

          { role: 'system', content: 'Eres un especialista en RRHH. Extrae datos estructurados de CVs en formato JSON.' },
          { role: 'user', content: prompt }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
        },
        timeout: 10000
      }
    );

    return JSON.parse(res.data.choices[0].message.content);
  //  return res.data.choices[0].message.content
    
  } catch (err) {
    console.error('Error en analizarCVConIA:', err.response?.data || err.message);
    throw new Error('Error al analizar el CV');
  }
};