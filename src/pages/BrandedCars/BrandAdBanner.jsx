import { useEffect, useState } from "react";

const BrandAdBanner = ({ name }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch(
      "https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/brandad"
    )
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(brands, name);

  const filteredBrand = brands.filter((brand) => {
    // console.log(brand.brand, name);
    return name === brand.brand;
  });
  // console.log(filteredBrand[0]?.bgimg1);
  // const bg1 = filteredBrand[0].bgimg[0];
  // console.log(bg1);
  return (
    <>
      <div className="relative">
        <div className="carousel w-full">
          {/* SLIDER - 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img src={filteredBrand[0]?.bgimg1} className="w-full h-96" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* SLIDER - 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img src={filteredBrand[0]?.bgimg2} className="w-full h-96" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          {/* SLIDER - 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img src={filteredBrand[0]?.bgimg3} className="w-full h-96" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="p-5 text-center text-white  font-black text-3xl z-10 absolute top-20">
            <h1>Your Dream Car Is Just A Visit Away</h1>

            <h2 className="py-5">BRAND: {name}</h2>

            <p>Visit Us Any Time 24/7</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAdBanner;
