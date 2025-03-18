import Link from "next/link"
import NewsCard from "@/components/NewsCard"
import { news } from "@/data/news"

export default function RaicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-[url('/hero/img1.jpeg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">RAÍCES QUE CONECTAN</h1>
          <p className="text-xl text-white max-w-2xl">
            Fortaleciendo la identidad cultural y creando puentes entre comunidades indígenas.
          </p>
        </div>
      </section>

      {/* Descripción de la sección */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            RAÍCES QUE CONECTAN es nuestro programa principal dedicado a fortalecer y preservar la identidad cultural 
            de las comunidades indígenas. A través de festivales, intercambios culturales y encuentros de saberes, 
            creamos espacios donde las tradiciones ancestrales florecen y se comparten entre generaciones.
          </p>
        </div>
      </section>

      {/* Grid de Noticias */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.raices.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 bg-[#14587f] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Apoya Nuestra Misión Cultural</h2>
          <p className="mb-6">
            Tu contribución nos ayuda a seguir preservando y compartiendo la riqueza cultural de las comunidades indígenas.
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
