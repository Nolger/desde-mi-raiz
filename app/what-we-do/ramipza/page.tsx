import Link from "next/link"
import NewsCard from "@/components/NewsCard"
import { news } from "@/data/news"

export default function RamipzaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-[url('/hero/img4.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">RAMIPZA</h1>
          <p className="text-xl text-white max-w-2xl">
            Construyendo puentes de paz y reconciliación a través del arte y el diálogo intercultural.
          </p>
        </div>
      </section>

      {/* Descripción de la sección */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            RAMIPZA es nuestra iniciativa dedicada a promover la paz y la reconciliación a través del arte y el diálogo intercultural. 
            Nuestros programas buscan crear espacios seguros donde diferentes comunidades puedan compartir sus experiencias, 
            aprender unas de otras y construir juntas un futuro más armonioso.
          </p>
        </div>
      </section>

      {/* Grid de Noticias */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.ramipza.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 bg-[#14587f] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Únete a Nuestra Misión de Paz</h2>
          <p className="mb-6">
            Tu apoyo nos ayuda a crear más espacios de diálogo y reconciliación entre comunidades.
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