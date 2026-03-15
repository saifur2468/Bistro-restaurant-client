import React from 'react';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Additem = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: data.image 
        };

        const menuRes = await axiosSecure.post('/menu', menuItem);
        if (menuRes.data.insertedId) {
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} added to the menu.`,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <div className="p-10 bg-gray-50 min-h-screen">
            <h2 className="text-4xl text-center font-bold mb-10 uppercase">Add An Item</h2>
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-6">
                        <label className="label font-semibold">Recipe Name*</label>
                        <input {...register("name", { required: true })} type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6 mb-6">
                        <div className="form-control w-full">
                            <label className="label font-semibold">Category*</label>
                            <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-semibold">Price*</label>
                            <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control mb-6">
                        <label className="label font-semibold">Recipe Details</label>
                        <textarea {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Details"></textarea>
                    </div>
                    <div className="form-control mb-6">
                        <label className="label font-semibold">Item Image URL*</label>
                        <input {...register("image", { required: true })} type="text" placeholder="Image URL" className="input input-bordered w-full" />
                    </div>
                    <button className="btn bg-[#D1A054] text-white">Add Item</button>
                </form>
            </div>
        </div>
    );
};

export default Additem;