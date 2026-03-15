import React from "react";
import backgroundImg from "../../../assets/assets/home/chef-service.jpg"; 

const BistroSection = () => {
  return (
    <section className="relative w-full m-auto h-[500px] flex items-center justify-center bg-gray-100">
      {/* Background Image */}
      <img
        src={backgroundImg}
        alt="Bistro"
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay Card */}
      <div className="relative bg-white p-8 md:p-16 shadow-lg max-w-2xl text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-4">Bistro Boss</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Necessitatibus, libero accusamus laborum deserunt ratione 
          dolor officiis praesentium! Deserunt magni aperiam dolor eius 
          dolore at, nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </section>
  );
};

export default BistroSection;
