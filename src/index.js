import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import CalculateLengthUnits from './components/CalculateLengthUnits'
import CalculateDistanceUnits from './components/CalculateDistanceUnits'
import CalculateWeightUnits from './components/CalculateWeightUnits'
import CalculateVolumeUnits from './components/CalculateVolumeUnits'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/length',
    element: <CalculateLengthUnits />
  },
  {
    path: '/weight',
    element: <CalculateWeightUnits />
  },
  {
    path: '/distance',
    element: <CalculateDistanceUnits />
  },
  {
    path: '/volume',
    element: <CalculateVolumeUnits />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}></RouterProvider>)
