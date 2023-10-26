import CarBrandCard from "./CarBrandCard";

const CarBrands = ({ carBrandsData }) => {
  // console.log(carBrandsData);
  return (
    <div className="text-center my-10">
      <h3 className="text-4xl font-black text-red-950">
        Our Global Car Brands
      </h3>
      <div className="py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {carBrandsData.map((carBrandData) => (
          <CarBrandCard
            key={carBrandData.id}
            carBrandData={carBrandData}
          ></CarBrandCard>
        ))}
      </div>
    </div>
  );
};

export default CarBrands;
