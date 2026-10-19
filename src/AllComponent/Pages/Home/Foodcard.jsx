import React from "react";

const recipes = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600&auto=format&fit=crop",
    date: "APRIL 11, 2016",
    category: "HEALTHY",
    title: "ITALIAN FAMOUS PASTA WITH MEAT AND CHEESE",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam perspiciatis unde omnis....",
    comments: "1 COMMENT",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
    date: "APRIL 11, 2016",
    category: "RECIPES",
    title: "CHOCOLATE TRUFFLE CAKE WITH HONEY FLAVOR",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam perspiciatis unde omnis....",
    comments: "2 COMMENTS",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop",
    date: "APRIL 11, 2016",
    category: "RECIPES",
    title: "CHICKEN SOUP WITH SPRING VEGGIES AND PASTA",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam perspiciatis unde omnis....",
    comments: "1 COMMENT",
  },
];

export default function SpecialRecipes() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* ===== Header Section ===== */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-[0.2em] text-neutral-800 mb-4">
            Special Recipes
          </h2>
          <p className="text-xs md:text-sm text-neutral-500 font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto
            doelusmod tempor incdition ulla mco laboris nisi ut aliquip ex ea commo
            condorico consectetur adipiscing elitut aliquip.
          </p>
        </div>

        {/* ===== Recipe Cards Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <article key={recipe.id} className="flex flex-col group cursor-pointer">
              {/* Image Container with Hover Zoom */}
              <div className="overflow-hidden mb-5">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-56 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta info (Date & Category) */}
              <div className="text-[11px] font-medium tracking-[0.15em] text-neutral-400 uppercase mb-2">
                <span>{recipe.date}</span>
                <span className="mx-1.5">/</span>
                <span className="hover:text-neutral-700 transition-colors">
                  {recipe.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold uppercase tracking-wide text-neutral-800 leading-snug mb-3 group-hover:text-amber-600 transition-colors">
                {recipe.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-neutral-500 font-light leading-relaxed mb-4 line-clamp-3">
                {recipe.description}
              </p>

              {/* Comments & Bottom Border */}
              <div className="mt-auto">
                <span className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase font-medium hover:text-neutral-700 transition-colors">
                  {recipe.comments}
                </span>
                <div className="w-8 h-[2px] bg-neutral-800 mt-3 group-hover:w-16 transition-all duration-300"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}