// import React, { useState } from 'react';
// import Cover from '../../../Layout/SharedRoute/Cover/Cover';
// import coverimg from '../../../../assets/assets/shop/banner2.jpg';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import Usemenu from '../../../Hooks/Usemenu';
// import OrderTab from './orderTtab/OrderTab';

// const OrderFood = () => {
//     const [tabIndex, setTabIndex] = useState(0);
//     const [menu] = Usemenu();

//     const salad = menu.filter(item => item.category === 'salad');
//     const dessert = menu.filter(item => item.category === 'dessert');
//     const pizza = menu.filter(item => item.category === 'pizza');
//     const soup = menu.filter(item => item.category === 'soup');
//     const drinks = menu.filter(item => item.category === 'drinks');

//     return (
//         <div>
//             <Cover img={coverimg} title="Order Food" />

//             <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//                 <TabList>
//                     <Tab>Salad</Tab>
//                     <Tab>Pizza</Tab>
//                     <Tab>Soup</Tab>
//                     <Tab>Dessert</Tab>
//                     <Tab>Drinks</Tab>
//                 </TabList>

//                 <TabPanel><OrderTab items={salad} /></TabPanel>
//                 <TabPanel><OrderTab items={pizza} /></TabPanel>
//                 <TabPanel><OrderTab items={soup} /></TabPanel>
//                 <TabPanel><OrderTab items={dessert} /></TabPanel>
//                 <TabPanel><OrderTab items={drinks} /></TabPanel>
//             </Tabs>
//         </div>
//     );
// };

// export default OrderFood;
























import React, { useState } from "react";
import Cover from '../../../Layout/SharedRoute/Cover/Cover';
import coverimg from '../../../../assets/assets/shop/banner2.jpg';
import OrderTab from './orderTtab/OrderTab';
import Usemenu from '../../../Hooks/Usemenu'; 

const OrderFood = () => {
  const [activeTab, setActiveTab] = useState("Salad");
  const [menu] = Usemenu(); 

  const tabs = ["Salad", "Pizza", "Soup", "Dessert", "Drinks"];

  const tabContent = {
    Salad: menu.filter(item => item.category === "salad"),
    Pizza: menu.filter(item => item.category === "pizza"),
    Soup: menu.filter(item => item.category === "soup"),
    Dessert: menu.filter(item => item.category === "dessert"),
    Drinks: menu.filter(item => item.category === "drinks"),
  };

  return (
    <div>
      <Cover img={coverimg} title="Order Food" />

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 my-5">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded font-semibold ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 border rounded bg-gray-50">
        <OrderTab items={tabContent[activeTab]} />
      </div>
    </div>
  );
};

export default OrderFood;
