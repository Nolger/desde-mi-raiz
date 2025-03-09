import Image from "next/image"

export default function FounderPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/founder/hero-founder.jpg"
              alt="Diana Yaneth Zuluaga Mejía"
              fill
              className="object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold text-center">Diana Yaneth Zuluaga Mejía</h1>

          {/* Early Years */}
          <section className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Desde una edad temprana, Diana Yaneth Zuluaga Mejía siente un profundo deseo de ayudar a los demás, en su infancia, destacó por su espíritu solidario y su capacidad de liderazgo, participando activamente en grupos infantiles como la primer Banda Marcial de Paz de la Policía Cívica Juvenil del municipio de Manizales Caldas de donde es oriunda y donde cultivó valores de cooperación, empatía y compromiso social.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-[200px] rounded-lg overflow-hidden my-5">
                <Image
                  src="/founder/founder-adol.jpg"
                  alt="Diana en su juventud"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg text-muted-foreground self-center">
                Al llegar a la adolescencia, su pasión por el servicio se fortaleció, consolidando su rol como una joven líder dedicada a crear espacios de inclusión y apoyo comunitario.
              </p>
            </div>
          </section>

          {/* Transformative Experience */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">Un Punto de Inflexión</h2>
            <p className="text-lg text-muted-foreground">
              Una experiencia transformadora marcó un punto de inflexión en su vida. Tras enfrentar una enfermedad que la llevó al borde de la muerte, emergió en ella un anhelo profundo: dejar una huella significativa en el mundo. Este deseo, arraigado en lo más profundo de su ser, la inspiró a fundar &quot;Desde mi Raíz&quot;, una organización que refleja su visión de un mundo más justo y compasivo.
            </p>
          </section>

          {/* Foundation */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">El Nacimiento de Desde mi Raíz</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <p className="text-lg text-muted-foreground">
                La Fundación Desde mi Raíz nace con la misión de promover el amor propio, el conocimiento interior y la cooperación entre culturas y sociedades. A través del arte, la música y la expresión cultural, la fundación busca derribar las barreras que la discriminación, la competencia desmedida y la ambición, han impuesto en nuestras comunidades.
              </p>
              <div className="relative h-[400px] w-[300px] rounded-lg overflow-hidden">
                <Image
                  src="/founder/foundation-work.jpg"
                  alt="Trabajo de la fundación"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Current Work */}
          <section className="space-y-6">
            <h2 className="text-3xl font-semibold">El Camino Recorrido</h2>
            <p className="text-lg text-muted-foreground">
              Como una semilla que brota y se fortalece con el tiempo, Diana Zuluaga ha logrado profesionalizarse, consolidando sus conocimientos y habilidades para expandir el impacto de la organización. Enfocada en el desarrollo y crecimiento de la fundación, trabaja incansablemente para conseguir recursos que permitan apoyar a las personas más vulnerables.
            </p>
            <p className="text-lg text-muted-foreground">
              El trabajo que se refleja en la página de la fundación a 2025 es resultado de un esfuerzo hecho &quot;con las uñas&quot;. Sin contar con grandes presupuestos ni el respaldo de instituciones millonarias, hasta el año 2025 la organización ha operado con recursos limitados, pero con una pasión desbordante y una convicción firme de que cada acción, por pequeña que parezca, puede generar un cambio profundo.
            </p>
          </section>

          {/* Closing */}
          <section className="space-y-6">
            <p className="text-xl text-muted-foreground italic text-center">
              &quot;Ella sigue sembrando esperanza y construyendo puentes, convencida de que el verdadero legado no se mide en cifras, sino en las vidas que se transforman y en los corazones que encuentran en el arte y la cultura un espacio de libertad y reconocimiento mutuo.&quot;
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}