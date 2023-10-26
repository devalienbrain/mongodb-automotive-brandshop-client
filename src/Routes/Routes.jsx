import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import BrandedCars from "../pages/BrandedCars/BrandedCars";
import ProductDetails from "../pages/Home/Brands/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brandedCars/:name",
        element: <BrandedCars></BrandedCars>,
        loader: () =>
          fetch(
            "https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/products"
          ),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/cart"
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/products"
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-brand-shop-server-5xa3jm979-alien-brains-projects.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default routes;
