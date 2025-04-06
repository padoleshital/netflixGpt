import React from 'react';
import Login from '../components/Login';
import Browse from '../components/Browse';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

const Body = () =>
    {
        const appRouter = createBrowserRouter([
            {
                path:"/",
                element:<Login/>
            },
            {
                path:"/browse",   //authenticated page
                element:<Browse/>
            }
        ])



        return (
            <div>
              <RouterProvider router={appRouter}>
              </RouterProvider>
            </div>
        );
    }

export default Body;