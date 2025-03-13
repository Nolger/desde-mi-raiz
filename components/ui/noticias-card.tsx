import Image from "next/image"
import Link from "next/link"

interface NoticiaProps {
  fecha: string
  titulo: string
  descripcion: string
  imagen: string
  verMasLink?: string
}

export function NoticiaCard({ fecha, titulo, descripcion, imagen, verMasLink }: NoticiaProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="relative w-full aspect-[4/3] mb-2 overflow-hidden rounded-md">
        <Image
          src={imagen || "/placeholder.svg"}
          alt={titulo}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <p className="text-xs text-gray-500 mb-1">{fecha}</p>
        <h3 className="font-semibold text-base mb-1 leading-tight">{titulo}</h3>
        <p className="text-sm text-gray-700 mb-2 flex-grow">{descripcion}</p>
        {verMasLink && (
          <Link href={verMasLink} className="text-xs uppercase font-medium text-gray-600 hover:text-gray-900 mt-auto">
            Ver más
          </Link>
        )}
      </div>
    </div>
  )
}

