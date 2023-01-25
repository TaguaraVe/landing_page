import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Public from '../layout/Public';
import Contact from '../pages/contact';
import Home from '../pages/home';

import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Public />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'contact', element: <Contact /> },
    ],
  },
]);
