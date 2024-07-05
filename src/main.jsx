import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Portfolio from "./pages/Portfolio.jsx"
import ContactUs from './pages/ContactUs.jsx'
import AboutUs from './pages/AboutUs.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />,
        errorElement:<ErrorPage />
      },{
        path:"/services",
        element:<Services />,
      },
      
      {
        path:"/contact-us",
        element:<ContactUs />
      },
      {
        path:"/about-us",
        element:<AboutUs />
      }
    ],

    errorElement:<ErrorPage />

    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <RouterProvider router={appRouter} />
  
  </React.StrictMode>,
)
