import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://restuarent-webserver.vercel.app",
});

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;
