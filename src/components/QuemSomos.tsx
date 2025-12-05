import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { BiLike } from "react-icons/bi";

export default function QuemSomos() {
  return (
    <section className="relative z-30 overflow-hidden w-full py-12 lg:-mt-16">
      {/* Grid principal */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:gap-12">
        {/* Coluna Esquerda: Texto */}
        <div className="w-full lg:flex-1 lg:max-w-md flex flex-col items-center lg:items-start justify-center mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#45598F] mb-6 text-center lg:text-left">Quem Somos</h2>
          <p className="text-[#45598F] text-base leading-relaxed text-center lg:text-left">
            A <span className="font-bold text-[#45598F]">Protons</span> nasceu com um único propósito: mudar a realidade do mercado fotovoltaico, transformando a luz do sol em <span className="font-bold">economia</span> com <span className="font-bold">qualidade, confiabilidade e clareza</span> em todos os nossos processos.
          </p>
        </div>

        {/* Coluna Direita: Imagem */}
        <div className="flex items-center justify-center relative w-full lg:flex-1 px-4 lg:px-0">
          <Image 
            src="/note.png" 
            alt="Laptop com sistema Protons" 
            width={600} 
            height={420} 
            className="w-full h-auto max-w-none lg:max-w-[600px] object-contain"
          />
        </div>
      </div>

      {/* Botão Dropdown */}
      <div className="flex justify-center mt-12 mb-16 px-4">
        <div className="bg-[#CF7D00] hover:bg-[#b86c00] text-white font-semibold px-4 sm:px-8 py-2 rounded-full flex items-center gap-2 sm:gap-8 text-sm sm:text-lg whitespace-nowrap">
          <FaChevronDown size={14} className="sm:size-4" />
          Por que escolher a Protons?
          <FaChevronDown size={14} className="sm:size-4" />
        </div>
      </div>

      {/* Cards de Diferenciais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {/* Card 1 - Clientes */}
        <div className="bg-[#1E1E1E] text-white rounded-xl p-5 flex flex-col items-center text-center max-w-[250px] mx-auto w-full">
          <div className="mb-4">
            <Image src="/clientes.png" alt="Clientes" width={80} height={80} className="w-auto h-20" style={{ height: "auto" }} />
          </div>
          <div className="text-2xl font-bold mb-1">+ de 2000</div>
          <div className="text-sm">clientes</div>
          <div className="text-sm">satisfeitos</div>
        </div>

        {/* Card 2 - Projetos */}
        <div className="bg-[#1E1E1E] text-white rounded-xl p-5 flex flex-col items-center text-center max-w-[250px] mx-auto w-full">
          <div className="mb-4">
            <Image src="/projetos.png" alt="Projetos" width={80} height={80} className="w-auto h-20" style={{ height: "auto" }} />
          </div>
          <div className="text-2xl font-bold text-white mb-1">Projetos em</div>
          <div className="text-2xl font-bold text-white mb-1">2 estados</div>
          <div className="text-sm">MS e MT</div>
        </div>

        {/* Card 3 - Equipe */}
        <div className="bg-[#1E1E1E] text-white rounded-xl p-5 flex flex-col items-center text-center max-w-[250px] mx-auto w-full">
          <div className="mb-4">
            <Image src="/equipe.png" alt="Equipe" width={80} height={80} className="w-auto h-20" style={{ height: "auto" }} />
          </div>
          <div className="text-2xl font-bold text-white mb-1">Equipe de</div>
          <div className="text-2xl font-bold text-white mb-1">engenharia</div>
          <div className="text-sm">própria</div>
        </div>

        {/* Card 4 - Potência */}
        <div className="bg-[#1E1E1E] text-white rounded-xl p-5 flex flex-col items-center text-center max-w-[250px] mx-auto w-full">
          <div className="mb-4">
            <Image src="/operacao.png" alt="Potência em operação" width={80} height={80} className="w-auto h-20" style={{ height: "auto" }} />
          </div>
          <div className="text-2xl font-bold mb-1">+ de 10 MWp</div>
          <div className="text-sm">em operação</div>
        </div>
      </div>

      {/* Barra Inferior */}
      <div className="w-full bg-[#45598F] h-12 flex items-center justify-start overflow-hidden mt-16">
        <div className="flex items-center whitespace-nowrap animate-scroll">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex items-center text-white font-semibold text-lg tracking-wide">
              <span className="mx-6">ESCOLHA A PROTONS</span>
              <BiLike size={30} className="mx-6 text-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 