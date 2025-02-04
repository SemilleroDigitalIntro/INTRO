import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Structure from "./components/body/Structure.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Structure/>
    },
    {
        path: "CheckData",
        element: <div>CheckData</div>
    }
]);

createRoot(document.getElementById("root")).render(
<StrictMode>
    <RouterProvider router={Routes}/>
 </StrictMode>
);