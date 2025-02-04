import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./src/Home";

createRoot(document.getElementById("root")).render(
    <StrictMode>
<Home/>
    </StrictMode>
);