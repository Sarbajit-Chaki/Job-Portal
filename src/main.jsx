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
import Jobs from './components/Jobs.jsx'
import AddPost from './components/AddPost.jsx'
import MyPosts from './components/MyPosts.jsx'
<<<<<<< HEAD
import EditPost from './components/EditPost.jsx'
=======
import AppliedUsers from './components/AppliedUsers.jsx'
>>>>>>> a4cdbcdd715c027a798d0b1a96163792df719f97


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
        path: '/jobs',
        element: <Jobs/>
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
          },
          {
            path: '/addpost',
            element: <AddPost/>
          },
          {
            path: '/myposts',
            element: <MyPosts/>
          },
          {
            path: '/myposts/editPost/:postId',
            element: <EditPost/>
          },
          {
            path: '/myposts/appliedUsers',
            element: <AppliedUsers/>
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
