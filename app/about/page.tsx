import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, Target, Globe, ArrowRight } from "lucide-react"

export default function DesdeMiRaiz() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Misión y Visión */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[#14587f] opacity-90 z-0" />
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Background"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="container mx-auto px-4 z-10 space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Desde Mi Raíz</h1>
            <p className="text-xl md:text-2xl">
              Impulsamos programas educativos que promueven el conocimiento ancestral y el desarrollo profesional de los
              jóvenes indígenas.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4">Misión</h2>
                <p>
                  Preservar y promover el conocimiento ancestral mientras facilitamos el acceso a la educación moderna
                  para las comunidades indígenas.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4">Visión</h2>
                <p>
                  Ser un puente entre la sabiduría ancestral y las oportunidades del mundo moderno, creando líderes que
                  honren sus raíces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-[#959d98]/10" id="values">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Fundador" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Nuestro Fundador</h2>
              <p className="text-xl text-muted-foreground">Diana Martínez</p>
              <p className="text-muted-foreground">
                Con más de 20 años de experiencia trabajando con comunidades indígenas, Carlos fundó Desde Mi Raíz con
                la visión de crear un puente entre la sabiduría ancestral y las oportunidades del mundo moderno.
              </p>
              <p className="text-muted-foreground">
                Su trabajo ha impactado positivamente a más de 50 comunidades en toda Latinoamérica, estableciendo
                programas educativos que respetan y preservan las tradiciones locales.
              </p>
              <Button variant="outline" className="mt-4">
                Conoce más sobre nuestra historia
                <ArrowRight className="ml-2 h-4 w-4" />
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
    </main>
  )
}

