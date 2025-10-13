'use client'

import Head from 'next/head'

interface Tool {
  name: string
  description: string
  usage: string
  downloadUrl?: string
}

const tools: Tool[] = [
  {
    name: "Eliminador de Fondo por Lotes (.exe)",
    description: "Herramienta gratuita para eliminar el fondo de múltiples imágenes automáticamente.",
    usage: "Descarga el archivo .exe, ejecútalo y selecciona la carpeta con tus imágenes. El programa procesará todas las imágenes y guardará los resultados sin fondo en una carpeta de salida.",
    downloadUrl: "#"
  },
  {
    name: "PDF Compressor Online",
    description: "Reduce el tamaño de tus archivos PDF sin perder calidad.",
    usage: "Sube tu archivo PDF, espera a que se procese y descarga la versión comprimida.",
    downloadUrl: "#"
  },
  {
    name: "Conversor de Imágenes",
    description: "Convierte imágenes entre formatos populares como JPG, PNG y WebP.",
    usage: "Selecciona tus imágenes, elige el formato de salida y descarga los archivos convertidos.",
    downloadUrl: "#"
  }
]

export default function FreeToolsPage() {
  return (
    <>
      <Head>
        <title>Herramientas Gratis - GB Compumax</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Herramientas de Software Gratis</h1>
          <p className="text-gray-300 mb-12 text-center">
            Utiliza y descarga herramientas gratuitas para facilitar tu trabajo diario. Cada herramienta incluye una breve reseña y explicación de uso.
          </p>
          <div className="space-y-8">
            {tools.map((tool, idx) => (
              <div key={tool.name} className="bg-slate-800/70 rounded-xl p-6 border border-slate-700 shadow-lg hover:shadow-purple-500/10 transition">
                <h2 className="text-2xl font-semibold text-purple-300 mb-2">{tool.name}</h2>
                <p className="text-gray-200 mb-2">{tool.description}</p>
                <p className="text-gray-400 text-sm mb-3"><span className="font-semibold text-white">¿Cómo funciona?</span> {tool.usage}</p>
                {tool.downloadUrl && (
                  <a
                    href={tool.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold"
                  >
                    Descargar
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
