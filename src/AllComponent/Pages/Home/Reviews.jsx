import React, { useEffect, useState } from 'react';
import SectionTittle from '../../SectionTittle/SectionTittle';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Reviews = () => {
    const [reviews,setreviews] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json())
        .then(data=> setreviews(data))
    },[])
    return (
        <div>
            <section className='mb-20'>
                <SectionTittle
                heading={'---What our Client say---'}
                SubHading={'TESTIMONIALS'}
                ></SectionTittle>



                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {
        reviews.map(review => <SwiperSlide
        key={review._id}
        >
            <div className=' flex  flex-col items-center m-24'>
                <Rating
                style={{maxWidth:100}}
                value={review.rating}
                readOnly
                
                >
                    
                </Rating>
                <p>{review.details}</p>
                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
            </div>
        </SwiperSlide>)
       }
      </Swiper>
            </section>
        </div>
    );
};

export default Reviews;