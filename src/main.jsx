import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DataProvider from './Context/DataProvider.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router}></RouterProvider>
    </DataProvider>
  </StrictMode>,
)
