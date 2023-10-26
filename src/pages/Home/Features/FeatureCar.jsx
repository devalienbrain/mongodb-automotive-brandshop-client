import featuresImg from "/Resources/banner1.jpg";
const FeatureCar = () => {
  return (
    <div className="text-center bg-green-50 p-5">
      <h3 className="text-3xl font-black text-green-950 pb-4">
        Our Feature Car Of This Week
      </h3>
      <div>
        <img className="mx-auto w-full " src={featuresImg} alt="" />
      </div>
      <div className="py-5 text-green-800">
        Brand Name: Elite Motors Mercedes-Benz Branch Location: 123 Main Street,
        Cityville, State
      </div>
    </div>
  );
};

export default FeatureCar;
