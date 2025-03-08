import Image from 'next/image';
import alliancesData from '@/data/alliances.json';

export default function StrategicAlliances() {
  return (
    <section className="py-16 px-8 bg-gray-50 md:py-12 md:px-4 sm:py-12 sm:px-4">
      <h2 className="text-center text-4xl text-gray-800 mb-12 md:text-3xl md:mb-8 sm:text-2xl">
        Alianzas estratégicas:
      </h2>
      
      <div className="flex justify-center flex-wrap gap-8 max-w-[1200px] mx-auto">
        {alliancesData.map(alliance => (
          <div 
            key={alliance.id} 
            className="flex flex-col items-center w-[200px] text-center md:w-[160px] sm:w-[140px]"
          >
            <div className="w-[150px] h-[150px] flex items-center justify-center md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px]">
              <Image 
                src={alliance.icon} 
                alt={alliance.title}
                className="w-[100px] h-[100px] object-contain md:w-[90px] md:h-[90px] sm:w-[80px] sm:h-[80px]"
                width={100}
                height={100}
                priority
              />
            </div>
            <p className="hidden text-base text-gray-900 font-semibold leading-relaxed sm:text-sm">
              {alliance.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
