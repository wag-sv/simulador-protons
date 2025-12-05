import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { PiSolarPanel } from "react-icons/pi";

export default function HeroSectionChristmas() {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Background laranja metade direita */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-12 w-1/2 bg-[#CF7D00] z-0" />
      
      {/* Curva de transição branco/laranja */}
      <div className="hidden lg:block absolute -left-[7%] -top-10 md:-top-30 lg:-top-40 w-[70vw] h-[70vw] bg-white rounded-full z-[1]" />
      
      {/* Grid principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 mt-16 lg:gap-12">

        {/* Coluna Esquerda: logo, textos e Botão */}
        <div className="w-full lg:flex-1 lg:max-w-sm flex flex-col items-center lg:items-start justify-center mb-8 md:mb-0">
          {/* Logo */}
          <div className="w-full flex justify-center lg:justify-start pb-8">
            <Image src="/logo.png" alt="Logo Protons" width={300} height={75} className="w-auto h-auto" />
          </div>
          <h1 className="text-3xl md:text-4xl text-[#45598F] mb-4 leading-tight text-center lg:text-left">
            O <span className="text-[#CF7D00] font-bold">Natal da economia</span> chegou!
          </h1>
          <p className="mb-6 text-base text-[#45598F] text-center lg:text-left">
            Transforme <span className="font-bold">seu 13º em economia</span> de luz por muitos anos, o <span className="font-bold">melhor presente de Natal para sua casa, comércio ou área rural.</span>
          </p>
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

        {/* Coluna Direita: Imagem */}
        <div className="flex items-end justify-center relative mt-8 md:mt-20 w-full lg:flex-1 px-4 lg:px-0">
          <Image 
            src="/natal.png" 
            alt="Homem com painéis solares" 
            width={800} 
            height={800} 
            className="w-full h-auto max-w-none md:max-w-[800px] object-contain"
          />
        </div>
        
      </div>
      {/* Barra Azul Inferior */}
      <div className="relative z-20 w-full bg-[#45598F] h-12 flex items-center justify-start overflow-hidden">
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