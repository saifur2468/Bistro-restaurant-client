import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Swiper styles import
import "swiper/css";
import "swiper/css/free-mode";

const offers = [
  { name: "Cheese Croissants", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=400&auto=format&fit=crop" },
  { name: "Bruschetti", img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?q=80&w=400&auto=format&fit=crop" },
  { name: "Awesome Vegetables", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=400&auto=format&fit=crop" },
  { name: "Tasty Snacks", img: "https://images.unsplash.com/photo-1621996346565-e3d5d6283598?q=80&w=400&auto=format&fit=crop" },
  { name: "All-time Best Recipes", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop" },
  { name: "Meal for Whole Family", img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=400&auto=format&fit=crop" },
];

const gallery = [
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop",
];

export default function FoodSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full font-sans text-neutral-800 overflow-hidden">
      {/* ===== Part 1: Today's Best Offer ===== */}
      <div className="bg-white pt-8 pb-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:px-10">
          {/* Left menu */}
          <ul className="flex shrink-0 flex-row flex-wrap gap-x-6 gap-y-3 md:w-64 md:flex-col md:gap-0 md:border-r md:border-neutral-200">
            {offers.map((item, i) => (
              <li key={item.name}>
                <button
                  onClick={() => setActive(i)}
                  className={`block w-full py-3 text-left text-[11px] font-medium uppercase tracking-[0.2em] transition-colors md:-mr-px md:border-r-2 md:py-[13px] ${
                    active === i
                      ? "text-neutral-900 md:border-neutral-900"
                      : "text-neutral-700 hover:text-neutral-900 md:border-transparent"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Right content */}
          <div className="flex flex-1 flex-col-reverse items-start gap-8 lg:flex-row lg:items-center">
            <div className="max-w-md">
              <h2 className="mb-4 text-2xl font-semibold uppercase tracking-[0.12em] text-neutral-800">
                Today’s Best Offer
              </h2>
              <p className="mb-5 text-[15px] font-light leading-7 text-neutral-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="text-[13px] leading-6 text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non.
              </p>
            </div>

            <img
              src={offers[active].img}
              alt={offers[active].name}
              className="h-44 w-44 rounded-xl object-cover drop-shadow-xl lg:ml-auto lg:h-52 lg:w-52 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* ===== Image Gallery Swiper Slider ===== */}
      <div className="bg-white py-2">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={6}
          slidesPerView={1.5}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {gallery.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Food ${i + 1}`}
                className="h-64 w-full object-cover md:h-80 lg:h-[376px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== Part 2: Our Chef ===== */}
      <div className="overflow-hidden bg-neutral-200/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 pt-16 md:flex-row md:px-10 md:pt-0">
          <div className="max-w-xl md:w-1/2 md:py-24">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-neutral-800">
              Tasty and Crunchy
            </p>
            <h2 className="mb-6 text-4xl font-semibold uppercase tracking-[0.18em] text-neutral-800">
              Our Chef
            </h2>
            <p className="mb-9 text-[15px] font-light leading-7 text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ullamco laboris nisi ut aliquip ex ea
              commodo condor consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ullam.
            </p>
            <a
              href="#menu"
              className="inline-block bg-white px-10 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-800 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              View our menu
            </a>
          </div>

          <div className="flex justify-center self-end md:w-1/2 md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop"
              alt="Our chef"
              className="h-96 w-auto object-contain object-bottom md:h-[440px] md:mr-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}