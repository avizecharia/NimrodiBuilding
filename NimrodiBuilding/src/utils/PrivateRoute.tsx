import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router";
import { RootState } from "../store/store";

interface IPrivateRoute{
    component: React.ReactNode,
}

const PrivateRoute = ({ component}:IPrivateRoute) => {
    //FILL HERE 3.6
    const {index} = useParams()
    const sel = useSelector((state:RootState) => state.Floorreducer)
    if(sel > Number(index) )
    {
        return<Navigate to={`/floor/${index}`}/>
    }
    else {
        return <Navigate to="/"/>
    }
    

};

export default PrivateRoute