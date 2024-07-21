import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Signup from './components/Signup.jsx'
import MyProfile from './components/MyProfile.jsx'
import Dashboard from './components/Dashboard.jsx'
import Settings from './components/Settings.jsx'
import Contact from './components/Contact.jsx'


const router = createBrowserRouter([  
  {
    path: '/',
    element: <App />, // The main App component
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        element: <Dashboard/>,
        children: [
          {
            path: '/myprofile',
            element: <MyProfile/>
          },
          {
            path: '/settings',
            element: <Settings />
          }
        ]
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
