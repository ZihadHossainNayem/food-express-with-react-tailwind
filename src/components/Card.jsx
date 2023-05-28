export const Card = ({ rating, name, image }) => {
  return (
    <div className="rounded-lg relative overflow-hidden hover:scale-110 duration-300">
      {/* text overlay */}
      <div className="absolute w-full h-full rounded-lg bg-black/60 text-white">
        <p className="font-bold  text-2xl px-4 pt-4">{name}</p>
        <p className="px-4 ">{rating}</p>
        <button className="mx-4 absolute bottom-5 border-white bg-white text-black">
          Order Now
        </button>
      </div>

      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-lg "
        src={image}
        alt=""
      />
    </div>
  );
};
