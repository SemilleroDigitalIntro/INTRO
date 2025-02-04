import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from "./components/Login";
import "./style/App.css"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Login/>
    </StrictMode>
)