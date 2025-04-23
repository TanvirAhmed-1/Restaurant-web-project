import { useContext } from "react";
import { AuthContext } from "../components/Authountation/Authorization";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{loading,users}=useContext(AuthContext)

    if(loading){
        return<div className="flex items-center justify-center"><span className="loading loading-spinner text-error loading-xl"></span></div>
    }
if(users){
    return children
}
 return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;