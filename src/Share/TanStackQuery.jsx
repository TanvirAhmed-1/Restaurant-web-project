import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../components/Authountation/Authorization";


const TanStackQuery = () => {
    const{users}=useContext(AuthContext)
    const axiosBaseUrl=useAxios()
    const {data,refetch}=useQuery({
        queryKey:["cart",users?.email],
        queryFn: async ()=>{
            const res=await axiosBaseUrl.get(`/orders?email=${users.email}`)
            return res.data
        }
    })
    return [data,refetch]
};

export default TanStackQuery;