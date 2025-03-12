"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Coffee, BookOpen, Home, Users, Check, Calendar, Receipt } from "lucide-react"

export default function DonarPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section - Mejorada */}
      <section className="w-full bg-[url('/donate/taller-cultural.jpg')] bg-cover bg-center relative py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Tu Apoyo Hace la <span className="text-white bg-[#14587f] px-4 py-1 rounded-lg shadow-lg transform -rotate-1 inline-block">DIFERENCIA</span>
            </h1>
            <p className="text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
              Cada donación, por pequeña que sea, contribuye a crear espacios inclusivos donde el arte y la cultura
              transforman vidas.
            </p>
            <div className="mt-8">
              <Button 
                className="bg-white text-[#14587f] hover:bg-gray-100 px-8 py-6 h-auto text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={() => document.getElementById('donacion')?.scrollIntoView({behavior: 'smooth'})}
              >
                Ver cómo ayudar
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Opciones de donación - Estilo mejorado */}
      <section id="donacion" className="w-full py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
              Haz Tu Donación
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#14587f] rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tu generosidad transforma vidas y preserva nuestra cultura ancestral.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 transform hover:scale-[1.01] transition-all duration-300">
            <div className="text-center mb-10">
              <Button
                size="lg"
                className="bg-[#14587f] hover:bg-[#0c3b5a] text-white px-12 py-7 h-auto text-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl"
                onClick={() => window.open("https://www.paypal.com/donate", "_blank")}
              >
                <Heart className="mr-3 h-6 w-6 animate-pulse" />
                Donar ahora con PayPal
              </Button>
            </div>

            <div className="relative py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-6 text-lg font-medium text-gray-500">O elige una cantidad</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { amount: "10" },
                { amount: "50" },
                { amount: "100" },
              ].map((option, index) => (
                <div
                  key={index}
                  className="bg-blue-50 py-8 px-6 rounded-xl border-2 border-transparent hover:border-[#14587f] hover:shadow-lg transition-all duration-300 text-center cursor-pointer flex items-center justify-center group"
                  onClick={() => window.open("https://www.paypal.com/donate", "_blank")}
                >
                  <div>
                    <span className="text-md font-medium text-gray-600 mb-2 block group-hover:text-[#14587f] transition-colors">Donar</span>
                    <p className="text-4xl font-bold text-[#14587f] group-hover:scale-110 transition-transform">${option.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500 mt-6">
            <p>Las donaciones son procesadas de forma segura a través de PayPal. No almacenamos tu información financiera.</p>
          </div>
        </div>
      </section>

      {/* Impacto de donaciones - Estilo mejorado */}
      <section className="w-full py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
              Tu Donación Apoya
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#14587f] rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce el impacto real que generan tus aportes en nuestras comunidades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#14587f]/30 transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-5 mx-auto">
                  <item.icon className="w-8 h-8 text-[#14587f]" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios - Estilo mejorado */}
      <section className="w-full py-24 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
              El Impacto de Tu Generosidad
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#14587f] rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Historias reales de transformación gracias a donantes como tú.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image src="/donate/testimonio1.jpg" alt="Testimonio" width={80} height={80} className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="pt-8">
                <p className="italic mb-6 text-gray-700 leading-relaxed text-center">
                  &quot;Gracias a las donaciones, pude completar mi formación en artes tradicionales y ahora enseño a los
                  niños de mi comunidad, manteniendo vivas nuestras tradiciones.&quot;
                </p>
                <div className="text-center">
                  <p className="font-bold text-lg">María Hernández</p>
                  <p className="text-sm text-[#14587f]">Comunidad Wayuu</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image src="/donate/testimonio2.jpg" alt="Testimonio" width={80} height={80} className="object-cover w-full h-full" />
                </div>
              </div>
              <div className="pt-8">
                <p className="italic mb-6 text-gray-700 leading-relaxed text-center">
                  &quot;El programa de becas cambió mi vida. Ahora puedo estudiar y seguir conectado con mis raíces, llevando
                  lo mejor de ambos mundos a mi comunidad.&quot;
                </p>
                <div className="text-center">
                  <p className="font-bold text-lg">Carlos Tupac</p>
                  <p className="text-sm text-[#14587f]">Comunidad Quechua</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Estilo mejorado */}
      <section className="w-full py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 relative inline-block">
              Preguntas Frecuentes
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#14587f] rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resolvemos tus dudas sobre el proceso de donación.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Check,
                question: "¿Cómo se utilizan mis donaciones?",
                answer:
                  "El 85% de tu donación va directamente a nuestros programas educativos y culturales. El 15% restante se destina a gastos administrativos y de operación para mantener nuestra fundación funcionando eficientemente.",
              },
              {
                icon: Calendar,
                question: "¿Puedo hacer donaciones mensuales?",
                answer:
                  "¡Sí! En la página de PayPal puedes configurar donaciones recurrentes mensuales, lo que nos ayuda a planificar nuestros programas a largo plazo.",
              },
              {
                icon: Receipt,
                question: "¿Mi donación es deducible de impuestos?",
                answer:
                  "Sí, somos una organización sin fines de lucro registrada y emitimos certificados para deducción de impuestos. Contáctanos después de tu donación para recibir tu certificado.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center">
                    <faq.icon className="w-5 h-5 text-[#14587f]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-gray-800">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Simplificado */}
      <section className="w-full py-20 bg-[#14587f] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Juntos Podemos Hacer la Diferencia</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Tu generosidad hoy construye un futuro donde las tradiciones ancestrales y las oportunidades modernas
            coexisten en armonía. Con cada donación, nos acercamos más a nuestro objetivo de preservar y celebrar 
            nuestra rica herencia cultural.
          </p>
        </div>
      </section>
    </main>
  )
}

