import { useContext } from "react";
import { AuthContext } from "../components/Authountation/Authorization";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const{loading,users}=useContext(AuthContext)
    const location = useLocation();

    if(loading){
        return<div className="flex items-center justify-center"><span className="loading loading-spinner text-error loading-xl"></span></div>
    }
if(users){
    return children
}
return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;