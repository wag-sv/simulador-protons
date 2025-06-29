import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { PiSolarPanel } from "react-icons/pi";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Grid principal */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 mt-16 lg:gap-12">

        {/* Coluna Esquerda: logo, textos e Botão */}
        <div className="w-full lg:flex-1 lg:max-w-md flex flex-col items-center lg:items-start justify-center mb-8 md:mb-0">
          {/* Logo */}
          <div className="w-full flex justify-center lg:justify-start pb-8 md:pb-16">
            <Image src="/logo.png" alt="Logo Protons" width={300} height={75} className="w-auto h-auto" />
          </div>
          <h1 className="text-2xl md:text-3xl text-[#45598F] mb-2 leading-tight font-normal text-center lg:text-left">
            Energia solar não é sobre economia.
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#45598F] font-bold mb-4 leading-tight text-center lg:text-left">
            É sobre escolha
          </h2>
          <p className="mb-6 text-base text-[#45598F] text-center lg:text-left">
            Escolha <span className="font-bold">tecnologia, segurança e um projeto sob medida para seu patrimônio.</span> Simule agora.
          </p>
          <button className="bg-[#CF7D00] hover:bg-[#b86c00] text-white font-semibold px-8 py-3 rounded-full text-base flex items-center gap-2 shadow-md">
            Simular meu sistema
            <span className="bg-white rounded-full w-7 h-7 flex items-center justify-center ml-2">
              <IoIosArrowForward size={22} color="#222" />
            </span>
          </button>
        </div>

        {/* Coluna Direita: Imagem */}
        <div className="flex items-end justify-center relative mt-8 md:mt-20 w-full lg:flex-1 px-4 lg:px-0">
          <Image 
            src="/hero.png" 
            alt="Homem com painéis solares" 
            width={600} 
            height={600} 
            className="w-full h-auto max-w-none md:max-w-[600px] object-contain"
          />
        </div>
        
      </div>
      {/* Barra Azul Inferior */}
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