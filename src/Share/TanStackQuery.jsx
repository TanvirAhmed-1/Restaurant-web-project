import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const TanStackQuery = () => {
    const axiosBaseUrl=useAxios()
    const {data,refetch}=useQuery({
        queryKey:["cart"],
        queryFn: async ()=>{
            const res=await axiosBaseUrl.get("/orders")
            return res.data
        }
    })
    return [data,refetch]
};

export default TanStackQuery;