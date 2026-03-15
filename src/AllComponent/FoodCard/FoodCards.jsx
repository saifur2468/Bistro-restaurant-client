
import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import UseCart from "../Hooks/UseCart";


const FoodCards = ({ item }) => {
  const { image, name, price, recipe,_id } = item;
  const {user} = UseAuth();
  const navigate = useNavigate();
const axiosSecure = UseAxiosSecure();
const [,refetch] = UseCart();
  const handlecart = () =>{
if(user && user.email){
 
  const cartItem = {
    menu: _id,
    email:user.email,
    name,
    image,
    price
}
axiosSecure.post('/cart',cartItem)
.then(res => {
  console.log(res.data)
  if(res.data.insertedId){
    Swal.fire({
  position: "top-end",
  icon: "success",
  title:`${name} added to your cart` ,
  showConfirmButton: false,
  timer: 1500
});
//  reteact to the add cart count 
 refetch()
  }
})
}
else{
  Swal.fire({
  title: "you are not login ",
  text: "You won't be Add to cart plz Login first!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, login it!"
}).then((result) => {
  if (result.isConfirmed) {
  //  send the user to the login page 
  navigate('/login')
  }
});

}
  }
  return (
    <div className="flex justify-center mb-10">
      <div className="card bg-white shadow-lg rounded-xl w-80 md:w-96 transition-transform hover:scale-105">
        {/* Image */}
        <figure className="overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover"
          />
        </figure>

        {/* Card Content */}
        <div className="p-5 text-center">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
          <p className="text-gray-500 mb-4">{recipe}</p>
          <p className="text-lg font-semibold mb-4">${price}</p>

          {/* Button */}
          <button onClick={ handlecart}
           className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
