import { IoIosArrowForward } from 'react-icons/io';

export default function Contato() {
  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#45598F] text-4xl font-bold mb-4">
          Entre em contato conosco
        </h2>
        <p className="text-[#45598F] text-xl mb-8">
          E simule seu sistema.
        </p>
        <a 
          href="https://protonsenergia.com.br/simulador/"
          target="_blank"
          rel="noopener noreferrer" 
          className="bg-[#45598F] hover:bg-[#3A4A7B] text-white font-semibold px-8 py-3 rounded-full text-base flex items-center gap-2 shadow-md mx-auto w-fit"
        >
          Simular meu sistema
          <span className="bg-white rounded-full w-7 h-7 flex items-center justify-center ml-2">
            <IoIosArrowForward size={22} color="#222" />
          </span>
        </a>
      </div>
    </section>
  );
} 