import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";


const PrivetRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext)

    if(loading){
        return <Loading/>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivetRoute;