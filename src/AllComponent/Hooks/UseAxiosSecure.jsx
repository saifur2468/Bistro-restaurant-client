import axios from "axios";
import { useNavigate } from "react-router-dom";

const AxiosSecure = axios.create({
   baseURL: 'https://restaurantserver.vercel.app'
})
const UseAxiosSecure = () => {
   // const navigate = useNavigate();
   // const {logout} = useAuth();
   axios.interceptors.response.use(function (config) {
      const token = localStorage.getItem('access-token')
      //  console.log('request stopped by interceptors',token)
      config.headers.authorization = `Bearer${token}`;
      return config;
   }, function (error) {

      return Promise.reject(error);
   });

   axios.interceptors.response.use(function (response) {

      return response;
   }, (error) => {
      const status = error.response.status;
      console.log('status error in the interceptor', status)
      return Promise.reject(error);
   });
   return AxiosSecure;
};

export default UseAxiosSecure;  