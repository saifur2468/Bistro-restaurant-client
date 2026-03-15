import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import UseAuth from "./UseAuth";

const UseCart = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  const { data: cart = [], refetch, isLoading } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const res = await axiosSecure.get(`/cart?email=${encodeURIComponent(user.email)}`);
      return res.data;
    },
    enabled: !!user?.email, 
  });

  return [cart, refetch, isLoading];
};

export default UseCart;
