import bannerImg from "/Resources/banner2.jpg";

const Banner = ({ setIsDarkMode, isDarkMode }) => {
  const handleThemeToggle = () => {
    // console.log("previous", isDarkMode);
    const temp = !isDarkMode;
    setIsDarkMode(temp);
    // console.log("After", temp);
    localStorage.setItem("isDarkMode", JSON.stringify(temp));
  };

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bannerImg})`,
        objectFit: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-center">
        <div>
          <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl text-white font-black">
            CHOOSE FAVOURITE ONE AND BUY YOUR NEXT CLASSIC CAR
          </h1>
          <h3 className="mb-5 text-green-800 font-black">
            roadstar - the best car dealer in town
          </h3>
          <div className="py-10">
            <button
              className="border border-white rounded-2xl text-sm text-white px-4 py-1 font-semibold hover:bg-white hover:text-black hover:border-none"
              onClick={handleThemeToggle}
            >
              Go {isDarkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
