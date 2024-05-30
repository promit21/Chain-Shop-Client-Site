/* eslint-disable react/prop-types */
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = ({btnName}) => {
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const { googleLogin} = useAuth();
    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(result => {
          console.log(result.user)
          const userInfo = {
            name: result.user?.displayName,
            email: result.user?.email
          }
          axiosPublic.post('/users', userInfo)
          .then(res=> {
            console.log(res.data)
            navigate('/')
          })
        })
       
    }
  return (
    <div className=" my-10">
        <div className="divider">or</div>
      <div className="text-center">
        <button onClick={handleGoogleLogin} className="btn">
          <FaGoogle className="text-green-600"></FaGoogle>{btnName}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
