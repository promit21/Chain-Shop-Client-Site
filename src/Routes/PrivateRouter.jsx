/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className=" flex justify-center items-center loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate to='/logIn' state={location} replace></Navigate>
};

export default PrivateRouter;