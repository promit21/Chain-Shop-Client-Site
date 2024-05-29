import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import useCard from "../../Hooks/useCard";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [card] = useCard([]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Log out",
          text: "Log out successfully",
          icon: "success",
        });
      })
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      <li>
        <Link to="/dashboard/card">
          <button className="btn btn-sm">
          <MdOutlineAddShoppingCart />
            <div className="badge badge-secondary">+{card.length}</div>
          </button>
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-20 bg-black bg-opacity-30 text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-400 rounded-box w-56"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link>
            <button onClick={handleLogOut} className="btn btn-success">
              Log out
            </button>
          </Link>
        ) : (
          <Link to="/logIn">
            <button className="btn btn-success">Log in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
