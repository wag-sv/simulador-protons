import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Garantias() {
  return (
    <section className="bg-[#222222] text-white pt-20 pb-16 px-6 -mt-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Coluna Superior: Título e Imagem */}
          <div className="flex flex-col items-center lg:max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Garantias</h2>
            <p className="text-lg mb-8">Qualidade garantida e economia no bolso!</p>
            <div className="w-[400px] h-[400px] relative">
              <Image 
                src="/garantia.png" 
                alt="Selo de Qualidade Garantida" 
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Cards de Garantia */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center flex-wrap max-w-5xl">
            {/* Card Módulos */}
            <div className="border border-white rounded-lg p-4 relative w-[260px] h-[140px] flex flex-col">
              <div className="absolute -top-3 -left-3 bg-[#222222] rounded-full p-1">
                <BsCheckCircleFill className="text-[#FF6B00] text-2xl" />
              </div>
              <h3 className="text-[#FF6B00] text-xl font-semibold mb-3">MÓDULOS</h3>
              <p className="text-white text-sm">
                Garantia da fabricante de 25 anos contra queda de eficiência em 20%.
              </p>
            </div>

            {/* Card Inversor(es) */}
            <div className="border border-white rounded-lg p-4 relative w-[260px] h-[140px] flex flex-col">
              <div className="absolute -top-3 -left-3 bg-[#222222] rounded-full p-1">
                <BsCheckCircleFill className="text-[#FF6B00] text-2xl" />
              </div>
              <h3 className="text-[#FF6B00] text-xl font-semibold mb-3">INVERSOR(ES)</h3>
              <p className="text-white text-sm">
                Garantia de 10 anos da fabricante.
              </p>
            </div>

            {/* Card Mão de Obra */}
            <div className="border border-white rounded-lg p-4 relative w-[260px] h-[140px] flex flex-col">
              <div className="absolute -top-3 -left-3 bg-[#222222] rounded-full p-1">
                <BsCheckCircleFill className="text-[#FF6B00] text-2xl" />
              </div>
              <h3 className="text-[#FF6B00] text-xl font-semibold mb-3">MÃO DE OBRA</h3>
              <p className="text-white text-sm">
                Garantia de 3 meses na execução.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 