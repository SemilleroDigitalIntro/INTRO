import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Formulario from "./Src/components/Formulario";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Formulario/>
    </StrictMode>
);