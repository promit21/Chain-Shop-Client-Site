import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

/* eslint-disable react/prop-types */
const CardRow = ({ item, index, refetch }) => {
  const { price, name, image, _id } = item;
  const axios = useAxios();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`cards/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-lg">
          <FaTrash className="text-red-500"></FaTrash>
        </button>
      </th>
    </tr>
  );
};

export default CardRow;
