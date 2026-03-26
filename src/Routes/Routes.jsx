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
                path: "/app/:id",
                element: <AppaDetails />,
                loader: async ({ params }) => {
                    const res = await fetch('../../public/apps.json');
                    const data = await res.json(); // parse JSON
                    const details = data.find(detail => detail.id === Number(params.id)); // convert id to number
                    return details;
                }
            },
            {
                path: '/installations',
                Component: Installaition
            }
        ]
    }
])