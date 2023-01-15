import React from 'react';
import ReactDOM from 'react-dom/client';
import './Css/index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './View/ErrorPage';
import Home from './View/Home';
import ListCharacter from './View/ListCharacter';
import ManagementCharacter from './View/ManagementCharacter';
import { ROOT_HOME, ROOT_LIST_PLAYER, ROOT_CREATE_PLAYER } from './Constant/Constant';


const router = createBrowserRouter([
  {
    path: ROOT_HOME,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROOT_LIST_PLAYER,
    element: <ListCharacter />,
    errorElement: <ErrorPage />,
  },
  {
    path: ROOT_CREATE_PLAYER,
    element: <ManagementCharacter />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
