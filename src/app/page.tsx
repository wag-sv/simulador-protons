import HeroSection from "@/components/HeroSection";
import QuemSomos from "@/components/QuemSomos";
import CasesSucesso from "@/components/CasesSucesso";
import Garantias from "@/components/Garantias";
import Contato from "@/components/Contato";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <main 
      className="bg-white text-gray-900 relative"
      style={{
        backgroundImage: 'url(/bg.png)',
        backgroundPosition: 'left 20%',
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'auto'
      }}
    >
      <HeroSection />
      <QuemSomos />
      <CasesSucesso />
      <Garantias />
      <Contato />
      <Rodape />
    </main>
  );
}
