import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { PiLightningBold, PiSolarPanel } from "react-icons/pi";
import { BiMoney } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

export default function CasesSucesso() {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#45598F] mb-4 text-center lg:text-left lg:ml-12">Cases de Sucesso</h2>
        <p className="text-[#45598F] mb-12 text-center lg:text-left lg:ml-12">Alguns de nossos projetos realizados.</p>
        
        <div className="space-y-8">
          {/* AABB */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center">
            <div className="bg-[#1E1E1E] text-white p-5 rounded-2xl shadow-lg w-60 h-60 flex flex-col justify-center lg:-mr-8 z-10 -mb-20 lg:mb-0">
              <div className="flex items-center gap-3 text-[#FF6B00] font-semibold mb-4">
                <IoLocationOutline size={28} />
                <div>
                  <div className="text-base font-bold text-white uppercase">AABB</div>
                  <div className="text-sm font-bold text-white">CAMPO GRANDE - MS</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <PiLightningBold size={26} className="text-[#FF6B00]" />
                <span className="text-base font-bold text-white">129,27 kWp</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <PiSolarPanel size={26} className="text-[#FF6B00]" />
                <span className="text-base font-bold text-white">278 Módulos</span>
              </div>
              <div className="flex items-start gap-3">
                <BiMoney size={26} className="text-[#FF6B00] mt-1" />
                <div>
                  <div className="text-sm font-bold text-white">Economia média anual:</div>
                  <div className="text-base font-bold text-white">R$ 180.000,00</div>
                </div>
              </div>
            </div>
            <div className="relative flex-1 max-w-[700px] w-full">
              <Image 
                src="/aabb.png" 
                alt="AABB Campo Grande" 
                width={700} 
                height={350} 
                className="w-full h-[280px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Fazenda */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center">
            <div className="bg-[#1E1E1E] text-white p-5 rounded-2xl shadow-lg w-60 h-60 flex flex-col justify-center lg:-mr-8 z-10 -mb-20 lg:mb-0">
              <div className="flex items-center gap-3 text-[#FF6B00] font-semibold mb-4">
                <IoLocationOutline size={28} />
                <div className="text-base font-bold text-white uppercase">RONDONÓPOLIS - MT</div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <PiLightningBold size={26} className="text-[#FF6B00]" />
                <span className="text-base font-bold text-white">350 MWh/ano</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <PiSolarPanel size={26} className="text-[#FF6B00]" />
                <span className="text-base font-bold text-white">433 Módulos</span>
              </div>
              <div className="flex items-start gap-3">
                <BiMoney size={26} className="text-[#FF6B00] mt-1" />
                <div>
                  <div className="text-sm font-bold text-white">Economia média anual:</div>
                  <div className="text-base font-bold text-white">R$ 300.000,00</div>
                </div>
              </div>
            </div>
            <div className="relative flex-1 max-w-[700px] w-full">
              <Image 
                src="/fazenda.png" 
                alt="Fazenda em Rondonópolis" 
                width={700} 
                height={350} 
                className="w-full h-[280px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* CEDIR */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-center">
            <div className="bg-[#1E1E1E] text-white p-5 rounded-2xl shadow-lg w-60 h-60 flex flex-col justify-center lg:-mr-8 z-10 -mb-20 lg:mb-0">
              <div className="flex items-center gap-3 text-[#FF6B00] font-semibold mb-4">
                <IoLocationOutline size={28} />
                <div>
                  <div className="text-base font-bold text-white uppercase">CEDIR</div>
                  <div className="text-sm font-bold text-white">RONDONÓPOLIS - MT</div>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <PiLightningBold size={26} className="text-[#FF6B00]" />
                <span className="text-base font-bold text-white">52.000 kWh/m.m</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <PiSolarPanel size={26} className="text-[#FF6B00]" />
                <span className="text-base font-bold text-white">730 Módulos de 610w</span>
              </div>
              <div className="flex items-start gap-3">
                <BiMoney size={26} className="text-[#FF6B00] mt-1" />
                <div>
                  <div className="text-sm font-bold text-white">Economia média anual:</div>
                  <div className="text-base font-bold text-white">R$ 430.000,00</div>
                </div>
              </div>
            </div>
            <div className="relative flex-1 max-w-[700px] w-full">
              <Image 
                src="/cedir.png" 
                alt="CEDIR Rondonópolis" 
                width={700} 
                height={350} 
                className="w-full h-[280px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Botão Simulador */}
        <div className="flex justify-center mt-16 -mb-14 relative z-10">
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
      </div>
    </section>
  );
} 