import React from 'react';
import errorpage from '../../../assets/assets/others/Error sdjf.JPG'
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div>
            <section className='w-[1200px] h-[680px]  rounded-xl mx-auto mt-5'>
                <img src={errorpage} className='w-[750px] h-[562px] mx-auto' />
                <Link to="/">
                    <button className="w-[220px] h-[56px] border-2 rounded-xl bg-orange-700 text-xl text-white font-semibold flex items-center justify-center gap-2 mx-auto">
                        Back To Home <IoHomeOutline />
                    </button>
                </Link>

            </section>
        </div>
    );
};

export default Error;