import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router'
import { router } from './routes/Routers.jsx'
import FriendsContextProvider from './context/FriendsContextProvider.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsContextProvider>

    <RouterProvider router={router} />
    </FriendsContextProvider>
  </StrictMode>,
)
