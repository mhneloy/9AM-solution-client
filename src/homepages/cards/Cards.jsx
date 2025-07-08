import { FaRegSmile } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div
        className="
        max-w-sm
        p-6
        rounded-2xl
        bg-white
        hover:bg-gradient-to-br from-[#EF700E] to-orange-400
        text-brand
        inset-shadow-card
        transition
        duration-300
        ease-in-out
        group
        hover:shadow-2xl
        hover:scale-105
        cursor-pointer
      "
      >
        <div className="flex justify-center items-center mb-4 group-hover:text-black ">
          <div className="relative">
            <div className="absolute -top-2 -left-2 before border-2 border-solid border-brand group-hover:border-black w-16 h-16 rounded-full"></div>
            <FaRegSmile className="text-5xl" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-2 group-hover:text-black">
          Our Awesome Service
        </h2>
        <p className="text-center text-secondaryTxt">
          We provide top-notch solutions to help you achieve your goals quickly
          and efficiently.
        </p>
      </div>
      <div
        className="
        max-w-sm
        p-6
        rounded-2xl
        bg-white
        hover:bg-gradient-to-br from-[#EF700E] to-orange-400
        text-brand
        inset-shadow-card
        transition
        duration-300
        ease-in-out
        group
        hover:shadow-2xl
        hover:scale-105
        cursor-pointer
      "
      >
        <div className="flex justify-center items-center mb-4 group-hover:text-black ">
          <div className="relative">
            <div className="absolute -top-2 -left-2 before border-2 border-solid border-brand group-hover:border-black w-16 h-16 rounded-full"></div>
            <FaRegSmile className="text-5xl" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-2 group-hover:text-black">
          Our Awesome Service
        </h2>
        <p className="text-center text-secondaryTxt">
          We provide top-notch solutions to help you achieve your goals quickly
          and efficiently.
        </p>
      </div>
      <div
        className="
        max-w-sm
        p-6
        rounded-2xl
        bg-white
        hover:bg-gradient-to-br from-[#EF700E] to-orange-400
        text-brand
        inset-shadow-card
        transition
        duration-300
        ease-in-out
        group
        hover:shadow-2xl
        hover:scale-105
        cursor-pointer
      "
      >
        <div className="flex justify-center items-center mb-4 group-hover:text-black ">
          <div className="relative">
            <div className="absolute -top-2 -left-2 before border-2 border-solid border-brand group-hover:border-black w-16 h-16 rounded-full"></div>
            <FaRegSmile className="text-5xl" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-2 group-hover:text-black">
          Our Awesome Service
        </h2>
        <p className="text-center text-secondaryTxt">
          We provide top-notch solutions to help you achieve your goals quickly
          and efficiently.
        </p>
      </div>
    </div>
  );
};

export default Cards;
