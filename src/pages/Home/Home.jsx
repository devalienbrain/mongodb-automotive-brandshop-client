import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import FeatureCar from "./Features/FeatureCar";
import UserReviews from "./Reviews/UserReviews";
import CarBrands from "./Brands/CarBrands";
import { useState } from "react";

const Home = () => {
  const carBrandsData = useLoaderData();

  const [isDarkMode, setIsDarkMode] = useState(
    JSON.parse(localStorage.getItem("isDarkMode")) || false
  );
  // console.log(isDarkMode);

  return (
    <div
      className={`bg-${isDarkMode ? "black" : "white"} text-${
        isDarkMode ? "white" : "black"
      }`}
    >
      <Banner setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <div className="container mx-auto">
        <div>
          <CarBrands carBrandsData={carBrandsData} />
        </div>
        <FeatureCar />
        <div>
          <UserReviews />
        </div>
      </div>
    </div>
  );
};

export default Home;
