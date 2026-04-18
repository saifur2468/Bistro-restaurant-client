import React from 'react';
import { motion } from 'framer-motion';
import catagorey1 from "../../../assets/assets/home/slide1.jpg";
import catagorey2 from "../../../assets/assets/home/slide2.jpg";
import catagorey3 from "../../../assets/assets/home/slide3.jpg";
import catagorey4 from "../../../assets/assets/home/slide4.jpg";
import catagorey5 from "../../../assets/assets/home/slide5.jpg";
import SectionTittle from '../../SectionTittle/SectionTittle';

const Category = () => {
    const images = [catagorey1, catagorey2, catagorey3, catagorey4, catagorey5, catagorey1, catagorey2, catagorey3];

    return (
        <section>
            <SectionTittle
                SubHading={"order online "}
                heading={"from 11.00am to 10.00pm"}
            />

            <div className="my-8 overflow-hidden whitespace-nowrap bg-gray-100 py-4">
                <motion.div
                    className="flex gap-10"
                    animate={{
                        x: [0, -1000], // এখানে আপনার কন্টেন্ট অনুযায়ী ভ্যালু সেট করুন
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20, // স্পিড কমানো বা বাড়ানোর জন্য এটি পরিবর্তন করুন
                            ease: "linear",
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* একই ইমেজ দুইবার রেন্ডার করা হয়েছে যাতে লুপটি স্মুথ হয় */}
                    {[...images, ...images].map((img, index) => (
                        <div key={index} className="w-64 h-80 flex-shrink-0">
                            <img 
                                src={img} 
                                alt={`category-${index}`} 
                                className="w-full h-full object-cover rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Category;