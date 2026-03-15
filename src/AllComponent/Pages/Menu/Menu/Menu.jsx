import React from 'react';
import Cover from '../../../Layout/SharedRoute/Cover/Cover';
import menuimg from '../../../../assets/assets/menu/banner3.jpg'
import dessertImg from '../../../../assets/assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../../../assets/assets/menu/pizza-bg.jpg'
import soupimg from '../../../../assets/assets/menu/soup-bg.jpg'
import saladimg from '../../../../assets/assets/menu/salad-bg.jpg'
import Usemenu from '../../../Hooks/Usemenu';
import SectionTittle from '../../../SectionTittle/SectionTittle';
import Menucategory from '../MenuCategorey/Menucategory';

const Menu = () => {
    const [menu] = Usemenu();
      const salad = menu.filter(item => item.category === 'salad'); 
        const dessert = menu.filter(item => item.category === 'dessert'); 
          const pizza = menu.filter(item => item.category === 'pizza'); 
            const soup = menu.filter(item => item.category === 'soup'); 
              const offered = menu.filter(item => item.category === 'offered'); 
    return (
        <div>
        
            <Cover img={menuimg} title="Our Menu">   </Cover>
            <SectionTittle SubHading={'Dont miss'} heading={'TODAYS OFFER'}></SectionTittle>
            <Menucategory items={offered}></Menucategory>
            
             <Menucategory items={dessert} title="Dessert" img={dessertImg}></Menucategory>
             <Menucategory items={pizza} title="Pizza" img={pizzaimg}></Menucategory>
              <Menucategory items={salad} title=" salad" img={saladimg}></Menucategory>
            <Menucategory items={soup} title="soup" img={soupimg}></Menucategory>
            
        </div>
    );
};

export default Menu;