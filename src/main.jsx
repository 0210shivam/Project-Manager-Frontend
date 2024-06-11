import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ViewTask from './pages/ViewTask.jsx';
import { TaskContextProvider } from './contexts/TaskContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/task',
    element: <ViewTask />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskContextProvider>
    <RouterProvider router={router} />
  </TaskContextProvider>
);
