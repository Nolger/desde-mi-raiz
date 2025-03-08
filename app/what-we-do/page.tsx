export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Que hacemos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Raices que conectan</h2>
            <p className="text-gray-600">Descripción del programa...</p>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Casos de Éxito</h2>
            <p className="text-gray-600">Historias de éxito...</p>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Publicaciones</h2>
            <p className="text-gray-600">Nuestras publicaciones...</p>
          </section>
        </div>
      </div>
    </main>
  );
}