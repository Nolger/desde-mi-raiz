import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, Target, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import Cta from "@/app/home/Cta"
import Hero from "@/app/home/Hero"

export default function DesdeMiRaiz() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* Hero Section - Misión */}
      <section className="py-16">
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
            <p className="text-lg text-gray-600 leading-relaxed">
              El amor, al igual que un árbol, no surge de la nada; necesita una base sólida para crecer y florecer. 
              La compasión no es solo un sentimiento humano; la naturaleza la expresa de manera poderosa. Los árboles se 
              comunican a través de sus raíces, sosteniendo a quienes lo necesitan.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              En el bosque, los árboles no compiten por imponerse unos sobre otros; en cambio, crecen respetando los límites 
              de sus vecinos. Sus ramas no se entrelazan de manera agresiva, sino que dejan espacio para que cada uno reciba su propia luz.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              De la misma manera, el respeto en nuestras vidas implica dar espacio al otro sin invadir, reconocer sin imponer y 
              convivir sin opacar. Cada árbol majestuoso comienza siendo solo una semilla enterrada en la oscuridad de 
              la tierra. Sin embargo, dentro de ella yace la promesa de la vida, esperando el momento adecuado para 
              brotar. Así es la esperanza: invisible en los momentos difíciles, pero siempre presente, lista para florecer 
              cuando se le da el cuidado necesario.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Respeto",
                description: "Honramos las tradiciones y el conocimiento ancestral de cada comunidad.",
              },
              {
                icon: Users,
                title: "Comunidad",
                description: "Trabajamos juntos para fortalecer los lazos comunitarios y culturales.",
              },
              {
                icon: Target,
                title: "Innovación",
                description: "Buscamos soluciones creativas que combinen lo tradicional con lo moderno.",
              },
              {
                icon: Globe,
                title: "Sostenibilidad",
                description: "Promovemos prácticas que beneficien tanto a las comunidades como al medio ambiente.",
              },
            ].map((valor, index) => (
              <Card key={index} className="group p-8 text-center hover:shadow-xl transition-all duration-300 border-none bg-white/80 backdrop-blur-sm">
                <div className="relative w-16 h-16 mx-auto mb-6">
                  <div className="absolute inset-0 bg-[#14587f]/10 rounded-xl transform -rotate-6 transition-transform group-hover:rotate-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <valor.icon className="w-8 h-8 text-[#14587f] transform transition-transform group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{valor.title}</h3>
                <p className="text-gray-600 leading-relaxed">{valor.description}</p>
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
      <section className="py-20 bg-[#959d98]/10">
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