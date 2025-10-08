import React from 'react';
import { createBrowserRouter } from "react-router";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Root from '../pages/Root/Root';
import ErrorPages from '../pages/ErrorPage/ErrorPages';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/all-apps",
                Component: AllApps
            }
        ]
    },

]);