import noticiasData from '@/data/noticias.json';
import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  return (
    <div className="mx-auto px-5 py-10 max-w-7xl">
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        Noticias Recientes
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {noticiasData.noticias.map((noticia) => (
          <div key={noticia.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-lg">
            <Link href={noticia.url} className="block text-inherit no-underline">
              <Image 
                src={noticia.imagen} 
                alt={noticia.titulo}
                className="w-full h-48 object-cover"
                width={300}
                height={200}
                priority
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-2">
                  {noticia.fecha}
                </p>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {noticia.titulo}
                </h2>
                <p className="text-sm text-gray-600">
                  {noticia.descripcion}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link 
          href="/noticias"
          className="inline-block bg-accent-color text-white px-8 py-2 rounded-lg transition-colors duration-300 hover:bg-accent-color-2"
        >
          VER MÁS
        </Link>
      </div>
    </div>
  );
}