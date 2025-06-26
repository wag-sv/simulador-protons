export default function Rodape() {
  return (
    <section className="bg-[#CF7D00] py-16 -mt-22 px-6 relative z-0">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center text-center md:text-left">
          {/* Campo Grande */}
          <div className="text-white">
            <h3 className="text-2xl font-semibold mb-2">Campo Grande-MS</h3>
            <p className="mb-2">Rua Senador Ponce, 476 - Jardim Monte Libano</p>
            <p className="mb-4">CEP: 79004-570</p>
            <p className="mb-2">CNPJ: 20.742.199/0002-11</p>
            <p>Contato: (67) 9 9349-8307</p>
          </div>

          {/* Rondonópolis */}
          <div className="text-white">
            <h3 className="text-2xl font-semibold mb-2">Rondonópolis - MT</h3>
            <p className="mb-2">Av. Maria Martins Fontoura, 1170 Granville I,</p>
            <p className="mb-4">CEP: 78731-226</p>
            <p className="mb-2">CNPJ: 20.742.199/0001-30</p>
            <p>Contato: (66) 9 9200-2265</p>
          </div>
        </div>
      </div>
    </section>
  );
} 