/* eslint-disable react/prop-types */

import Button from "../../../Shared/Button/Button";

const RecommendsCard = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div className="mb-20 mt-10 sm:flex flex-col">
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="rounded-sm"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{name}</h2>
          <p>{recipe}</p>
         <Button btnName={"Add to Card"}></Button>
        </div>
      </div>
    </div>
  );
};

export default RecommendsCard;
