import HeroSectionChristmas from "@/components/HeroSectionChristmas";
import QuemSomos from "@/components/QuemSomos";
import CasesSucesso from "@/components/CasesSucesso";
import Garantias from "@/components/Garantias";
import Contato from "@/components/Contato";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 relative">
      {/* Background com opacidade */}
      <div 
        className="absolute inset-0 opacity-30 xl:opacity-50 pointer-events-none"
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundPosition: 'left 20%',
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'auto'
        }}
      />
      
      {/* Conteúdo */}
      <div className="relative z-10">
        <HeroSectionChristmas />
        <QuemSomos />
        <CasesSucesso />
        <Garantias />
        <Contato />
        <Rodape />
      </div>
    </main>
  );
}
