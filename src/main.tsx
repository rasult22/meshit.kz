import React from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MosquePage from './pages/mosque/mosque-page'
import HomePage from './pages/index/home-page'
import FilterPage from './pages/filter/filter-page'

const root = createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: 'filter',
        element: <FilterPage />
      },
      {
        path: 'mosque/:mosqueId',
        element: <MosquePage />
      }
    ]
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
