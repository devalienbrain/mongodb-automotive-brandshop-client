import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddAProduct = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const ratings = form.ratings.value;

    const newProduct = {
      image,
      name,
      brand,
      type,
      price,
      description,
      ratings,
    };

    console.log(newProduct);

    // send data to the server
    fetch(
      "https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "WOW! Cool..",
            text: "The Product Added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="p-5 w-full lg:w-1/2 mx-auto">
      <h2 className="text-3xl text-red-800 text-center font-black">
        ADD A PRODUCT
      </h2>
      <form onSubmit={handleAddAProduct}>
        {/* form */}
        <div className="mb-8">
          {/* 1_image field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="product image url"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 2_name field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="product name"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 3_brand name field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="brand name"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 4_type field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="type of the product"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 5_price field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                placeholder="price of the product"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 6_short description field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="short description of the product"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* 7_rating field */}
          <div className="mb-8 form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Ratings</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="ratings"
                placeholder="product rating"
                className="input input-bordered rounded-xl drop-shadow-lg w-full"
              />
            </label>
          </div>
          {/* SUBMIT BUTTON */}
          <div className="form-control w-full">
            <input
              type="submit"
              value="Add Product"
              className="px-8 py-3 bg-red-50 text-red-800 border border-red-900 hover:bg-red-100 rounded-xl drop-shadow-2xl font-bold text-xl"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
