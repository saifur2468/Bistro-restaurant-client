
import SectionTittle from '../../../SectionTittle/SectionTittle';
import MenuItem from '../../../Layout/SharedRoute/MenuITEM/MenuItem';
import Usemenu from '../../../Hooks/Usemenu';

const Popularmenu = () => {
  const [menu] = Usemenu(); 
  const popular = menu.filter(item => item.category === 'popular'); 

  return (
    <section className="mb-12">
      <SectionTittle
        heading="--- Check it out ---"
        SubHading="From our menu"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {popular.map(item => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="text-center mt-6">
        <button className="btn btn-outline border-0 border-b-4">
          View All Menu
        </button>
      </div>
    </section>
  );
};

export default Popularmenu;
