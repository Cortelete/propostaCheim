
import React, { useState } from 'react';
import { PROPOSAL_DATA, WHATSAPP_LINK_CHAT } from './constants';
import type { ModalContent } from './types';
import Header from './components/Header';
import ProposalSection from './components/ProposalSection';
import SummarySection from './components/SummarySection';
import ValueBreakdownSection from './components/ValueBreakdownSection';
import InvestmentSection from './components/InvestmentSection';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App(): React.ReactNode {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="animated-gradient-bg text-gray-200 min-h-screen">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-24">
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-white to-amber-300"
            style={{ backgroundSize: '200% 200%', animation: 'text-gradient-animation 4s ease infinite' }}
          >
            Proposta de Transformação Digital <br className="hidden sm:block" /> Para o <span className="text-amber-300">Seu Negócio</span>
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-base sm:text-xl text-gray-400 transition-colors duration-300 hover:text-gray-300">
            Uma solução completa da <span className="text-white font-semibold">InteligenciArte.IA</span> para construir uma marca forte e impulsionar seus resultados no ambiente digital.
          </p>
           <div className="mt-6 sm:mt-8 flex gap-3 justify-center">
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold bg-green-500/10 text-green-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Super Promoção — Válida Apenas Esta Semana
                </div>
            </div>
        </div>

        {/* Proposal Sections Grid */}
        <div id="services" className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROPOSAL_DATA.map((section) => (
            <ProposalSection key={section.id} section={section} onOpenModal={openModal} />
          ))}
        </div>

        <SummarySection />
        <ValueBreakdownSection onOpenModal={openModal} />
        <InvestmentSection />
      </main>

      <Footer />

      <Modal isOpen={modalContent !== null} onClose={closeModal}>
        {modalContent && (
          <>
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-4">{modalContent.title}</h3>
            <div className="text-gray-300 space-y-4">{modalContent.content}</div>
          </>
        )}
      </Modal>

      {/* Floating CTA Button */}
      <a
        href={WHATSAPP_LINK_CHAT}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center animate-pulse group"
        aria-label="Contatar no WhatsApp para conversar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 448 512" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.9-99.6 221.9-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.2-27.2l-6.9-4.1-72.1 18.9L99.1 352l-4.5-7.3c-18.9-30.1-29.6-65.7-29.6-101.8 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 w-max bg-gray-900 text-white text-sm rounded-lg py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none whitespace-nowrap">
          Queremos conversar com você!
        </span>
      </a>
    </div>
  );
}