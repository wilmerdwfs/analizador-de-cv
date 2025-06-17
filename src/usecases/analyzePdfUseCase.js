import { analizarTextoConIA } from '@/services/openaiService'
import { extractEmail } from '@/utils/emailExtractor'

export const analyzePdfUseCase = async (pdfText) => {
  const analysis = await analizarTextoConIA(pdfText)
  const email = extractEmail(pdfText)
  return { analysis, email }
}