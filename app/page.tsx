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
      {/* Hero Section - Misión y Visión */}
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

      {/* Mission & Vision Cards */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-gray-50 p-8 rounded-lg relative overflow-hidden shadow-sm border border-gray-100">
            <div className="absolute left-0 top-0 h-full w-1 bg-green-600"></div>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Transformamos comunidades indígenas a través de programas educativos que preservan el conocimiento ancestral, fortalecen la identidad cultural y empoderan a los jóvenes mediante el arte, la cultura y el diálogo intercultural.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gray-50 p-8 rounded-lg relative overflow-hidden shadow-sm border border-gray-100">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
            <h3 className="text-xl font-medium mb-4 text-gray-800">Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser el puente que conecta la sabiduría ancestral con las oportunidades del mundo contemporáneo, creando espacios donde las comunidades indígenas florecen con dignidad y sus raíces se honran y celebran.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Valores */}
      <section className="py-20 bg-[#959d98]/10" id="values">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Nuestros Valores</h2>
          <p className="max-w-6xl mx-auto text-center my-12">
              El amor, al igual que un árbol, no surge de la nada; Necesita una base sólida para crecer, florecer y res.
              La compasión no es solo un sentimiento humano; la naturaleza la expresa de manera poderosa. los árboles se 
              comunican a través de sus raíces sosteniendo a quienes lo necesitan . En el bosque, los árboles no compiten
              por imponerse unos sobre otros; en cambio, crecen respetando los límites de sus vecinos. Sus ramas no se 
              entrelazan de manera agresiva, sino que dejan espacio para que cada uno reciba su propia luz. De la misma 
              manera, el respeto en nuestras vidas implica dar espacio al otro sin invadir, reconocer sin imponer y 
              convivir sin opacar . Cada árbol majestuoso comienza siendo solo una semilla enterrada en la oscuridad de 
              la tierra. Sin embargo, dentro de ella yace la promesa de la vida, esperando el momento adecuado para 
              brotar. Así es la esperanza: invisible en los momentos difíciles, pero siempre presente, lista para florecer 
              cuando se le da el cuidado necesario .
            </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <valor.icon className="w-12 h-12 mx-auto mb-4 text-[#14587f]" />
                <h3 className="text-xl font-semibold mb-2">{valor.title}</h3>
                <p className="text-muted-foreground">{valor.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section className="py-20" id="founder">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[600px] w-full md:w-[400px] rounded-lg overflow-hidden mx-auto">
              <Image 
                src="/fundadora.png" 
                alt="Fundador" 
                fill 
                className="object-cover object-top" 
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nuestra Fundadora</h2>
              <p className="text-xl text-muted-foreground">Diana Martínez</p>
              <p className="text-muted-foreground">
                Con más de 20 años de experiencia trabajando con comunidades indígenas, Carlos fundó Desde Mi Raíz con
                la visión de crear un puente entre la sabiduría ancestral y las oportunidades del mundo moderno.
              </p>
              <p className="text-muted-foreground">
                Su trabajo ha impactado positivamente a más de 50 comunidades en toda Latinoamérica, estableciendo
                programas educativos que respetan y preservan las tradiciones locales.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/about/founder">
                  Conoce más sobre su historia
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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