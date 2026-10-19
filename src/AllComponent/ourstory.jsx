import React from 'react';

const OurStory = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white text-center">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto mb-12">
        <p className="text-xs md:text-sm font-medium tracking-widest text-amber-600 uppercase mb-2">
          Tasty And Crunchy
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 tracking-wide uppercase mb-4">
          Our Story
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. sedolorm reminusto 
          doelusmod tempor incdition ulla mco laboris nisi ut aliquip ex ea commo 
          condorico consectetur adipiscing elitut aliquip.
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Image: Kitchen / Chef */}
        <div className="overflow-hidden rounded-lg shadow-md group">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop" 
            alt="Restaurant Kitchen" 
            className="w-full h-[300px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Image: Food / Pancakes */}
        <div className="overflow-hidden rounded-lg shadow-md group">
          <img 
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000&auto=format&fit=crop" 
            alt="Delicious Pancakes" 
            className="w-full h-[300px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;