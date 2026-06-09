import React from "react";
import SectionTittle from "../../SectionTittle/SectionTittle";
import card1 from "../../../assets/assets/home/slide3.jpg";
import card2 from "../../../assets/assets/home/slide4.jpg";
import card3 from "../../../assets/assets/home/slide5.jpg";

const Foodcard = () => {
  const foods = [
    {
      id: 1,
      image: card1,
      title: "Caeser Salad",
      description:
        "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
    {
      id: 2,
      image: card2,
      title: "Caeser Salad",
      description:
        "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
    {
      id: 3,
      image: card3,
      title: "Caeser Salad",
      description:
        "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
  ];

  return (
    <section className="mb-10 px-4 md:px-8 lg:px-10">
      <SectionTittle
        heading={"should try"}
        SubHading={"CHEF RECOMMENDS"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {foods.map((food) => (
          <div
            key={food.id}
            className="card bg-base-100 w-full shadow-xl"
          >
            <figure className="p-4 md:p-6">
              <img
                src={food.image}
                alt={food.title}
                className="rounded-xl w-full h-56 md:h-72 object-cover"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">{food.title}</h2>

              <p className="text-sm md:text-base">
                {food.description}
              </p>

              <div className="card-actions mt-4">
                <button className="btn btn-primary">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Foodcard;