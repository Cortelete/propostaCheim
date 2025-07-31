import React from 'react';

export interface Benefit {
  text: string;
  details?: string;
  subItems?: string[];
}

export interface ProposalSection {
  title: string;
  color: string;
  bgColor: string;
  benefits: Benefit[];
  id: string;
}

export interface ModalContent {
    title: string;
    content: React.ReactNode;
}