// the aim of this component is to display the card grid
import React, { useState, useEffect } from 'react';
import SingleCard from '../singledcard';
import './cardgrid.css';
import { Card, CardGridProps } from '../../types';
import {messages} from '../../messages';
import { useCardContext } from '../../context';


const CardGrid: React.FC<CardGridProps> = () => {
  const { cardImages } = useCardContext();
  const [cards, setCards] = useState<Card[]>([]);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);

  //this function will shuffle the cards and reset the game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), matched: false }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle the choice of the user
  const handleChoice = (card: Card) => {
    if (choiceOne) {
      setChoiceTwo(card);
    } else {
      setChoiceOne(card);
    }
  };

  //reset the turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            }
            return card;
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);
  

  useEffect(() => {
    shuffleCards();
  }, [cardImages]);

  return (
    <div>
      <button onClick={shuffleCards}>{messages.resetButton}</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
};

export default CardGrid;