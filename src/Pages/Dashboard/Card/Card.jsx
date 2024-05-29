import useCard from "../../../Hooks/useCard";

const Card = () => {
  const [card] = useCard();
  const totalPrice = card.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className="flex justify-around items-center">
        <h2 className="text-4xl">Total Orders: {card.length}</h2>
        <h2 className="text-4xl">Total Price: {totalPrice}</h2>
        <button className="btn btn-primary">Pay Now</button>
      </div>
    </div>
  );
};

export default Card;
