"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Coffee, BookOpen, Home, Users } from "lucide-react"

export default function DonarPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Simplificada */}
      <section className="w-full bg-[url('/donate/taller-cultural.jpg')] bg-cover bg-center relative py-24">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Tu Apoyo Hace la Diferencia</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Cada donación, por pequeña que sea, contribuye a crear espacios inclusivos donde el arte y la cultura
            transforman vidas.
          </p>
        </div>
      </section>

      {/* Impacto de donaciones - Estilo más limpio */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 border-b pb-2">Tu Donación Apoya</h2>
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
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-[#14587f]" />
                </div>
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opciones de donación - Estilo más minimalista */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 border-b pb-2">Haz Tu Donación</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { amount: "10", description: "Materiales para un estudiante" },
              { amount: "50", description: "Taller para una comunidad" },
              { amount: "100", description: "Beca mensual para un joven" },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#14587f] hover:shadow-md transition-all text-center cursor-pointer"
              >
                <p className="text-3xl font-bold text-[#14587f] mb-2">${option.amount}</p>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#14587f] hover:bg-[#14587f]/90 text-white px-8 py-2 h-auto"
              onClick={() => window.open("https://www.paypal.com/donate", "_blank")}
            >
              <Heart className="mr-2 h-5 w-5" />
              Donar ahora con PayPal
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonios - Estilo más limpio */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 border-b pb-2">El Impacto de Tu Generosidad</h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                <Image src="/donate/testimonio1.jpg" alt="Testimonio" width={80} height={80} className="object-cover" />
              </div>
              <div>
                <p className="italic mb-4 text-gray-700 leading-relaxed">
                  &quot;Gracias a las donaciones, pude completar mi formación en artes tradicionales y ahora enseño a los
                  niños de mi comunidad, manteniendo vivas nuestras tradiciones.&quot;
                </p>
                <p className="font-medium">María Hernández</p>
                <p className="text-sm text-gray-500">Comunidad Wayuu</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                <Image src="/donate/testimonio2.jpg" alt="Testimonio" width={80} height={80} className="object-cover" />
              </div>
              <div>
                <p className="italic mb-4 text-gray-700 leading-relaxed">
                  &quot;El programa de becas cambió mi vida. Ahora puedo estudiar y seguir conectado con mis raíces, llevando
                  lo mejor de ambos mundos a mi comunidad.&quot;
                </p>
                <p className="font-medium">Carlos Tupac</p>
                <p className="text-sm text-gray-500">Comunidad Quechua</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Estilo más minimalista */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 border-b pb-2">Preguntas Frecuentes</h2>

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
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100">
                <h3 className="font-medium text-lg mb-3 text-[#14587f]">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Simplificado */}
      <section className="w-full py-12 bg-[#14587f] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Juntos Podemos Hacer la Diferencia</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Tu generosidad hoy construye un futuro donde las tradiciones ancestrales y las oportunidades modernas
            coexisten en armonía.
          </p>
          <Button
            className="bg-white text-[#14587f] hover:bg-white/90"
            onClick={() => window.open("https://www.paypal.com/donate", "_blank")}
          >
            Donar ahora
          </Button>
        </div>
      </section>
    </main>
  )
}

