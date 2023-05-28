import { categories } from "../data/Data";

export const Category = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12 m-auto">
      <h1 className="text-[#ff891a] font-bold text-4xl text-center">
        Popular Picks
      </h1>
      {/* category */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 py-4">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg flex justify-between items-center p-4 flex-col md:flex-row"
          >
            <h2 className="font-bold text-xl text-center"> {item.name}</h2>
            <img src={item.image} alt={item.name} className="w-16 mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
};
