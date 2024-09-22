import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='container mx-auto'>
   <RouterProvider router={router} />
   </div>
  </StrictMode>,
)
