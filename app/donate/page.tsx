"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Heart, Coffee, BookOpen, Home, Users } from "lucide-react"

export default function DonarPage() {
  return (
    <main className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Tu Apoyo Hace la Diferencia</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Cada donación, por pequeña que sea, contribuye a crear espacios inclusivos donde el arte y la cultura
          transforman vidas.
        </p>
        <div className="relative h-[300px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=300&width=800"
            alt="Niños en un taller cultural"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Impacto de donaciones */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Tu Donación Apoya</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Educación",
              description: "Programas educativos que preservan conocimientos ancestrales",
            },
            {
              icon: Home,
              title: "Infraestructura",
              description: "Espacios seguros para el aprendizaje en comunidades",
            },
            {
              icon: Coffee,
              title: "Materiales",
              description: "Recursos didácticos y herramientas para talleres",
            },
            {
              icon: Users,
              title: "Becas",
              description: "Apoyo directo a jóvenes indígenas talentosos",
            },
          ].map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <item.icon className="w-10 h-10 mx-auto mb-4 text-[#14587f]" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Opciones de donación */}
      <section className="container mx-auto px-4 max-w-4xl mb-16">
        <div className="bg-[#959d98]/10 rounded-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">Haz Tu Donación</h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { amount: "10", description: "Materiales para un estudiante" },
              { amount: "50", description: "Taller para una comunidad" },
              { amount: "100", description: "Beca mensual para un joven" },
            ].map((option, index) => (
              <Card
                key={index}
                className="hover:border-[#14587f] hover:shadow-md cursor-pointer transition-all text-center"
              >
                <CardHeader>
                  <CardTitle className="text-2xl">${option.amount}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#14587f] hover:bg-[#14587f]/90 text-white px-8 py-6 h-auto text-lg"
              onClick={() => window.open("https://www.paypal.com/donate", "_blank")}
            >
              <Heart className="mr-2 h-5 w-5" />
              Donar ahora con PayPal
            </Button>

            <p className="mt-4 text-sm text-muted-foreground">
              También puedes elegir otro monto en la página de PayPal
            </p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="container mx-auto px-4 max-w-4xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">El Impacto de Tu Generosidad</h2>

        <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/placeholder.svg?height=64&width=64" alt="Testimonio" fill className="object-cover" />
            </div>
            <div>
              <p className="italic mb-2">
                &quot;Gracias a las donaciones, pude completar mi formación en artes tradicionales y ahora enseño a los niños
                de mi comunidad, manteniendo vivas nuestras tradiciones.&quot;
              </p>
              <p className="font-semibold">María Hernández</p>
              <p className="text-sm text-muted-foreground">Comunidad Wayuu</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/placeholder.svg?height=64&width=64" alt="Testimonio" fill className="object-cover" />
            </div>
            <div>
              <p className="italic mb-2">
                &quot;El programa de becas cambió mi vida. Ahora puedo estudiar y seguir conectado con mis raíces, llevando
                lo mejor de ambos mundos a mi comunidad.&quot;
              </p>
              <p className="font-semibold">Carlos Tupac</p>
              <p className="text-sm text-muted-foreground">Comunidad Quechua</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 max-w-3xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>

        <div className="space-y-6">
          {[
            {
              question: "¿Cómo se utilizan mis donaciones?",
              answer:
                "El 85% de tu donación va directamente a nuestros programas educativos y culturales. El 15% restante se destina a gastos administrativos y de operación para mantener nuestra fundación funcionando eficientemente.",
            },
            {
              question: "¿Puedo hacer donaciones mensuales?",
              answer:
                "¡Sí! En la página de PayPal puedes configurar donaciones recurrentes mensuales, lo que nos ayuda a planificar nuestros programas a largo plazo.",
            },
            {
              question: "¿Mi donación es deducible de impuestos?",
              answer:
                "Sí, somos una organización sin fines de lucro registrada y emitimos certificados para deducción de impuestos. Contáctanos después de tu donación para recibir tu certificado.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#14587f] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Juntos Podemos Hacer la Diferencia</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tu generosidad hoy construye un futuro donde las tradiciones ancestrales y las oportunidades modernas
            coexisten en armonía.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#14587f] hover:bg-white/90 px-8 py-6 h-auto text-lg"
            onClick={() => window.open("https://www.paypal.com/donate", "_blank")}
          >
            <Heart className="mr-2 h-5 w-5" />
            Donar ahora
          </Button>
        </div>
      </section>
    </main>
  )
}

