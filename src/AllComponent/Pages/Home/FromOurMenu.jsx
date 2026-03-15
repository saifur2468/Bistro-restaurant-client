import React from "react";
import fetimg from '../../../assets/assets/home/featured.jpg';
const FromOurMenu = () => {
  return (
    <section
     className="relative bg-cover bg-center bg-no-repeat text-white py-20 px-4 md:px-10 mb-10"
      style={{
        backgroundImage: `url(${fetimg})`, 
      }}
      
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Image */}
        <img
          src={fetimg}
          alt="Food"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        {/* Right Text */}
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-yellow-400 italic text-center md:text-left">
            --- Check it out ---
          </h3>
          <h2 className="text-3xl font-bold uppercase tracking-wide text-center md:text-left">
            From Our Menu
          </h2>
          <p className="text-gray-200 text-sm leading-relaxed">
            March 20, 2023
          </p>
          <h3 className="text-xl font-semibold">
            WHERE CAN I GET SOME?
          </h3>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis maxime tenetur.
          </p>
          <button className="mt-4 border-b-2 border-white hover:border-yellow-400 transition duration-300 uppercase">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FromOurMenu;
