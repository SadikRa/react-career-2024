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
import EorrorPage from './components/EorrorPage.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import JobDetail from './components/JobDetail/JobDetail.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <EorrorPage></EorrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/job/:id',
        element:<JobDetail /> ,
        loader: () => fetch('/jobs.json')
      }
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
