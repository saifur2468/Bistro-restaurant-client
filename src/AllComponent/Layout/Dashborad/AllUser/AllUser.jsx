// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
// import { FaTrash, FaUser } from "react-icons/fa";
// import Swal from "sweetalert2";

// const AllUser = () => {

//  const axiosSecure = useAxiosSecure();
//  const {data:users = [],refetch} = useQuery({
//     queryKey: ['users'],
//     queryFn: async () =>{
//         const res = await axiosSecure.get('/users');
//         return res.data;
//     }
//  })
// const handleMakeAdmin = (id) => {
//         axiosSecure.patch(`/users/admin/${id}`)
//             .then(res => {
//                 console.log(res.data);
//                 if (res.data.modifiedCount > 0) {
//                     Swal.fire({
//                         position: "top-end",
//                         icon: "success",
//                         title: "User is an Admin now!",
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                     refetch(); 
//                 }
//             })
//             .catch(err => {
//                 console.error("Error making admin:", err);
//                 Swal.fire("Error!", "Something went wrong.", "error");
//             });
//     };

  
//     const handleDeleteUser = (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 axiosSecure.delete(`/users/${id}`)
//                     .then(res => {
//                         console.log(res.data);
//                         if (res.data.deletedCount > 0) {
//                             refetch();
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "User has been deleted.",
//                                 icon: "success"
//                             });
//                         }
//                     })
//                     .catch(err => {
//                         console.error("Error deleting user:", err);
//                         Swal.fire("Error!", "Something went wrong.", "error");
//                     });
//             }
//         });
//     };

//     return (
//         <div className="px-6">
//             <div className="flex justify-between items-center my-6 text-xl font-semibold">
//                 <h2>All Users</h2>
//                 <h2>Total Users: {users.length}</h2>
//             </div>

//             <div className="overflow-x-auto">
//                 <table className="table w-full">
//                     <thead className="bg-gray-100">
//                         <tr>
//                             <th>#</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Role</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={user._id}>
//                                 <td>{index + 1}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>
//                                     {user.role === 'admin' ? (
//                                         <span className="text-green-600 font-semibold">Admin</span>
//                                     ) : (
//                                         <button
//                                             onClick={() => handleMakeAdmin(user._id)}
//                                             className="btn btn-ghost text-blue-600 text-xl"
//                                             title="Make Admin"
//                                         >
//                                             <FaUser />
//                                         </button>
//                                     )}
//                                 </td>
//                                 <td>
//                                     <button
//                                         onClick={() => handleDeleteUser(user._id)}
//                                         className="btn btn-ghost text-red-500 text-xl"
//                                         title="Delete User"
//                                     >
//                                         <FaTrash />
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default AllUser;
