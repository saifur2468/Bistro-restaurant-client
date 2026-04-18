import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://restaurantserver.vercel.app/",
});

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;
