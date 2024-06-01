import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxios = () => {
    const navigate = useNavigate(); 
    const {logOut} = useAuth( )
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log("request stopped by interceptors", token)
        config.headers.authorization = `Bearer ${token}`

        return config;
    }, function(error){
        return Promise.reject(error)
    });
    axiosSecure.interceptors.response.use(function(response){
        return response
    },async function (error){
        const status = error.response.status;
        // 401 or 403 Logout the user & move the user in login page
        if(status === 401 || status === 403){
            await logOut();
            navigate('/logIn')
        }
        return Promise.reject(error)
    })
 return axiosSecure;
};

export default useAxios;