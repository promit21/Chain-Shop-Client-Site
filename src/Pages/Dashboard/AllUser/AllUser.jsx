import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxios from "../../../Hooks/useAxios";
import AllUserRow from "./AllUserRow";

const AllUser = () => {
  const axios = useAxios();
  const { data: users = [],  refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("/users");
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        subHeading={"How Many??"}
        heading={"MANAGE ALL USERS"}
      ></SectionTitle>
      <div>
        <h2>Total Users: {users.length}</h2>
      </div>
      {/* Show All Users in a table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <AllUserRow key={user._id} user={user} index={index}  refetch={ refetch}></AllUserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
