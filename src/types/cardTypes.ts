export type Card = {
    id: number;
    src: string;
    matched: boolean;
  };

  export type SingleCardProps = {
    card: Card;
    handleChoice: (card: Card) => void;
    flipped: boolean;
    disabled: boolean;
  };