export default function AboutPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Desde mi raíz</h1>
        
        {/* Sección Misión y Visión */}
        <section id="mission" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Misión y Visión</h2>
          <p className="text-lg text-gray-600">
            Contenido de la misión y visión...
          </p>
        </section>

        {/* Sección Valores */}
        <section id="values" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Valores</h2>
          <p className="text-lg text-gray-600">
            Contenido de los valores...
          </p>
        </section>

        {/* Sección Fundador */}
        <section id="founder" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Fundador</h2>
          <p className="text-lg text-gray-600">
            Información sobre el fundador...
          </p>
        </section>
      </div>
    </main>
  );
}