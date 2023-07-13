import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './Pages/Homepage.jsx';
import Page1 from './components/Page1.jsx';

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Page2AddUser from './components/Page2AddUser.jsx';
import Page2EditUser from './components/Page2EditUser.jsx';
import Page3 from './components/Page3.jsx';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
    children: [
      {
        path: '/',
        element: <Page1></Page1>,
      },
      {
        path: '/addUser',
        element: <Page2AddUser></Page2AddUser>,
      },
      {
        path: '/editUser/:id',
        element: <Page2EditUser></Page2EditUser>,
      },
      {
        path: '/viewUsers',
        element: <Page3></Page3>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
     
  </React.StrictMode>,
)
