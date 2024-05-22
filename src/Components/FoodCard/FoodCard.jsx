/* eslint-disable react/prop-types */

const FoodCard = ({ item }) => {
  const { name, image,price, recipe } = item;
  return (
    <div className="mt-10 sm:flex flex-col">
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="rounded-sm" />
          <p className="absolute right-4 top-4 bg-slate-800 text-white p-2 rounded-md">${price}</p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4  text-yellow-500 hover:bg-slate-500 hover:text-yellow-500">
              ADD TO CARD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
