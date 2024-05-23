/* eslint-disable react/prop-types */

const Button = ({ btnName }) => {
  return (
    <div className="card-actions flex justify-center items-center mt-10">
      <button className="btn btn-outline border-0 border-b-4  text-yellow-500 hover:bg-gray-900 hover:text-yellow-500">
        {btnName}
      </button>
    </div>
  );
};

export default Button;
