const MenuItem = ({ item }) => {
    const { image, name, price, recipe } = item;
    
    return (
        <div className="flex items-start gap-4 p-2 group cursor-pointer hover:bg-slate-50 transition-all rounded-lg">
            {/* Image with unique border radius and shadow */}
            <img 
                style={{ borderRadius: '0 200px 200px 200px' }} 
                className="w-[100px] h-[100px] object-cover shadow-md group-hover:scale-105 transition-transform" 
                src={image} 
                alt={name} 
            />
            
            <div className="flex-1">
                {/* Title and Price Row */}
                <div className="flex justify-between items-baseline gap-2">
                    <h3 className="uppercase font-serif text-lg font-medium text-slate-800 tracking-wider">
                        {name}
                        <span className="ml-2 opacity-20 hidden sm:inline-block"></span>
                    </h3>
                    <p className="text-yellow-600 font-bold text-lg">${price}</p>
                </div>
                
                {/* Recipe/Description */}
                <p className="text-slate-500 text-sm mt-1 leading-relaxed italic">
                    {recipe}
                </p>
            </div>
        </div>
    );
};

export default MenuItem;