import React from 'react';
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Roual from './pages/Roual';
import Pyxoderka from './pages/Pyxoderka';
import Simparika from './pages/Simparika';
import Konservi from './pages/Konservi';
import KittyFood from './pages/KittyFood';
import DogeFood from './pages/DogeFood';
import Yslovie from './pages/Yslovie';
import Bonusi from './pages/Bonusi';
import Polit from './pages/Polit';
import Us from './pages/Us';
import Korzina from './pages/Korzina';
import Sms from './pages/Sms';


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
  {
    path: "/korm",
    element: <Roual/>,
  },
  {
    path: "/pyx",
    element: <Pyxoderka/>,
  },
  {
    path: "/simpa",
    element: <Simparika/>,
  },
  {
    path: "/konserv",
    element: <Konservi/>,
  },
  {
    path: "/kitty",
    element: <KittyFood/>,
  },
  {
    path: "/puppy",
    element: <DogeFood/>,
  },
  {
    path: "/yslovie",
    element: <Yslovie/>,
  },
  {
    path: "/bonuss",
    element: <Bonusi/>,
  },
  {
    path: "/politika",
    element: <Polit/>,
  },
  {
    path: "/aboutus",
    element: <Us/>,
  },
  {
    path: "/shop",
    element: <Korzina/>,
  },
  {
    path: "/kontakt",
    element: <Sms/>,
  },

]);
const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App
