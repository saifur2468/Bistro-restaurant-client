import React from 'react';
import FoodCards from '../../../../FoodCard/FoodCards';

const OrderTab = ({items}) => {
    return (
        <div>
              <div className='grid md:grid-cols-3 gap-10'>
                                   {
                items.map(item => <FoodCards
                    key={item._id}
                         item={item}
                                    
                      ></FoodCards>)
                                }
                             </div>
        </div>
    );
};

export default OrderTab;