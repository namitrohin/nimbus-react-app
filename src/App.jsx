import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ComingSoon from './page/ComingSoon';
const router = createBrowserRouter([
  {
    path: '/',
    element: <ComingSoon />,
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
