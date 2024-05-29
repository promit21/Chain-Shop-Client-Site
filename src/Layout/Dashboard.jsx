import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle/SectionTitle";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 p-4">
        <ul className="menu">
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
        </ul>
      </div>
      <div className="flex-1 p-10">
        <SectionTitle
          heading={"WANNA ADD MORE?"}
          subHeading={"My Card"}
        ></SectionTitle>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
