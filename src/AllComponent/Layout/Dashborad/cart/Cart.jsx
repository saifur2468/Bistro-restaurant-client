
import UseCart from '../../../Hooks/UseCart';
import { FaTrash } from 'react-icons/fa';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cart, refetch] = UseCart();

 
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
 const axiosSecure = UseAxiosSecure();
    const handledelete = id =>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
  

axiosSecure.delete(`/cart/${id}`)
.then(res =>{
    if(res.data.deleteCount > 0){
        refetch()
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    }
})



  }
});
    }

    return (
        <div>
            <div className='flex justify-evenly my-4'>
                <h2 className='text-xl'>Items: {cart.length}</h2>
                <h2 className='text-xl'>Total Price:{totalPrice}</h2>
                <button className='btn btn-primary'>Pay</button>
                
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button 
                                    onClick={() => handledelete(item._id)}
                                        className="btn btn-ghost btn-xl text-red-500"
                                        
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
