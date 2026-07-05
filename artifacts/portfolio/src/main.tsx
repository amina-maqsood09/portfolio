import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import App from "./App";
import "./index.css";

emailjs.init({ publicKey: "zdt7U3xUzKIF-t8lP" });

createRoot(document.getElementById("root")!).render(<App />);
