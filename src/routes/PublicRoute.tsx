import { DashboardLayout } from "../Components";
import Claims from "../Pages/Claims";
import Dashboardhome from "../Pages/Dashboardhome";
import { createBrowserRouter } from "react-router-dom";
import Health from "../Pages/Health";
import Subscription from "../Pages/Subscription";
import Biller from "../Pages/Biller";


export const Element = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <Dashboardhome />
            },
            {
                path: "claims",
                element: <Claims />
            },
            {
                path: "biller",
                element: <Biller />
            },
            {
                path: "subscription",
                element: <Subscription />
            },
            {
                path: "health",
                element: <Health />
            }
        ]
    }
])