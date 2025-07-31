
import React from 'react';
import { WHATSAPP_LINK_CHAT, WHATSAPP_NUMBER, COMPANY_EMAIL } from '../constants';
import ArrowUpIcon from './icons/ArrowUpIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800/50 mt-24 sm:mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo e Slogan */}
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center gap-2 text-white text-xl font-bold">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-[#FFD369]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
              </svg>
              <span>InteligenciArte.IA</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Criando soluções com inteligência e design.
            </p>
          </div>

          {/* Contatos */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Contato</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={WHATSAPP_LINK_CHAT} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD369] transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                  <WhatsappIcon className="w-5 h-5" />
                  <span>{WHATSAPP_NUMBER}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-gray-400 hover:text-[#FFD369] transition-colors duration-300">
                  {COMPANY_EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright e Voltar ao Topo */}
          <div className="flex flex-col items-center md:items-end">
             <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-[#FFD369] transition-colors duration-300"
            >
              Voltar ao topo <ArrowUpIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800/50 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} InteligenciArte.IA – Desenvolvido por Davi Cortelete.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
