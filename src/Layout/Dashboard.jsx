import {
  FaAd,
  FaBook,
  FaCalendar,
  FaCuttlefish,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 p-4">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  {" "}
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaCuttlefish></FaCuttlefish> Add Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItems">
                  {" "}
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUser">
                  <FaUser></FaUser> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  {" "}
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/card">
                  {" "}
                  <FaShoppingCart></FaShoppingCart> My Card
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reviews">
                  <FaAd></FaAd>Add a Reviews
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList> My Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              {" "}
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
