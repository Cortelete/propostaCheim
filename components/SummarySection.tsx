
import React from 'react';

const ChartBar: React.FC<{ label: string; value: string; color: string; }> = ({ label, value, color }) => (
  <div className="flex items-center gap-4">
    <span className="w-36 text-sm text-gray-400">{label}</span>
    <div className="flex-1 bg-gray-700/50 rounded-full h-2.5">
      <div className={`${color} h-2.5 rounded-full`} style={{ width: value }}></div>
    </div>
  </div>
);


const SummarySection: React.FC = () => {
  return (
    <section id="summary" className="mt-24 sm:mt-32">
      <div className="relative bg-[#1a1a1a]/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-gray-700 hover:scale-[1.01] shine-effect">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white tracking-tight">
                Resumo Estratégico para a <span className="text-amber-300">CheimShop</span>
            </h2>
            <p className="mt-2 text-md text-gray-400 max-w-2xl mx-auto">Como vamos transformar a operação e o marketing do seu delivery sob a nova marca.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Bloco "Otimização de Foco" */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Otimização de Foco</h3>
                <div className="space-y-4 p-4 bg-black/20 rounded-lg">
                    <p className="text-sm font-medium text-gray-300">Sua equipe poderá focar mais em crescimento e menos em tarefas manuais:</p>
                    <ChartBar label="Gestão de Pedidos" value="85%" color="bg-[#85E3F2]" />
                    <ChartBar label="Criação de Conteúdo" value="75%" color="bg-[#F7AFC7]" />
                    <ChartBar label="Relacionamento c/ Cliente" value="90%" color="bg-[#FFD369]" />
                    <ChartBar label="Expansão Estratégica" value="70%" color="bg-green-400" />
                </div>
            </div>

            {/* Bloco "Projeção de Resultados" */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">Projeção de Resultados</h3>
                 <div className="space-y-4 p-4 bg-black/20 rounded-lg">
                    <p className="text-sm font-medium text-gray-300 mb-2">Ao profissionalizar sua presença online e otimizar a gestão, a projeção é:</p>
                    <div className="flex justify-between items-baseline">
                        <p className="text-gray-300">Novos Clientes (Online)</p>
                        <p className="text-2xl font-bold text-green-400">+250%</p>
                    </div>
                     <div className="flex justify-between items-baseline">
                        <p className="text-gray-300">Agilidade nos Pedidos</p>
                        <p className="text-2xl font-bold text-green-400">+60%</p>
                    </div>
                     <div className="flex justify-between items-baseline">
                        <p className="text-gray-300">Taxa de Recompra</p>
                        <p className="text-2xl font-bold text-green-400">+45%</p>
                    </div>
                </div>
            </div>
        </div>

        <p className="text-center mt-12 text-xs text-gray-500">
            Aviso: Todos os dados são simbólicos e servem apenas como estimativa potencial para ilustrar o valor da solução.
        </p>
      </div>
    </section>
  );
};

export default SummarySection;