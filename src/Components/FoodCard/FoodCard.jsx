/* eslint-disable react/prop-types */

import Button from "../../Shared/Button/Button";

import useAuth from "../../Hooks/useAuth";

import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import useCard from "../../Hooks/useCard";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axios =useAxios();
  const [, refetch] =useCard();

  const handleAddCard = () => {
    if (user && user.email) {
      const cardItem = {
        menuId: _id,
        email: user.email,
        image, price, name  
      };
      axios.post('/cards', cardItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title:  `${name} Added Successfully`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      })
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login before add card!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/logIn", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="mt-10 sm:flex flex-col">
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="rounded-sm" />
          <p className="absolute right-4 top-4 bg-slate-800 text-white p-2 rounded-md">
            ${price}
          </p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">{name}</h2>
          <p>{recipe}</p>
          <div onClick={handleAddCard} className="card-actions">
            <Button btnName={"Add to Card"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
