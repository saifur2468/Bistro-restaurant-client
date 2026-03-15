import {
    createBrowserRouter,

} from 'react-router-dom';
import Main from '../Main';
import Home from '../../Pages/Home/Home';
import Menu from '../../Pages/Menu/Menu/Menu';
import OrderFood from '../../Pages/Order/Order/OrderFood';
import Login from '../../Pages/Login/Login';
import SignUP from '../../Pages/Login/SignUP';
import Contact from '../../Pages/Home/Contact/Contact';
import PrivetRouter from './PrivetRoute/PrivetRouter';
import Dashborad from '../Dashborad/Dashborad';
import Cart from '../Dashborad/cart/Cart';
// import AllUser from '../Dashborad/AllUser/AllUser';
import Error from '../../Pages/Error/Error';
// import Additem from '../Dashborad/Additem/Additem';
import AdminRoute from './AdminRoute';
import Dashboard from '../Dashborad/Dashborad';
import UserHome from '../Dashborad/UserHome';
import Reservation from '../Dashborad/cart/Reservation';
import Payment from '../Dashborad/cart/Payment';
import PaymentHistory from '../Dashborad/cart/PaymentHistory';
import MyCart from '../Dashborad/cart/MyCart';
import AddReview from '../Dashborad/cart/AddReview';
import MyBooking from '../Dashborad/cart/MyBooking';
import AllUser from './PrivetRoute/AllUser';
import Additem from './PrivetRoute/AddItem';
import AdminHome from './PrivetRoute/AdminHome';
import ManageBooking from './ManageBooking';
// import AllUser from '../../Layout/Router/PrivetRoute/AllUser';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: 'menu', element: <Menu></Menu> },
            { path: 'orderFood', element: <OrderFood></OrderFood> },
            { path: 'login', element: <Login></Login> },
            { path: 'SignUp', element: <SignUP></SignUP> },
            {
                path: 'Contact',
                element: <PrivetRouter><Contact></Contact></PrivetRouter>
            },
        ]
    },
    {
        path: 'dashboard', // মেইন পাথ ছোট হাতের রাখাই ভালো
        element: <Dashboard></Dashboard>,
        children: [
            // --- Normal User Routes ---
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'cart', // ভুল সংশোধন: শুধু 'cart' হবে, কোনো স্ল্যাশ হবে না
                element: <Cart></Cart>
            },
            {
                path: 'Reservation',
                element: <Reservation></Reservation>
            },
            {
                path: "Payment",
                element: <Payment></Payment>,
            },
            {
                path: "PaymentHistory",
                element: <PaymentHistory></PaymentHistory>,
            },
            {
                path: "MyCart",
                element: <MyCart></MyCart>,
            },
            {
                path: "addReview",
                element: <AddReview></AddReview>
            },
            {
                path: "MyBooking",
                element: <MyBooking></MyBooking>
            },

            // --- Admin Routes ---
            // {
            //     path: 'additem',
            //     element: <AdminRoute><Additem /></AdminRoute>
            // },
            // {
            //     path: "AllUser",
            //     element: <AdminRoute>
            //         <AllUser></AllUser>
            //     </AdminRoute>
            // }

            {
                path:"AllUser",
                element:
                    <AllUser></AllUser>
                
            },
            {
                path:"Additem",
                element:
                  <Additem></Additem>
                
            },
            {
                path:"AdminHome",
                element:<AdminHome></AdminHome>
            },
            {
                path:"ManageBooking",
                element:<ManageBooking></ManageBooking>
            }
        ]
    }
]);