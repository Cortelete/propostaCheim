
import React from 'react';
import type { ProposalSection as ProposalSectionType, Benefit, ModalContent } from '../types';
import CheckIcon from './icons/CheckIcon';
import InfoIcon from './icons/InfoIcon';
import SparklesIcon from './icons/SparklesIcon';

interface ProposalSectionProps {
  section: ProposalSectionType;
  onOpenModal: (content: ModalContent) => void;
}

const ProposalSection: React.FC<ProposalSectionProps> = ({ section, onOpenModal }) => {
  const handleViewMore = (e: React.MouseEvent, benefit: Benefit) => {
    e.stopPropagation(); // Impede que o clique no ícone dispare o clique do card
    if (benefit.details) {
      onOpenModal({
        title: benefit.text,
        content: (
          <div>
            <p className="text-sm sm:text-base">{benefit.details}</p>
            {benefit.subItems && (
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-400 text-sm sm:text-base">
                {benefit.subItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ),
      });
    }
  };

  const handleCardClick = () => {
    onOpenModal({
      title: section.title,
      content: (
        <ul className="space-y-4">
          {section.benefits.map((benefit, index) => {
            // Destaque especial para o desenvolvimento estratégico
            if (section.id === 'design-servicos' && benefit.text === 'Desenvolvimento Estratégico de Marca') {
              return (
                <li key={index}>
                  <div className="p-4 bg-amber-900/20 border border-amber-400/30 rounded-xl">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2 bg-amber-400/10 rounded-full mt-1 flex-shrink-0">
                        <SparklesIcon className="w-5 sm:w-6 h-5 sm:h-6 text-amber-300" />
                      </div>
                      <div>
                        <p className="font-bold text-base sm:text-lg text-amber-300">{benefit.text}</p>
                        <p className="text-sm text-amber-200/80">{benefit.details}</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm sm:text-base">
                      {benefit.subItems?.map((item, subIndex) => (
                        <li key={subIndex} className="flex items-start gap-3">
                          <CheckIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }

            // Renderização padrão para outros benefícios
            return (
              <li key={index} className="flex items-start gap-3 p-3 bg-gray-800/50 rounded-lg">
                <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div className="flex-grow">
                  <p className="font-semibold text-white text-sm sm:text-base">{benefit.text}</p>
                  {benefit.details && <p className="text-xs sm:text-sm text-gray-400 mt-1">{benefit.details}</p>}
                  {benefit.subItems && (
                    <ul className="mt-2 space-y-1 list-disc list-inside text-gray-400 text-xs sm:text-sm">
                      {benefit.subItems.map((item, subIndex) => <li key={subIndex}>{item}</li>)}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      ),
    });
  };

  return (
    <div
      onClick={handleCardClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCardClick(); } }}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes sobre ${section.title}`}
      className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-4 sm:p-6 flex flex-col h-full transform hover:scale-[1.02] hover:border-gray-700 transition-all duration-300 shine-effect cursor-pointer group"
    >
      <h3 className={`text-lg sm:text-2xl font-bold ${section.color}`}>{section.title}</h3>
      <div className="flex-grow mt-4 sm:mt-6">
        <ul className="space-y-3 sm:space-y-4">
          {section.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <div className="flex-grow">
                <span className="text-sm sm:text-base text-gray-200">{benefit.text}</span>
                {benefit.details && (
                  <button
                    onClick={(e) => handleViewMore(e, benefit)}
                    className="ml-1.5 sm:ml-2 text-gray-500 hover:text-white transition-colors duration-200 z-10 relative"
                    aria-label={`Saiba mais sobre ${benefit.text}`}
                  >
                    <InfoIcon className="w-4 h-4 inline-block" />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 sm:mt-8">
        <div className={`${section.bgColor} w-full text-black font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg uppercase tracking-wider text-center group-hover:brightness-110 group-hover:shadow-lg group-hover:shadow-white/10 transform group-hover:scale-105 transition-all duration-300 text-xs sm:text-sm`}>
          Ver todos os detalhes
        </div>
      </div>
    </div>
  );
};

export default ProposalSection;
