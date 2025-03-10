import Image from "next/image"
import Link from "next/link"

export default function QueHacemos() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section - Simplificada */}
      <section className="w-full bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Qué Hacemos</h1>
          <p className="text-xl text-white max-w-2xl">
            Programas que preservan la cultura indígena y crean puentes hacia el mundo contemporáneo.
          </p>
        </div>
      </section>

      {/* Intro Section - Más minimalista */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            En Desde Mi Raíz desarrollamos programas que conectan la sabiduría ancestral con las oportunidades del mundo
            moderno. Nuestras iniciativas están diseñadas para preservar la identidad cultural mientras creamos espacios
            de diálogo, aprendizaje y crecimiento.
          </p>
        </div>
      </section>

      {/* RAÍCES QUE CONECTAN - Diseño más limpio */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 border-b pb-2">RAÍCES QUE CONECTAN</h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/3">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Raíces que conectan"
                width={300}
                height={300}
                className="rounded-lg shadow-sm"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Conocer y convivir con culturas diferentes impulsa un crecimiento integral en el ámbito personal, social
                y profesional. En el plano personal, amplía las perspectivas al cuestionar creencias propias, fomenta la
                empatía al comprender realidades distintas y fortalece el autoconocimiento al reflexionar sobre la
                propia identidad.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A nivel social, promueve el diálogo intercultural, facilita la resolución de conflictos desde el respeto
                y enriquece las comunidades al integrar diversas tradiciones y saberes. Profesionalmente, desarrolla
                habilidades interculturales como la comunicación efectiva y la adaptabilidad.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Este intercambio cultural no solo fortalece valores como el respeto y la empatía, sino que también crea
                sociedades más inclusivas, fomenta la creatividad y la colaboración.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARBIDEIA - Diseño más limpio */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 border-b pb-2">ARBIDEIA</h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/3 md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Arbideia - Educación cultural"
                width={300}
                height={300}
                className="rounded-lg shadow-sm"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4 leading-relaxed">
                La educación y la formación con un enfoque cultural no solo se enfocan en la transmisión de
                conocimientos y habilidades, sino que buscan comprender, valorar y promover la diversidad cultural,
                reconociendo que cada individuo pertenece a una o varias comunidades con tradiciones, valores y formas
                de ver el mundo propio.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Este enfoque promueve una educación inclusiva, que respeta y fomenta la identidad cultural de los
                estudiantes, permitiéndoles conectarse con sus raíces mientras desarrolla habilidades que les permiten
                interactuar en un mundo globalizado.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A nivel de contenido, la educación culturalmente sensible incorpora elementos de diferentes culturas en
                los currículos, ofreciendo una perspectiva más amplia y plural que favorece la reflexión crítica sobre
                cómo las culturas interactúan y se influyen mutuamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AMBIOJA - Diseño más limpio */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 border-b pb-2">AMBIOJA</h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/3">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Ambioja - Medio ambiente y cultura"
                width={300}
                height={300}
                className="rounded-lg shadow-sm"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4 leading-relaxed">
                El análisis del medio ambiente desde la cultura y la tradición revela una profunda conexión entre los
                seres humanos y la naturaleza, donde las prácticas culturales y las creencias tradicionales han jugado
                un papel clave en la forma en que las comunidades interactúan con su entorno.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A lo largo de la historia, muchas culturas han desarrollado sistemas de conocimiento y prácticas
                sostenibles basadas en la observación y el respeto por los ciclos naturales, lo que les ha permitido
                vivir en armonía con su entorno. Estas tradiciones no solo buscan la supervivencia, sino también la
                preservación de un equilibrio ecológico.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hoy en día, el diálogo entre la cultura tradicional y los desafíos ambientales contemporáneos cobra cada
                vez más relevancia. Los saberes tradicionales sobre la conservación de los ecosistemas pueden aportar
                soluciones innovadoras para enfrentar problemas ambientales globales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RALEGRIA - Diseño más limpio */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 border-b pb-2">RALEGRIA</h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/3 md:order-last">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Ralegria - Felicidad y bienestar"
                width={300}
                height={300}
                className="rounded-lg shadow-sm"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4 leading-relaxed">
                La felicidad es un concepto complejo que abarca aspectos psicológicos, filosóficos, sociales y
                culturales. Desde la filosofía, se ha definido de diversas maneras, como la búsqueda del bienestar a
                través de la virtud (eudaimonía de Aristóteles) o la maximización del placer (hedonismo de Epicurio).
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                En psicología, la felicidad se asocia con la satisfacción de necesidades básicas como la autonomía, la
                competencia y las relaciones sociales, según la teoría de la autodeterminación, y con el logro de un
                estado óptimo de bienestar, como proponen los elementos de la psicología positiva.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La felicidad no es un estado estático, sino un proceso dinámico que implica adaptación y equilibrio
                entre el disfrute de los momentos presentes y la aceptación de las dificultades. En definitiva, la
                felicidad es el resultado de un constante equilibrio entre factores internos, sociales y personales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAMIPZA - Diseño más limpio */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 border-b pb-2">RAMIPZA</h2>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/3">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Ramipza - Paz y arte"
                width={300}
                height={300}
                className="rounded-lg shadow-sm"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 mb-4 leading-relaxed">
                La paz, desde la perspectiva cultural y artística, se entiende como un proceso de construcción colectiva
                que promueve la armonía y la comprensión a través de la expresión creativa. El arte, en sus diversas
                formas, se convierte en una herramienta poderosa para transmitir mensajes de unidad, tolerancia y
                respeto.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                La música, la danza, la pintura, la literatura y otras disciplinas permiten visibilizar las luchas por
                la justicia y la igualdad, al tiempo que ofrecen un refugio emocional y un medio para procesar el
                sufrimiento humano. La paz cultural no solo se alcanza en la ausencia de conflicto, sino en la
                celebración de la diversidad.
              </p>
              <p className="text-gray-700 leading-relaxed">
                El arte se convierte, así, en un puente entre diferentes mundos, promoviendo la comprensión mutua y la
                reconciliación. En este sentido, la paz no es solo un ideal político o social, sino también un proceso
                creativo que se nutre de la expresión cultural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Simplificado */}
      <section className="w-full py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Apoya Nuestro Trabajo</h2>
          <p className="mb-6">
            Tu apoyo nos permite seguir desarrollando programas que preservan la cultura indígena mientras creamos
            oportunidades para las nuevas generaciones.
          </p>
          <Link
            href="/donar"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-medium py-2 px-6 rounded-md"
          >
            Donar Ahora
          </Link>
        </div>
      </section>
    </main>
  )
}

