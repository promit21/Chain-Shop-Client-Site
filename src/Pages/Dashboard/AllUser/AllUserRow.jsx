/* eslint-disable react/prop-types */
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const AllUserRow = ({ user, index, refetch }) => {
  const { name, email, _id } = user;
  const axios = useAxios();

  const handleMakeAdmin = id =>{
    axios.patch(`users/admin/${id}`)
    .then(res => {
         console.log(res.data) 
         if(res.data.modifiedCount >0){
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${name} is a Admin  Now`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch()
         }
    })
  }

  const handleDeleteUser = (id) => {
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
        axios.delete(`users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <th>{name}</th>
      <td>{email}</td>
      <td>
       {user.role === 'admin'? 'admin': <button
          onClick={() => handleMakeAdmin(_id)}
          className="btn btn-lg bg-orange-500"
        >
          <FaUsers className="text-white"></FaUsers>
        </button>}
      </td>
      <td>
        <button onClick={() => handleDeleteUser(_id)} className="btn btn-lg">
          <FaTrash className="text-red-500"></FaTrash>
        </button>
      </td>
    </tr>
  );
};

export default AllUserRow;
