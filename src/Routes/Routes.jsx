import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import Installaition from "../Pages/Installaition";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/installations',
                Component: Installaition
            }
        ]
    }
])