import * as pdfjsLib from 'pdfjs-dist'
import workerSrc from 'pdfjs-dist/build/pdf.worker.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc

export const usePdfTextExtractor = async (file) => {
  const reader = new FileReader()

  return new Promise((resolve) => {
    reader.onload = async () => {
      const typedarray = new Uint8Array(reader.result)
      const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise
      let fullText = ''

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const content = await page.getTextContent()
        fullText += content.items.map(item => item.str).join(' ') + '\n'
      }

      resolve(fullText)
    }
    reader.readAsArrayBuffer(file)
  })
}