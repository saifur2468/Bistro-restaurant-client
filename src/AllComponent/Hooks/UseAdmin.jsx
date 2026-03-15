import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useAuth } from "../Firebase/Provider/AuthProvider";


const UseAdmin = () =>{
    const {user} = useAuth();
    const axiosSecure = UseAxiosSecure();
    const {data: isAdmin,ispending:isAdminLoading} = useQuery({
        queryKey:[user?.email,'isadmin'],
        queryFn:async () =>{
            const res = await axiosSecure.get(`/users/admin/${encodeURIComponent(email)}`);
            console.log(res.data);
            return res.data?.Admin;
        }
    })
    return[isAdmin,isAdminLoading]
}

export default UseAdmin