import teamData from '@/data/teamMembers.json';
import Image from 'next/image';

export default function Team() {
  return (
    <section className="relative py-12 px-5 bg-[url('/team/bgi-team.jpeg')] bg-cover bg-center">
      <h2 className="text-4xl text-black text-center bg-white w-fit mx-auto my-10 px-4 py-2 rounded-[20px]">
        Nuestro Equipo
      </h2>
      
      <div className="flex flex-wrap justify-center gap-5">
        {teamData.teamMembers.map(member => (
          <div 
            key={member.id} 
            className="bg-white rounded-[100%/50%] shadow-md overflow-hidden w-[300px] text-center pb-8"
          >
            <div className="relative w-full h-[300px]">
              <Image 
                src={member.image} 
                alt={member.name}
                className="rounded-full object-cover"
                fill
                sizes="300px"
                priority
              />
            </div>
            <div className="px-5 py-5">
              <h3 className="text-2xl my-2.5">{member.name}</h3>
              <p className="text-lg text-gray-600 mb-2.5">{member.position}</p>
              <p className="text-base text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}