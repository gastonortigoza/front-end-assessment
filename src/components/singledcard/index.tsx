import "./singleCard.css";
import { SingleCardProps } from "../../types";

const SingleCard: React.FC<SingleCardProps> = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (disabled) return;
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          onClick={handleClick}
          src="/img/cover.png"
          alt="card front"
        />
      </div>
    </div>
  );
};

export default SingleCard;
