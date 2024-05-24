import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('logIn') || location.pathname.includes('register')
    return (
        <div className="max-w-screen-xl mx-auto">
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;