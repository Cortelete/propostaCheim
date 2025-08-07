
import React from 'react';
import type { ModalContent } from '../types';
import BrainIcon from './icons/BrainIcon';
import BrushIcon from './icons/BrushIcon';
import CodeIcon from './icons/CodeIcon';
import SparklesIcon from './icons/SparklesIcon';


const ValueItem = ({ title, description, value }: { title: string, description: string, value: string }) => (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-left">
        <div>
            <h4 className="font-semibold text-white group-hover:text-amber-300 transition-colors duration-300 text-base sm:text-lg">{title}</h4>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-lg">{description}</p>
        </div>
        <p className="text-base sm:text-lg font-bold text-gray-300 mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap flex items-center gap-2">
            R$ {value}
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 text-gray-500 group-hover:text-amber-300 transition-colors duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
        </p>
    </div>
);

const MethodologyItem: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="bg-amber-400/10 p-2 sm:p-3 rounded-lg mt-1 flex-shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-white text-base sm:text-lg">{title}</h4>
            <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
    </div>
);

interface ValueBreakdownSectionProps {
  onOpenModal: (content: ModalContent) => void;
}

const ValueBreakdownSection: React.FC<ValueBreakdownSectionProps> = ({ onOpenModal }) => {
    const valueItemsData = [
    {
      title: 'Desenvolvimento Web Avançado',
      description: 'Landing page com sistema de gestão, admin, estoque e vendas. (Equivalente ao nosso Plano Premium)',
      value: '7.000,00',
      href: 'https://iarte.vercel.app/#plans'
    },
    {
      title: 'Criação de Nova Marca',
      description: 'Desenvolvimento do novo nome, logotipo e estratégia de marca completa. (Equivalente ao nosso serviço de Branding)',
      value: '2.500,00',
      href: 'https://iarte.vercel.app/#plans'
    },
    {
      title: 'Consultoria IA.VIP (1 Mês)',
      description: 'Treinamento e planejamento de IA para otimizar suas redes sociais. (Valor padrão da consultoria)',
      value: '1.200,00',
      href: 'https://iarte.vercel.app/#plans'
    },
    {
      title: 'Pacote de Artes Gráficas',
      description: 'Flyer, Cartão de Visita e 5 artes bônus para suas campanhas. (Baseado em valores de pacotes avulsos)',
      value: '800,00',
      href: 'https://iarte.vercel.app/#plans'
    }
  ];

  const handleValueItemClick = (item: typeof valueItemsData[0]) => {
      onOpenModal({
        title: item.title,
        content: (
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
            
            <div className="bg-amber-900/50 border border-amber-400/30 rounded-lg p-3 sm:p-4 text-center">
              <h4 className="font-bold text-amber-300 text-base sm:text-lg">Atenção!</h4>
              <p className="mt-2 text-xs sm:text-sm text-amber-200/80">
                Se você seguir este link, vai encontrar os itens <span className="font-bold underline">sem a sua oferta personalizada</span>, que foi criada com condições exclusivas para a sua empresa.
              </p>
            </div>

            <p className="text-base sm:text-lg text-white">Valor de mercado deste item: <span className="font-bold">R$ {item.value}</span></p>

            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-gray-600 text-white font-bold py-2.5 sm:py-3 px-6 rounded-lg hover:bg-gray-500 transition-colors duration-300 text-sm"
            >
              Visitar página de planos padrão
            </a>
          </div>
        )
      });
    };
  
    const handleMethodologyClick = () => {
    onOpenModal({
      title: 'Nossa Metodologia: Da Estratégia à Execução',
      content: (
        <div className="space-y-6">
            <MethodologyItem 
                icon={<BrainIcon className="w-6 h-6 text-amber-300" />}
                title="1. Imersão e Estratégia"
                description="Nossa primeira etapa é uma imersão completa no seu negócio. Realizamos workshops para entender seus desafios, público-alvo e metas. A partir daí, traçamos um plano estratégico claro, definindo os pilares que sustentarão todo o projeto, desde o novo nome até a funcionalidade do sistema."
            />
            <MethodologyItem 
                icon={<BrushIcon className="w-6 h-6 text-amber-300" />}
                title="2. Design e Identidade Visual"
                description="Com a estratégia definida, nossa equipe de design entra em ação para criar uma identidade visual única e memorável. Desenvolvemos o logotipo, a paleta de cores e a tipografia que darão vida à sua marca em todos os materiais, do digital ao impresso, garantindo consistência e profissionalismo."
            />
            <MethodologyItem 
                icon={<CodeIcon className="w-6 h-6 text-amber-300" />}
                title="3. Desenvolvimento e Tecnologia"
                description="Utilizamos as tecnologias mais modernas para construir uma solução robusta, segura e escalável. A landing page é desenvolvida com foco na performance e na experiência do usuário, enquanto o back-end é construído para ser um sistema de gerenciamento intuitivo e poderoso para sua equipe."
            />
            <MethodologyItem 
                icon={<SparklesIcon className="w-6 h-6 text-amber-300" />}
                title="4. Consultoria e Empoderamento"
                description="Não apenas entregamos uma ferramenta, nós capacitamos sua equipe. A consultoria IA.VIP foi desenhada para transferir conhecimento prático, ensinando como usar a inteligência artificial para otimizar o marketing, automatizar tarefas e, finalmente, impulsionar os resultados do seu negócio de forma autônoma."
            />
        </div>
      )
    });
  };

  return (
    <section id="value-breakdown" className="mt-16 sm:mt-32">
        <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Por que esta oferta é <span className="text-amber-300">única</span>?
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-400 max-w-3xl mx-auto">
                Analisamos cada entrega com base em nossos valores de mercado para que você veja a dimensão real da oportunidade.
            </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#1c1c1c] to-[#151515] border-2 border-amber-400/30 rounded-2xl p-4 sm:p-8 shadow-2xl shadow-amber-500/10">
            <div className="flex flex-col">
                {valueItemsData.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => handleValueItemClick(item)}
                        className="p-3 sm:p-4 group transition-all duration-300 border-b border-gray-800 last-of-type:border-b-0 hover:bg-white/5 hover:rounded-lg w-full"
                        aria-label={`Ver detalhes sobre ${item.title}`}
                    >
                        <ValueItem
                            title={item.title}
                            description={item.description}
                            value={item.value}
                        />
                    </button>
                ))}
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-800 text-center space-y-2 group">
                <p className="text-base text-gray-400">Valor Total de Mercado:</p>
                <p className="text-xl sm:text-3xl font-bold text-red-500 line-through">R$ 11.500,00</p>
                
                <div className="overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-500 ease-in-out">
                    <div className="pt-2 sm:pt-4 space-y-3">
                         <p className="text-base sm:text-xl font-semibold text-yellow-400">
                           Sua economia: <span className="font-bold">R$ 9.500,00</span>
                         </p>
                         <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3 mt-2 inline-block">
                            <p className="text-base sm:text-xl font-bold text-green-300">
                              Investimento agora: R$ 2.000,00
                            </p>
                            <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                              (oferta válida se confirmada até seg, 04/08/25)
                            </p>
                         </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800/50 text-center">
                <button
                    onClick={handleMethodologyClick}
                    className="text-amber-300 font-semibold hover:text-white transition-colors duration-300 group text-sm sm:text-base"
                    aria-label="Entenda nossa metodologia de trabalho"
                >
                    Entenda nossa metodologia de trabalho
                    <span className="block h-0.5 max-w-0 bg-amber-300/50 group-hover:max-w-full transition-all duration-500 ease-in-out mx-auto"></span>
                </button>
            </div>
        </div>
    </section>
  );
};

export default ValueBreakdownSection;
