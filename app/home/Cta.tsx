import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-20 relative text-white text-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-end-section.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-[90%] max-w-[1200px] mx-auto px-4">
        <h3 className="text-4xl mb-5">
          Tu apoyo hace la diferencia
        </h3>
        <p className="text-xl max-w-[800px] mx-auto mb-8">
          Cada donación, por pequeña que sea, contribuye a crear espacios inclusivos donde el arte y la cultura transforman vidas.
        </p>
        <Link href="/donate" >
          <Button className='cursor-pointer font-bold' size="lg">Dona Ahora</Button>
        </Link>
      </div>
    </section>
  );
}