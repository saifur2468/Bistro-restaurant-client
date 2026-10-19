import React from "react";
import { Link } from "react-router-dom";

const mainMeals = [
  {
    id: 1,
    name: "MUSSELS SOUP",
    price: "$ 23.00",
    description: "Lorem ipsum dolor sit amet, feugiat delicata.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=150&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    id: 2,
    name: "SICILIAN MEATBALLS",
    price: "$ 25.00",
    description: "Lorem ipsum dolor sit amet, feugiat delicata.",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=150&auto=format&fit=crop",
    isSpecial: true,
  },
  {
    id: 3,
    name: "ITALIAN SPAGHETTI",
    price: "$ 12.00",
    description: "Lorem ipsum dolor sit amet, feugiat delicata.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=150&auto=format&fit=crop",
    isSpecial: true,
  },
  {
    id: 4,
    name: "SEAFOOD SALAD",
    price: "$ 17.00",
    description: "Lorem ipsum dolor sit amet, feugiat delicata.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=150&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    id: 5,
    name: "BEEF BURGER",
    price: "$ 10.00",
    description: "Lorem ipsum dolor sit amet, feugiat delicata.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=150&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    id: 6,
    name: "ROAST CHICKEN",
    price: "$ 22.00",
    description: "Lorem ipsum dolor sit amet, feugiat delicata.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=150&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    id: 7,
    name: "STUFFED STRAWBERRY",
    price: "$ 15.00",
    description: "Lorem ipsum dolor sit amet, feugiat delicata.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=150&auto=format&fit=crop",
    isSpecial: false,
  },
  {
    id: 8,
    name: "GRILLED FISH",
    price: "$ 36.00",
    description: "Lorem ipsum dolor sit amet, feugiat delicata.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=150&auto=format&fit=crop",
    isSpecial: true,
  },
];

export default function MainMeals() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* ===== Section Header ===== */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-400 uppercase mb-2">
            TASTY AND CRUNCHY
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 tracking-wide mb-4">
            Our Main Meals
          </h2>
          <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto
            doelusmod tempor incdition ulla mco laboris nisi ut aliquip ex ea commo
            condorico consectetur adipiscing elitut aliquip.
          </p>
        </div>

        {/* ===== Menu Items Grid ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          {mainMeals.map((item) => (
            <div key={item.id} className="flex items-center gap-4 group">
              {/* Food Image */}
              <div className="w-14 h-14 shrink-0 rounded-full overflow-hidden p-0.5 border border-dashed border-neutral-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Item Content & Price */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  {/* Name + Special Star */}
                  <div className="flex items-center gap-1.5 min-w-0">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-800 truncate">
                      {item.name}
                    </h3>
                    {item.isSpecial && (
                      <span className="text-[10px] text-neutral-800">★</span>
                    )}
                  </div>

                  {/* Dotted Line Leader */}
                  <div className="flex-1 border-b border-dotted border-neutral-300 mx-2 hidden sm:block"></div>

                  {/* Price */}
                  <span className="text-xs font-medium text-neutral-800 shrink-0">
                    {item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-400 font-light truncate">
                  {item.description}
                </p>
              </div>
            
            </div>
            
          ))}
        </div>
   <div className="flex justify-center items-center my-6">
  <Link to='/menu' >
  <button className="px-6 py-3 border-2 border-amber-600 rounded-xl text-center font-semibold text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-sm">
    View all Menu
  </button>
  </Link>
</div>
      </div>
    </section>
  );
}