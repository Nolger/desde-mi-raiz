import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Sprout, Flower2, ArrowRight } from "lucide-react"
import Link from "next/link"
import Cta from "@/app/home/Cta"
import Hero from "@/app/home/Hero"

export default function DesdeMiRaiz() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* Hero Section - Misión */}
      <section className="py-16" id="mission">
      {/* Main Heading */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-6 text-gray-800">
          Desde Mi Raíz
        </h2>
        <p className="text-center max-w-3xl mx-auto text-base md:text-lg text-gray-700">
          Impulsamos programas educativos que promueven el conocimiento ancestral y el desarrollo profesional de los jóvenes indígenas.
        </p>
      </div>

      {/* Mission Card */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="bg-white p-10 rounded-xl relative overflow-hidden shadow-lg border-none max-w-4xl hover:shadow-xl transition-shadow duration-300">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-semibold text-gray-800">Misión</h3>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Tenemos como propósito liderar una transformación social significativa al unir a las comunidades a través del poder del arte, la cultura y la música. 
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Fomentamos la participación y la cooperación entre todos los sectores de la sociedad, con un enfoque especial en aquellas personas que enfrentan barreras económicas, sociales, culturales, físicas o emocionales. 
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Promovemos el desarrollo humano, creando espacios inclusivos donde las personas en situación de vulnerabilidad puedan descubrir su potencial, compartir sus talentos y contribuir al desarrollo colectivo a través de programas que promueven la creatividad, el esfuerzo conjunto y el empoderamiento, trabajamos para construir una sociedad más empática, solidaria y resiliente, capaz de enfrentar cualquier desafío con unidad y esperanza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Valores */}
      <section className="py-24 bg-gradient-to-b from-white to-[#959d98]/10" id="values">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestros Valores</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Amor",
                description: "El amor, al igual que un árbol, no surge de la nada; necesita una base sólida para crecer, florecer y resistir. En Desde mi Raíz, creemos que el amor verdadero se refleja en un compromiso constante que va más allá de las acciones temporales. Por eso, acompañamos a las comunidades de manera cercana y sostenida, fortaleciendo su autonomía y reconociendo su identidad. Cada proyecto educativo o artístico es una semilla de confianza y esperanza que, con el tiempo, se transforma en nuevas oportunidades de crecimiento",
              },
              {
                icon: Sprout,
                title: "Compasión",
                description: "La compasión no es solo un sentimiento humano; la naturaleza la expresa de manera poderosa. Los árboles se comunican a través de sus raíces, sosteniendo a quienes lo necesitan. Así entendemos la compasión en Desde mi Raíz como un compromiso vivo que nos une y nos fortalece, porque no solo acompañamos procesos, también sembramos esperanza y construimos redes de apoyo que crecen con cada proyecto. Porque cuando practicamos una compasión auténtica, no dejamos a nadie atrás; Extendemos nuestras raíces para sostenernos mutuamente y hacer que el cambio perdure.",
              },
              {
                icon: Flower2,
                title: "Respeto",
                description: "En el bosque, los árboles no compiten por imponerse unos sobre otros; en cambio, crecen respetando los límites de sus vecinos. Sus ramas no se entrelazan de manera agresiva, sino que dejan espacio para que cada uno reciba su propia luz. De la misma manera, el respeto en nuestras vidas implica dar espacio al otro sin invadir, reconocer sin imponer y convivir sin opacar. En Desde mi Raíz, creemos que este El respeto es la semilla que fortalece las comunidades y permite que todos crezcan con dignidad.",
              },
              {
                icon: Sprout,
                title: "Esperanza",
                description: "Cada árbol majestuoso comienza siendo solo una semilla enterrada en la oscuridad de la tierra. Sin embargo, dentro de ella yace la promesa de la vida, esperando el momento adecuado para brotar. Así es la esperanza: invisible en los momentos difíciles, pero siempre presente, lista para florecer cuando se le da el cuidado necesario. En Desde mi Raíz, creemos que, cuando se cultiva con compromiso y dedicación, la esperanza tiene el poder de transformar vidas por eso aunque nos enfrentamos a desafíos constantes, seguimos adelante con el compromiso de acompañar, crear alianzas y cuidar cada semilla plantada.",
              },
            ].map((valor, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm">
                <div className="relative h-full">
                  {/* Fondo decorativo */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#14587f]/5 rounded-bl-full transform rotate-45"></div>
                  
                  {/* Contenido */}
                  <div className="relative p-6">
                    {/* Icono */}
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#14587f]/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <valor.icon className="w-6 h-6 text-[#14587f]" />
                      </div>
                    </div>
                    
                    {/* Título */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{valor.title}</h3>
                    
                    {/* Descripción con scroll */}
                    <div className="relative">
                      <div className="prose prose-sm max-h-[280px] overflow-y-auto pr-4 text-gray-600 leading-relaxed 
                        [&::-webkit-scrollbar]:w-1.5
                        [&::-webkit-scrollbar-track]:bg-[#959d98]/10 
                        [&::-webkit-scrollbar-track]:rounded-full
                        [&::-webkit-scrollbar-thumb]:bg-[#14587f]/20 
                        [&::-webkit-scrollbar-thumb]:rounded-full
                        [&::-webkit-scrollbar-thumb]:border
                        [&::-webkit-scrollbar-thumb]:border-[#14587f]/10
                        hover:[&::-webkit-scrollbar-thumb]:bg-[#14587f]/30
                        group-hover:[&::-webkit-scrollbar-thumb]:bg-[#14587f]/30
                        transition-colors">
                        <p>{valor.description}</p>
                      </div>
                      {/* Degradado al final del texto */}
                      <div className="absolute bottom-0 left-0 right-4 h-8 bg-gradient-to-t from-white/90 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fundadora */}
      <section className="py-24 bg-gradient-to-b from-[#959d98]/10 to-white" id="founder">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#14587f]/10 rounded-2xl transform rotate-6 transition-transform group-hover:rotate-0"></div>
              <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/fundadora.png" 
                  alt="Diana Martínez - Fundadora de Desde Mi Raíz" 
                  fill 
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                  priority
                />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="text-[#14587f] font-medium mb-2">Nuestra Fundadora</h4>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Diana Martínez</h2>
                <div className="h-1 w-20 bg-[#14587f]/20 rounded-full"></div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Con más de 20 años de experiencia trabajando con comunidades indígenas, Diana fundó Desde Mi Raíz con
                  la visión de crear un puente entre la sabiduría ancestral y las oportunidades del mundo moderno.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Su trabajo ha impactado positivamente a más de 50 comunidades en toda Latinoamérica, estableciendo
                  programas educativos que respetan y preservan las tradiciones locales.
                </p>
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="group relative overflow-hidden bg-transparent border-2 border-[#14587f] text-[#14587f] hover:text-white transition-colors duration-300"
                    asChild
                  >
                    <Link href="/about/founder" className="flex items-center gap-2 py-6 px-8">
                      <span className="relative z-10">Conoce más sobre su historia</span>
                      <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                      <div className="absolute inset-0 bg-[#14587f] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patrocinadores */}
      <section className="py-20 bg-[#959d98]/10" id="sponsors">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Empresas que nos Apoyan</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((sponsor) => (
              <div key={sponsor} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src={`/placeholder.svg?height=80&width=200`}
                  alt={`Sponsor ${sponsor}`}
                  width={200}
                  height={80}
                  className="w-full h-20 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Gracias a nuestros patrocinadores, podemos continuar nuestra misión de preservar y promover el
              conocimiento ancestral mientras facilitamos el acceso a la educación moderna.
            </p>
          </div>
        </div>
      </section>
      {/* CTA */}
      <Cta />
    </main>
  )
}