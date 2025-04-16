import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./component/ErrorPage";
import Home from "./component/Home";
import Mainlayout from "./component/Mainlayout";

import Login from "./page/Login";
import Index from "./page/Orders/B2B/Index";


const router = createBrowserRouter([
  {

    path: "/",
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },





])
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
};

export default App;