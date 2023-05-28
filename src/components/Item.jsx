import { data } from "../data/Data.js";
import { useState } from "react";

export const Item = () => {
  const [items, setItems] = useState(data);

  /* category filtering function */

  const filterCategory = (category) => {
    setItems(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  /* price filtering function */

  const filterPrice = (price) => {
    setItems(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-[#ff7b00] font-bold text-4xl text-center">
        Available Food Items
      </h1>
      {/* row filter */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* type filter */}
        <div>
          <p className="font-bold text-gray-800">Filter Type</p>
          <div className="flex justify-start flex-wrap max-w-[600px]">
            <button
              onClick={() => setItems(data)}
              className="m-1 border-[#ff7600] text-[#ff7600] hover:bg-[#ff7600] hover:text-white"
            >
              All
            </button>

            <button
              onClick={() => filterCategory("Biryani")}
              className="m-1 border-[#ff7600] text-[#ff7600] hover:bg-[#ff7600] hover:text-white"
            >
              Biryani
            </button>

            <button
              onClick={() => filterCategory("Chicken Wings")}
              className="m-1 border-[#ff7600] text-[#ff7600] hover:bg-[#ff7600] hover:text-white"
            >
              Chicken Wings
            </button>

            <button
              onClick={() => filterCategory("Burgers")}
              className="m-1 border-[#ff7600] text-[#ff7600] hover:bg-[#ff7600] hover:text-white"
            >
              Burgers
            </button>

            <button
              onClick={() => filterCategory("Pizza")}
              className="m-1 border-[#ff7600] text-[#ff7600] hover:bg-[#ff7600] hover:text-white"
            >
              Pizza
            </button>
          </div>
        </div>
        {/* price filter */}
        <div>
          <p className="font-bold text-gray-800">Filter Price</p>
          <div className="flex justify-start max-w-[300px] w-full">
            <button
              onClick={() => filterPrice("৳")}
              className="m-1  border-[#ff7600] text-[#ff7600] hover:bg-[#ff7600] hover:text-white"
            >
              ৳
            </button>
            <button
              onClick={() => filterPrice("৳৳")}
              className="m-1 border-[#ff7600] text-[#ff7600] hover:bg-[#ff7600] hover:text-white"
            >
              ৳৳
            </button>
            <button
              onClick={() => filterPrice("৳৳৳")}
              className="m-1 border-[#ff7600] text-[#ff7600] hover:bg-[#ff7600] hover:text-white"
            >
              ৳৳৳
            </button>
          </div>
        </div>
      </div>

      {/* items */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg  hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between p-4 flex-col md:flex md:flex-row">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-[#ff7600] text-white p-1 rounded-lg ">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
