import useCard from "../../../Hooks/useCard";

const Card = () => {
  const [card] = useCard();
  return (
    <div>
      <div className="flex justify-around items-center">
        <h2 className="text-6xl">Total Orders: {card.length}</h2>
        <h2 className="text-6xl">Total Price: {card.length}</h2>
      </div>
    </div>
  );
};

export default Card;
