import React, { useContext } from "react";
import loginimg from "../../../assets/assets/others/authentication1.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
 const axiosPublic = UseAxiosPublic();
  // 🔹 Handle Form Submit
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const userInfo ={
          name : data.name,
          email: data.email
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log('user add database')
             Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: "Your account has been created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
          }
        })
        const newUser = result.user;
        console.log("New user created:", newUser);

        Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: "Your account has been created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Signup Failed!",
          text: error.message,
        });
      });
  };

  // 🔹 Google SignUp
  const handleGoogleLogin = () => {
  // const axiosPublic = UseAxiosPublic();
    googleSignIn()
      .then((result) => {
        const userInfo ={
          email:result.user?.email,
          name:result.user?.displayName
        }
       axiosPublic.post('/users', userInfo)

        .then(res =>{
          console.log(res.data);
        })
        const user = result.user;
        console.log("Google User:", user);
        Swal.fire({
          icon: "success",
          title: "Signed Up with Google!",
          text: `Welcome ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Google Signup Failed!",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      {/* 🔹 Main Container */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10 bg-white shadow-2xl rounded-2xl p-10 w-[90%] max-w-5xl">

        {/* 🔹 Right Side Image */}
        <div className="text-center lg:text-left">
          <img src={loginimg} alt="signup" className="w-[400px]" />
        </div>

        {/* 🔹 Left Side Form */}
        <div className="card bg-base-100 shadow-xl w-full max-w-sm p-8">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Create your account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter your Name"
                className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                placeholder="Enter your password"
                className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm">Minimum 6 characters required</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-500 text-sm">Maximum 20 characters only</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200"
            >
              Sign Up
            </button>

            <p className="text-sm text-center text-gray-500 mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Login
              </Link>
            </p>
          </form>

          {/* Divider */}
          <div className="divider text-gray-500 my-5">OR</div>

          {/* 🔹 Social Login Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleGoogleLogin}
              className="btn w-full flex items-center justify-center gap-2 bg-white text-gray-700 border hover:bg-gray-100"
            >
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
