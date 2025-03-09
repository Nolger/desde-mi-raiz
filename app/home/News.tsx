import noticiasData from '@/data/noticias.json';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  return (
    <section className="mx-auto px-5 py-10 max-w-[1200px]">
      <h2 className="text-3xl font-bold text-center text-black mb-8">
        Noticias Recientes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {noticiasData.noticias.map((noticia) => (
          <article 
            key={noticia.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Link 
              href={noticia.url} 
              className="block text-inherit no-underline"
            >
              <div className="relative w-full h-48">
                <Image 
                  src={noticia.imagen} 
                  alt={noticia.titulo}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1024px) 50vw,
                         25vw"
                  priority
                />
              </div>
              <div className="p-4">
                <time className="text-sm text-gray-600 mb-2 block">
                  {noticia.fecha}
                </time>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {noticia.titulo}
                </h3>
                <p className="text-sm text-gray-600">
                  {noticia.descripcion}
                </p>
              </div>
            </Link>
          </article>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Link 
          href="/noticias"
          className="inline-block bg-[var(--accent-color)] text-white px-8 py-2 rounded-lg hover:bg-[var(--accent-color-2)] transition-colors duration-300"
        >
          <Button className='cursor-pointer' variant="link">VER MÁS</Button>
        </Link>
      </div>
    </section>
  );
}