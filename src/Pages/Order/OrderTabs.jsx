/* eslint-disable react/prop-types */
import FoodCard from "../../Components/FoodCard/FoodCard";

const OrderTabs = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTabs;
