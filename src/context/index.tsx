// src/context/index.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { cardImages as initialCardImages } from '../utils';
import { Card } from '../types';

interface CardContextProps {
  cardImages: Card[];
}

const CardContext = createContext<CardContextProps | undefined>(undefined);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const cardImages = useState(initialCardImages.map((card, index) => ({ ...card, id: index })))[0];

  return (
    <CardContext.Provider value={{ cardImages}}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};