import React from 'react';
import SectionTittle from '../../SectionTittle/SectionTittle';
import card1 from '../../../assets/assets/home/slide3.jpg'
import card2 from '../../../assets/assets/home/slide4.jpg'
import card3 from '../../../assets/assets/home/slide5.jpg'
const Foodcard = () => {
    return (
        <div>
            <section className='mb-10'>
                <SectionTittle
                    heading={'should try'}
                    SubHading={'CHEF RECOMMENDS'}
                ></SectionTittle>

                <div className='flex m-auto gap-5 ml-14'>
                    {/* card 1 */}
                    <div className="card bg-base-100 w-[424px] h-[541px] shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={card1}
                                alt="Shoes"
                                className="rounded-xl w-[424px] h-[300px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Add To Cart </button>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="card bg-base-100 w-[424px] h-[541px] shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={card2}
                                alt="Shoes"
                                className="rounded-xl w-[424px] h-[300px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Add To Cart </button>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="card bg-base-100 w-[424px] h-[541px] shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={card3}
                                alt="Shoes"
                                className="rounded-xl w-[424px] h-[300px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Caeser Salad</h2>
                            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Add To Cart </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Foodcard;