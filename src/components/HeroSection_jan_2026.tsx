import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { PiSolarPanel } from "react-icons/pi";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Grid principal - layout de duas colunas */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between px-6 mt-16 lg:gap-12">
        
        {/* Coluna Esquerda: logo, textos e Botão */}
        <div className="w-full lg:flex-1 lg:max-w-md flex flex-col items-center lg:items-start justify-center mb-8 lg:mb-16">
          {/* Logo */}
          <div className="w-full flex justify-center lg:justify-start pb-8 md:pb-16">
            <Image src="/logo.png" alt="Logo Protons" width={250} height={63} className="w-auto h-auto" />
          </div>
          <h1 className="mb-6 text-[#45598F] text-center lg:text-left leading-tight">
            <span className="text-4xl md:text-6xl font-bold block">Quanto antes você instala,</span>
            <span className="text-2xl md:text-4xl font-normal">mais tempo </span>
            <span className="text-2xl md:text-4xl text-[#CF7D00] font-bold">você economiza </span>
            <span className="text-2xl md:text-4xl font-normal">em 2026!</span>
          </h1>
          <a 
            href="https://protonsenergia.com.br/simulador/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CF7D00] hover:bg-[#b86c00] text-white font-semibold px-8 py-3 rounded-full text-base flex items-center gap-2 shadow-md"
          >
            Simular meu sistema
            <span className="bg-white rounded-full w-7 h-7 flex items-center justify-center ml-2">
              <IoIosArrowForward size={22} color="#222" />
            </span>
          </a>
        </div>

        {/* Coluna Direita: Imagem - alinhada ao final do container */}
        <div className="flex items-end justify-center w-full lg:flex-1 px-4 lg:px-0">
          <Image 
            src="/hero_jan_2026.png" 
            alt="Homem com painéis solares" 
            width={800} 
            height={800} 
            className="w-full h-auto max-w-none md:max-w-[800px] object-contain block"
          />
        </div>
      </div>

      {/* Barra Azul Inferior - z-index para ficar atrás da imagem */}
      <div className="w-full bg-[#45598F] h-12 flex items-center justify-start overflow-hidden">
        <div className="flex items-center whitespace-nowrap animate-scroll">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex items-center text-white font-semibold text-lg tracking-wide">
              <span className="mx-4">ENERGIA SOLAR NÃO É TUDO IGUAL</span>
              <PiSolarPanel size={30} className="mx-4 text-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
