/* eslint-disable react/prop-types */


const MenuItem = ({item}) => {
    const {name, image, price, recipe } = item;
    return (
        <div className="flex justify-center items-start gap-5">
              <img className="w-[100px] rounded-br-badge" src={image} alt="" />
              <div>
                <p>{name}-------------------</p>
                <h1>{recipe}</h1>
              </div>
          <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;