import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CarBrandCard = ({ carBrandData }) => {
  // console.log(carBrandData);
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const { name, image } = carBrandData || {};

  return (
    <Link to={`/brandedCars/${name}`}>
      <div
        className="rounded-lg flex flex-col border border-red-50 bg-red-200 drop-shadow-2xl p-5"
        data-aos="fade"
      >
        <img
          className="rounded-t-lg w-full h-64 border border-red-100"
          src={image}
          alt="Alternative Image"
        />
        <div className="p-4 text-center md:text-left">
          <h3 className="text-3xl text-center font-black text-red-800 mb-3">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CarBrandCard;
