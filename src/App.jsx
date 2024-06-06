import React from 'react';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/flat",
    element: <Home/>,
  },
  {
    path: "/cats",
    element: <Page2/>,
  },
  {
    path: "/dogs",
    element: <Page3/>,
  },
  {
    path: "/apteka",
    element: <Page4/>,
  },
  {
    path: "/sales",
    element: <Page5/>,
  },
  {
    path: "/registr",
    element: <Signup/>,
  },
  {
    path: "/voity",
    element: <Signin/>,
  },
  
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App
