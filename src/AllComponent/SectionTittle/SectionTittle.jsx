import React from 'react';

const SectionTittle = ({heading,SubHading}) => {
    return (
        <div  className=' mx-auto text-center md:w-4/12 my-8'>
            <p className=' text-yellow-600'>---{heading}---</p>
            <h1 className='text-4xl uppercase border-y-4 py-4'>{SubHading}</h1>
        </div>
    );
};

export default SectionTittle;