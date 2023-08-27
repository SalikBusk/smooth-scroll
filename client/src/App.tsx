import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import Index from './Pages/Index';

const Layout = () => {
  return(
    <div>
      <Outlet/>
    </div>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Index/>,
      }
    ],
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
