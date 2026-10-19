import React from 'react';
import { motion } from 'framer-motion';
import catagorey1 from "../../../assets/assets/home/slide1.jpg";
import catagorey2 from "../../../assets/assets/home/slide2.jpg";
import catagorey3 from "../../../assets/assets/home/slide3.jpg";
import catagorey4 from "../../../assets/assets/home/slide4.jpg";
import catagorey5 from "../../../assets/assets/home/slide5.jpg";
import SectionTittle from '../../SectionTittle/SectionTittle';

const categories = [
    { name: "Salads", img: catagorey1 },
    { name: "Soups", img: catagorey2 },
    { name: "Pizzas", img: catagorey3 },
    { name: "Desserts", img: catagorey4 },
    { name: "Drinks", img: catagorey5 },
    { name: "Burgers", img: catagorey1 },
    { name: "Pasta", img: catagorey2 },
    { name: "BBQ Grill", img: catagorey3 },
];

const Category = () => {
    return (
        <section className="py-10">
            <SectionTittle
                SubHading={"From 11:00am to 10:00pm"}
                heading={"Order Online"}
            />

            <div className="my-8 overflow-hidden whitespace-nowrap bg-neutral-50 py-6">
                <motion.div
                    className="flex gap-6"
                    animate={{
                        x: [0, -1200], 
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25, 
                            ease: "linear",
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...categories, ...categories].map((item, index) => (
                        <div 
                            key={index} 
                            className="w-64 h-80 flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                        >
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Dark Gradient Overlay for text visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-6">
                                <h3 className="text-white text-xl font-bold uppercase tracking-widest font-serif drop-shadow-md">
                                    {item.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Category;