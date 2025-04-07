import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './component/ErrorPage';
import Home from './component/Home';
import Mainlayout from './component/Mainlayout';
import Login from './page/auth/Login';
import OrdersB2BMain from './page/Orders/b2b/OrdersB2BMain';
import CreateOrder from './page/Orders/B2B/CreateOrder';
import OrderB2CMain from './page/Orders/b2c/OrderB2CMain';
import CreateForwardOrder from './page/Orders/b2c/CreateForwardOrder';
import CreateReverseOrder from './page/Orders/b2c/CreateReverseOrder';
import CreateQc from './page/Orders/b2c/CreateQc';
import ComingSoon from './component/ComingSoon';
const router = createBrowserRouter([
  {
    path: '/',
    element: <ComingSoon />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dash',
    element: <Mainlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dash',
        element: <Faq />,
      },
    ],
  },
  {
    path: '/b2b',
    element: <Mainlayout />,
    children: [
      {
        path: 'all',
        element: <OrdersB2BMain />,
      },
      {
        path: 'create',
        element: <CreateOrder />,
      },
    ],
  },

  {
    path: '/b2c',
    element: <Mainlayout />,
    children: [
      {
        path: 'all',
        element: <OrderB2CMain />,
      },
      {
        path: 'create-forward',
        element: <CreateForwardOrder />,
      },
      {
        path: 'create-Reverse',
        element: <CreateReverseOrder />,
      },
      {
        path: 'create-Qc',
        element: <CreateQc />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
