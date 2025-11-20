// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

// createRoot(document.getElementById("root")!).render(<App />);


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import AOS from 'aos'
import 'aos/dist/aos.css'   // இதுதான் 99% problem!

AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-cubic',
    offset: 100,
})

// இந்த line இல்லாம first time miss ஆகும்
window.addEventListener('load', () => {
    setTimeout(() => AOS.refreshHard(), 200)
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)