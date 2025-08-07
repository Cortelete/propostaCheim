
import { ProposalSection } from './types';

const WHATSAPP_BASE_URL = 'https://wa.me/5541988710303?text=';

// Mensagem para o botão flutuante e rodapé
const CHAT_MESSAGE = "Olá! Vimos a proposta e queremos conversar com vocês antes.";
// Mensagem para o botão "Quero Aproveitar Agora"
const ACCEPT_MESSAGE = "Já decidimos e queremos melhorar nosso negócio com a InteligenciArte.IA.";
// Mensagem para o botão "Alinhar melhor"
const ALIGN_MESSAGE = "Olá! Gostaríamos de alinhar melhor alguns pontos da proposta antes de prosseguir.";

export const WHATSAPP_LINK_CHAT = `${WHATSAPP_BASE_URL}${encodeURIComponent(CHAT_MESSAGE)}`;
export const WHATSAPP_LINK_ACCEPT = `${WHATSAPP_BASE_URL}${encodeURIComponent(ACCEPT_MESSAGE)}`;
export const WHATSAPP_LINK_ALIGN = `${WHATSAPP_BASE_URL}${encodeURIComponent(ALIGN_MESSAGE)}`;

export const WHATSAPP_NUMBER = '41 98871-0303';
export const COMPANY_EMAIL = 'contato@inteligenciarte.ia';

export const PROPOSAL_DATA: ProposalSection[] = [
  {
    id: 'landing-page',
    title: 'Landing Page Aprimorada',
    color: 'text-[#85E3F2]',
    bgColor: 'bg-[#85E3F2]',
    benefits: [
      {
        text: 'Implementação inicial em até 30 dias',
        details: 'Desenvolvimento e publicação da primeira versão da sua landing page em até 30 dias, garantindo agilidade para sua presença online.'
      },
      {
        text: 'Back-end contínuo por 3 meses',
        details: 'Suporte e desenvolvimento contínuo do back-end com entregas incrementais, adicionando novas funcionalidades e melhorias ao longo de 3 meses.',
        subItems: [
            'Sistema de login e senha para administradores.',
            'Tela administrativa com IA para geração de ideias (10 usos/dia).',
            'Sistema simples de controle de estoque e vendas.',
            'Edição de usuários e gerenciamento de banco de dados.'
        ]
      },
    ],
  },
  {
    id: 'design-servicos',
    title: 'Artes Gráficas & Serviços Estratégicos',
    color: 'text-[#FFD369]',
    bgColor: 'bg-[#FFD369]',
    benefits: [
      {
        text: 'Flyer Digital Personalizado',
        details: 'Criação de um flyer digital com design exclusivo para suas campanhas. Alterações leves são livres, baseadas em direcionamentos práticos para manter a agilidade.'
      },
      {
        text: 'Cartão de Visita Personalizado',
        details: 'Design de cartão de visita seguindo a mesma identidade visual do flyer. Alterações são limitadas para focar no resultado. Personalizações artísticas complexas podem ter custo adicional.'
      },
      {
        text: 'Desenvolvimento Estratégico de Marca',
        details: 'Um pacote completo para reformular e impulsionar sua marca no mercado.',
        subItems: [
            'Criação de novo nome e marca.',
            'Criação de logotipo personalizado.',
            'Desenvolvimento de uma nova identidade visual completa.',
            'Recomendações estratégicas exclusivas para o seu nicho.',
            'Acesso a grupo de mentoria e networking.'
        ]
      },
    ],
  },
  {
    id: 'consultoria-bonus',
    title: 'Consultoria IA.VIP & Bônus',
    color: 'text-[#F7AFC7]',
    bgColor: 'bg-[#F7AFC7]',
    benefits: [
      {
        text: 'Consultoria IA.VIP – Redes Sociais (1 mês)',
        details: 'Um mês de consultoria intensiva para transformar suas redes sociais em uma máquina de resultados.',
        subItems: [
            'Aulas sobre uso prático de IA para negócios.',
            'Aulas de criação e automação de posts.',
            'Estrutura de cronogramas e horários de postagem.',
            'Planejamento visual e estratégico do feed.'
        ]
      },
      {
        text: 'Bônus Exclusivos Gratuitos',
        details: 'Um conjunto de presentes para acelerar ainda mais seu sucesso, inclusos sem custo adicional neste plano.',
        subItems: [
            '5 artes extras aleatórias (válidas por 1 ano).',
            'Início da estrutura do Back-end com segurança reforçada.',
            'Desconto IA.VIP por 3 meses em planos de automação.'
        ]
      }
    ],
  },
];
