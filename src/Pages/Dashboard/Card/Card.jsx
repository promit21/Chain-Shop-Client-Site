import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCard from "../../../Hooks/useCard";
import CardRow from "./CardRow";

const Card = () => {
  const [card, refetch] = useCard();
  const totalPrice = card.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <SectionTitle
        heading={"WANNA ADD MORE?"}
        subHeading={"My Card"}
      ></SectionTitle>
      <div className="flex justify-around items-center">
        <h2 className="text-4xl">Total Orders: {card.length}</h2>
        <h2 className="text-4xl">Total Price: {totalPrice}</h2>
        <button className="btn btn-primary">Pay Now</button>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {card.map((item, index) => (
              <CardRow
                key={item._Id}
                item={item}
                index={index}
                refetch={refetch}
              ></CardRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
