import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Structure from "./Components/Structure";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Structure/>
    </StrictMode>
)