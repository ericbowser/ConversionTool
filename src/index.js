import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import CalculateMetricToStandard from './components/CalculateMetricToStandard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/calc",
    element: <CalculateMetricToStandard />,
  } 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider
    router={router}>
  </RouterProvider>
);
