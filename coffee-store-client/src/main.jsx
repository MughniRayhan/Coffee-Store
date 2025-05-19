import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import Home from './Components/Home.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
  Component: MainLayout,
  children: [
    {
      index: true, 
      path: '/', 
      loader: () => fetch('http://localhost:3000/coffees'),
      hydrateFallbackElement: <h1>...Loding</h1>,
      Component: Home
    },
    {
      path: '/add', 
      Component: AddCoffee
    },
    {
      path: '/coffees/:id',
      Component:CoffeeDetails,
      loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
      hydrateFallbackElement: <h1>...Loding</h1>,
    },
  {
    path: '/update/:id',
      Component: UpdateCoffee,
      loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
      hydrateFallbackElement: <h1>...Loding</h1>,
  }

  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
