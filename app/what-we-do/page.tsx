import Link from "next/link"
import NewsCard from "@/components/NewsCard"
import { news } from "@/data/news"

export default function QueHacemos() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section - Simplificada */}
      <section className="w-full bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Qué Hacemos</h1>
          <p className="text-xl text-white max-w-2xl">
            Programas que preservan la cultura indígena y crean puentes hacia el mundo contemporáneo.
          </p>
        </div>
      </section>

      {/* Intro Section - Más minimalista */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            En Desde Mi Raíz desarrollamos programas que conectan la sabiduría ancestral con las oportunidades del mundo
            moderno. Nuestras iniciativas están diseñadas para preservar la identidad cultural mientras creamos espacios
            de diálogo, aprendizaje y crecimiento.
          </p>
        </div>
      </section>

      {/* RAÍCES QUE CONECTAN */}
      <section className="w-full py-16 bg-gray-50" id="raices">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#14587f] mb-8">RAÍCES QUE CONECTAN</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.raices.slice(-3).map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/what-we-do/raices"
              className="inline-flex items-center gap-2 bg-[#14587f] text-white hover:bg-[#1a6a9d] px-6 py-3 rounded-md transition-colors"
            >
              Ver más noticias
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ARBIDEIA */}
      <section className="w-full py-16 bg-white" id="arbideia">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#14587f] mb-8">ARBIDEIA</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.arbideia.slice(-3).map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/what-we-do/arbideia"
              className="inline-flex items-center gap-2 bg-[#14587f] text-white hover:bg-[#1a6a9d] px-6 py-3 rounded-md transition-colors"
            >
              Ver más noticias
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* RALEGRIA */}
      <section className="w-full py-16 bg-gray-50" id="ralegria">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#14587f] mb-8">RALEGRIA</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.ralegria.slice(-3).map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/what-we-do/ralegria"
              className="inline-flex items-center gap-2 bg-[#14587f] text-white hover:bg-[#1a6a9d] px-6 py-3 rounded-md transition-colors"
            >
              Ver más noticias
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* RAMIPZA */}
      <section className="w-full py-16 bg-white" id="ramipza">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#14587f] mb-8">RAMIPZA</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.ramipza.slice(-3).map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/what-we-do/ramipza"
              className="inline-flex items-center gap-2 bg-[#14587f] text-white hover:bg-[#1a6a9d] px-6 py-3 rounded-md transition-colors"
            >
              Ver más noticias
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action - Simplificado */}
      <section className="w-full py-12 bg-[#14587f] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Apoya Nuestro Trabajo</h2>
          <p className="mb-6">
            Tu apoyo nos permite seguir desarrollando programas que preservan la cultura indígena mientras creamos
            oportunidades para las nuevas generaciones.
          </p>
          <Link
            href="/donate"
            className="inline-block bg-white text-[#14587f] hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition-colors"
          >
            Donar Ahora
          </Link>
        </div>
      </section>
    </main>
  )
}

