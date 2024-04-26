import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './pages/users'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Register from './pages/register'
import LogIn from './pages/logIn'
import { ModalContext, UserContext } from './context/GlobalContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LogIn />
    ),
  },
  {
    path: "/register",
    element: (
      <Register />
    ),
  },
  {
    path: "/users",
    element: (
      <Users />
    ),
  }
]);

function App() {

  const [visibility, setVisibility] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <>
      <ModalContext.Provider value={{ visibility, setVisibility }} >
        <UserContext.Provider value={{user, setUser}} >
          <RouterProvider router={router} />
        </UserContext.Provider>
      </ModalContext.Provider>
    </>
  )
}

export default App
