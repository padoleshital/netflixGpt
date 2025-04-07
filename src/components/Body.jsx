import React from 'react';

//components
import Login from '../components/Login';
import Browse from '../components/Browse';
import SignUp from '../components/SignUp';

//react-router-library
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
                path:"/SignUp",
                element:<SignUp/>
            },
            {
                path:"/browse",   //authenticated page
                element:<Browse/>
            }
        ]);



        return (
            <div>
              <RouterProvider router={appRouter}>
              </RouterProvider>
            </div>
        );
    }

export default Body;