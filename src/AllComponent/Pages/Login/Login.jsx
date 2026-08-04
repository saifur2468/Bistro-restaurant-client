// import React, { useContext, useEffect, useRef, useState } from "react";
// import loginimg from "../../../assets/assets/others/authentication1.png";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub, FaFacebook } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
// import { AuthContext } from "../../Firebase/Provider/AuthProvider";
// import Swal from "sweetalert2";

// const Login = () => {
//   const captchaRef = useRef(null);
//   const [disabled, setDisabled] = useState(true);
//   const navigate = useNavigate();

//   const { SignIn, googleSignIn } = useContext(AuthContext);

//   // 🔹 Load Captcha when component mounts
//   useEffect(() => {
//     loadCaptchaEnginge(6);
//   }, []);

//   // 🔹 Handle Email/Password Login
//   const handleLogin = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     SignIn(email, password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         Swal.fire({
//           icon: "success",
//           title: "Login Successful!",
//           text: `Welcome ${user.displayName || "User"}`,
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error(error);
//         Swal.fire({
//           icon: "error",
//           title: "Login Failed!",
//           text: error.message,
//         });
//       });
//   };

//   // 🔹 Validate Captcha
//   const handleValidateCaptcha = () => {
//     const userCaptchaValue = captchaRef.current.value;
//     if (validateCaptcha(userCaptchaValue)) {
//       Swal.fire({
//         icon: "success",
//         title: "Captcha Validated!",
//         timer: 1000,
//         showConfirmButton: false,
//       });
//       setDisabled(false);
//     } else {
//       Swal.fire({
//         icon: "error",
//         title: "Captcha Incorrect!",
//         text: "Please try again.",
//       });
//       setDisabled(true);
//     }
//   };

//   // 🔹 Google Login Handler
//   const handleGoogleLogin = () => {
//     googleSignIn()
//       .then((result) => {
//         const user = result.user;
//         console.log("Google User:", user);
//         Swal.fire({
//           icon: "success",
//           title: "Login Successful!",
//           text: `Welcome ${user.displayName}`,
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         navigate("/");
//       })
//       .catch((error) => {
//         console.error(error);
//         Swal.fire({
//           icon: "error",
//           title: "Google Login Failed!",
//           text: error.message,
//         });
//       });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center  ">
//       <div className="flex flex-col lg:flex-row items-center gap-10 bg-white shadow-2xl rounded-2xl p-10 w-[90%] max-w-5xl">

//         {/* 🔹 Left Side Image */}
//         <div className="text-center lg:text-left max-w-md">
//           <img src={loginimg} alt="login" className="w-[400px]" />
//         </div>

//         {/* 🔹 Login Form */}
//         <div className="card bg-base-100 shadow-xl w-full max-w-sm p-8">
//           <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
//             Login to your account
//           </h2>

//           <form onSubmit={handleLogin} className="space-y-5">
//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
//                 required
//               />
//               <div className="text-right mt-1">
//                 <a href="#" className="text-sm text-indigo-600 hover:underline">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             {/* Captcha */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">Captcha</label>
//               <LoadCanvasTemplate />
//               <input
//                 type="text"
//                 ref={captchaRef}
//                 name="captcha"
//                 placeholder="Type the captcha above"
//                 className="input input-bordered w-full mt-2"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={handleValidateCaptcha}
//                 className="btn btn-outline mt-3 w-full"
//               >
//                 Validate Captcha
//               </button>
//             </div>

//             {/* Submit Button */}
//             <button
//               disabled={disabled}
//               type="submit"
//               className="btn w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200"
//             >
//               Login
//             </button>

//             <p className="text-sm text-center text-gray-500 mt-4">
//               Don’t have an account?{" "}
//               <Link to="/signUp" className="text-indigo-600 hover:underline">
//                 Sign up
//               </Link>
//             </p>
//           </form>

//           {/* Divider */}
//           <div className="divider text-gray-500 my-5">OR</div>

//           {/* 🔹 Social Login Buttons */}
//           <div className="flex flex-col gap-3">
//             <button
//               onClick={handleGoogleLogin}
//               className="btn w-full flex items-center justify-center gap-2 bg-white text-gray-700 border hover:bg-gray-100"
//             >
//               <FcGoogle className="text-2xl" />
//               Continue with Google
//             </button>

//             {/* <button
//               className="btn w-full flex items-center justify-center gap-2 bg-white text-gray-700 border hover:bg-gray-100"
//             >
//               <FaGithub className="text-lg" />
//               Continue with GitHub
//             </button> */}

//             {/* <button
//               className="btn w-full flex items-center justify-center gap-2 bg-white text-gray-700 border hover:bg-gray-100"
//             >
//               <FaFacebook className="text-blue-600 text-lg" />
//               Continue with Facebook
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;










import React, { useContext, useEffect, useRef, useState } from "react";
import loginimg from "../../../assets/assets/others/authentication1.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

import { AuthContext } from "../../Firebase/Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  const { SignIn, googleSignIn } = useContext(AuthContext);

  // ============================
  // ADMIN EMAIL
  // ============================
  const ADMIN_EMAIL = "bistrobossadmin@gmail.com";

  // ============================
  // Load Captcha
  // ============================
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // ============================
  // Email + Password Login
  // ============================
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    SignIn(email, password)
      .then((result) => {
        const user = result.user;

        console.log("Logged in user:", user);

        // ============================
        // Admin Login
        // ============================
        if (user.email === ADMIN_EMAIL) {
          Swal.fire({
            icon: "success",
            title: "Admin Login Successful!",
            text: "Welcome to Admin Dashboard",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/dashboard/AdminHome");
          return;
        }

        // ============================
        // Normal User Login
        // ============================
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: `Welcome ${user.displayName || "User"}`,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((error) => {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: error.message,
        });
      });
  };

  // ============================
  // Validate Captcha
  // ============================
  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchaRef.current.value;

    if (validateCaptcha(userCaptchaValue)) {
      Swal.fire({
        icon: "success",
        title: "Captcha Validated!",
        timer: 1000,
        showConfirmButton: false,
      });

      setDisabled(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Captcha Incorrect!",
        text: "Please try again.",
      });

      setDisabled(true);
    }
  };

  // ============================
  // Google Login
  // ============================
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        console.log("Google User:", user);

        // ============================
        // Block Admin Google Login
        // ============================
        if (user.email === ADMIN_EMAIL) {
          Swal.fire({
            icon: "error",
            title: "Access Denied!",
            text: "Admin must login using Email and Password.",
          });

          return;
        }

        // ============================
        // Normal Google User
        // ============================
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: `Welcome ${user.displayName || "User"}`,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/");
      })
      .catch((error) => {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Google Login Failed!",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">

        {/* ============================
            Left Side Image
        ============================ */}
        <div className="text-center lg:text-left max-w-md">
          <img
            src={loginimg}
            alt="login"
            className="w-[400px] mx-auto"
          />
        </div>

        {/* ============================
            Login Form
        ============================ */}
        <div className="card bg-base-100 shadow-xl w-full max-w-sm p-8">

          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Login to your account
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* ============================
                Email
            ============================ */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>

            {/* ============================
                Password
            ============================ */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full focus:ring-2 focus:ring-indigo-400"
                required
              />

              <div className="text-right mt-1">
                <a
                  href="#"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            {/* ============================
                Captcha
            ============================ */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Captcha
              </label>

              <LoadCanvasTemplate />

              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Type the captcha above"
                className="input input-bordered w-full mt-2"
                required
              />

              <button
                type="button"
                onClick={handleValidateCaptcha}
                className="btn btn-outline mt-3 w-full"
              >
                Validate Captcha
              </button>
            </div>

            {/* ============================
                Login Button
            ============================ */}
            <button
              disabled={disabled}
              type="submit"
              className="btn w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200"
            >
              Login
            </button>

            {/* ============================
                Sign Up
            ============================ */}
            <p className="text-sm text-center text-gray-500 mt-4">
              Don’t have an account?{" "}

              <Link
                to="/signUp"
                className="text-indigo-600 hover:underline"
              >
                Sign up
              </Link>
            </p>

          </form>

          {/* ============================
              Divider
          ============================ */}
          <div className="divider text-gray-500 my-5">
            OR
          </div>

          {/* ============================
              Google Login
          ============================ */}
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

export default Login;