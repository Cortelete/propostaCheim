
import React from 'react';
import { WHATSAPP_LINK_ACCEPT, WHATSAPP_LINK_ALIGN } from '../constants';

const InvestmentSection: React.FC = () => {
  const formattedEndDate = "segunda-feira, 04 de agosto de 2025";

  return (
    <section id="investment" className="mt-16 sm:mt-32 text-center">
      <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-gradient-to-br from-gray-900 to-black border-2 border-amber-400/50 rounded-2xl shadow-2xl shadow-amber-500/10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Investimento Promocional
        </h2>
        
        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-300">
          💎 Oferta Completa por apenas
        </p>
        <p className="my-2 sm:my-4 text-5xl sm:text-7xl font-bold text-amber-300 tracking-tighter">
          R$ 2.000,00
        </p>

        <p className="max-w-xl mx-auto text-xs sm:text-base text-gray-400">
          Como detalhado acima, você tem acesso a uma solução completa avaliada em R$ 11.500,00 por uma condição única e temporária.
        </p>

        <div className="mt-6 sm:mt-8 text-base sm:text-xl font-semibold text-green-400 bg-green-500/10 inline-block px-4 py-2 sm:px-6 rounded-full">
            Sua economia total é de R$ 9.500,00
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
          <a
            href={WHATSAPP_LINK_ACCEPT}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md inline-block bg-amber-400 text-black text-sm sm:text-lg font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-xl uppercase tracking-wider shadow-lg shadow-amber-400/20 transform hover:scale-105 hover:bg-amber-300 transition-all duration-300"
          >
            Quero Aproveitar Agora
          </a>
           <a
            href={WHATSAPP_LINK_ALIGN}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md inline-block bg-transparent border-2 border-gray-600 text-gray-400 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl tracking-wider transform hover:scale-105 hover:bg-gray-800 hover:text-white transition-all duration-300 text-xs sm:text-base"
          >
            Alinhar melhor
          </a>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
            📌 Oferta válida até {formattedEndDate}, ou enquanto durar o lote promocional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
