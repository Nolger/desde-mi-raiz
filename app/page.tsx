import Hero from "@/app/home/Hero";
import News from "@/app/home/News";
import Team from "@/app/home/Team";
import Alliances from "@/app/home/Alliances";
import Cta from "@/app/home/Cta";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <News />
      <Team />
      <Alliances />
      <Cta />
    </main>
  );
}
