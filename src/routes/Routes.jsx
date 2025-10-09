import React from 'react';
import { createBrowserRouter } from "react-router";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Root from '../pages/Root/Root';
import ErrorPages from '../pages/ErrorPage/ErrorPages';
import Home from '../pages/Home/Home';
import AllApps from '../pages/AllApps/AllApps';
import AppDetails from '../pages/AppDetails/AppDetails';
import InstalledApps from '../pages/InstalledApps/InstalledApps';

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
                path: "/apps",
                Component: AllApps
            },
            {
                path: "/apps/:id",
                Component: AppDetails
            },
            {
                path: "/installed",
                Component: InstalledApps
            }
        ]
    },

]);