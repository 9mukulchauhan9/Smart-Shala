import React from "react";
import Loginsignup from "./pages/loginsignup";
import Footer from "./component/Footer"; 
import Navbar from "./component/Navbar";
import Universites from  "./pages/Universites";
import Categories from "./pages/Categories";
import Stream from "./pages/Stream";
import Home from "./pages/Home";

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <><Loginsignup/><Footer/></>
  },
  {
    path: "/university",
    element: <><Navbar/><Universites/><Footer/></>
  },
  {
    path: "/categories",
    element: <><Navbar/><Categories/><Footer/></>
  },
   {
    path: "/stream",
    element: <><Navbar/><Stream/><Footer/></>
  },
  {
    path: "/",
    element: <><Navbar/><Home/><Footer/></>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
