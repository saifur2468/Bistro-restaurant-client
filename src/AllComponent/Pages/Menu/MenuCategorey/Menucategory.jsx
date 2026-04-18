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
    <button className="mx-auto block bg-neutral-800 text-black border-b-4 border-orange-500 rounded-xl text-xl font-serif w-[320px] h-[52px] mb-10 hover:bg-neutral-700 hover:border-orange-400 transition-all active:translate-y-1">
    Order Now
</button>
     </Link>
        </div>
    );
};

export default Menucategory;