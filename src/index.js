import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CalculateLengthUnits from './components/CalculateLengthUnits'
import CalculateDistanceUnits from './components/CalculateDistanceUnits'
import CalculateWeightUnits from './components/CalculateWeightUnits'
import CalculateVolumeUnits from './components/CalculateVolumeUnits'
import Capture from './components/Capture'
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
  },
  {
    path: '/capture',
    element: <Capture />
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)
