import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import AppaDetails from "../Pages/AppaDetails";
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
                path: "/apps",
                element: <Apps />,
                loader: () => fetch("./apps.json"),
            },
            {
                path: "/apps",
                element: <AppaDetails />,
                loader: () => fetch("./apps.json"),
            },
            {
                path: '/installations',
                Component: Installaition
            }
        ]
    }
])