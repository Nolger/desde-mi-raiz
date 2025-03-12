import Image from "next/image"

export default function FounderPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full">
        <Image
          src="/founder/hero-founder.jpg"
          alt="Diana Yaneth Zuluaga Mejía"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-3xl">
              Diana Yaneth Zuluaga Mejía
            </h1>
            <div className="h-1 w-32 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Early Years */}
          <section className="py-24 space-y-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 leading-relaxed">
                Desde una edad temprana, Diana Yaneth Zuluaga Mejía siente un profundo deseo de ayudar a los demás. En su infancia, destacó por su espíritu solidario y su capacidad de liderazgo, participando activamente en grupos infantiles como la primer Banda Marcial de Paz de la Policía Cívica Juvenil del municipio de Manizales Caldas de donde es oriunda y donde cultivó valores de cooperación, empatía y compromiso social.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#14587f]/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-0"></div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/founder/founder-adol.jpg"
                    alt="Diana en su juventud"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Al llegar a la adolescencia, su pasión por el servicio se fortaleció, consolidando su rol como una joven líder dedicada a crear espacios de inclusión y apoyo comunitario.
                </p>
              </div>
            </div>
          </section>

          {/* Transformative Experience */}
          <section className="py-24 border-t border-gray-100">
            <div className="space-y-8">
              <div>
                <h4 className="text-[#14587f] font-medium mb-2">La Historia</h4>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Un Punto de Inflexión</h2>
                <div className="h-1 w-20 bg-[#14587f]/20 rounded-full"></div>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Una experiencia transformadora marcó un punto de inflexión en su vida. Tras enfrentar una enfermedad que la llevó al borde de la muerte, emergió en ella un anhelo profundo: dejar una huella significativa en el mundo. Este deseo, arraigado en lo más profundo de su ser, la inspiró a fundar &quot;Desde mi Raíz&quot;, una organización que refleja su visión de un mundo más justo y compasivo.
              </p>
            </div>
          </section>

          {/* Foundation */}
          <section className="py-24 border-t border-gray-100">
            <div className="space-y-8 mb-12">
              <div>
                <h4 className="text-[#14587f] font-medium mb-2">El Comienzo</h4>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">El Nacimiento de Desde mi Raíz</h2>
                <div className="h-1 w-20 bg-[#14587f]/20 rounded-full"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  La Fundación Desde mi Raíz nace con la misión de promover el amor propio, el conocimiento interior y la cooperación entre culturas y sociedades. A través del arte, la música y la expresión cultural, la fundación busca derribar las barreras que la discriminación, la competencia desmedida y la ambición, han impuesto en nuestras comunidades.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-[#14587f]/10 rounded-2xl transform -rotate-3 transition-transform group-hover:rotate-0"></div>
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/founder/foundation-work.jpg"
                    alt="Trabajo de la fundación"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Current Work */}
          <section className="py-24 border-t border-gray-100">
            <div className="space-y-8">
              <div>
                <h4 className="text-[#14587f] font-medium mb-2">Actualidad</h4>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">El Camino Recorrido</h2>
                <div className="h-1 w-20 bg-[#14587f]/20 rounded-full"></div>
              </div>
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Como una semilla que brota y se fortalece con el tiempo, Diana Zuluaga ha logrado profesionalizarse, consolidando sus conocimientos y habilidades para expandir el impacto de la organización. Enfocada en el desarrollo y crecimiento de la fundación, trabaja incansablemente para conseguir recursos que permitan apoyar a las personas más vulnerables.
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  El trabajo que se refleja en la página de la fundación a 2025 es resultado de un esfuerzo hecho &quot;con las uñas&quot;. Sin contar con grandes presupuestos ni el respaldo de instituciones millonarias, hasta el año 2025 la organización ha operado con recursos limitados, pero con una pasión desbordante y una convicción firme de que cada acción, por pequeña que parezca, puede generar un cambio profundo.
                </p>
              </div>
            </div>
          </section>

          {/* Closing Quote */}
          <section className="py-24 border-t border-gray-100">
            <div className="relative">
              <div className="absolute -top-6 left-0 text-8xl text-[#14587f]/10">&quot;</div>
              <blockquote className="relative z-10 text-2xl text-gray-600 italic text-center max-w-3xl mx-auto leading-relaxed">
                Ella sigue sembrando esperanza y construyendo puentes, convencida de que el verdadero legado no se mide en cifras, sino en las vidas que se transforman y en los corazones que encuentran en el arte y la cultura un espacio de libertad y reconocimiento mutuo.
              </blockquote>
              <div className="absolute -bottom-8 right-0 text-8xl text-[#14587f]/10">&quot;</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}