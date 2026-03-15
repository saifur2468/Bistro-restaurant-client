import React from 'react';
import MenuItem from '../../../Layout/SharedRoute/MenuITEM/MenuItem';
import Cover from '../../../Layout/SharedRoute/Cover/Cover';
import { Link } from 'react-router-dom';
const Menucategory = ({items,title,img}) => {
     
    return (

        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
        {items.map(item => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    <Link to='/orderFood'>
    <button className='mx-auto border-2 rounded-xl text-2xl font-serif w-[350px] h-[48px] mb-10 bg-slate-300 text-cyan-500'>order Now </button>
     </Link>
        </div>
    );
};

export default Menucategory;