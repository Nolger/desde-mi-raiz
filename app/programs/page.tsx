export default function ProgramsPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Prográmate</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Proyecto 2024</h2>
            <p className="text-gray-600">Detalles del proyecto actual...</p>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Proyecto 2023</h2>
            <p className="text-gray-600">Resultados del año anterior...</p>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Archivo</h2>
            <p className="text-gray-600">Proyectos históricos...</p>
          </section>
        </div>
      </div>
    </main>
  );
}