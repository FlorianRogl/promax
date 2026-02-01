import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.tsx";
import Unternehmen from "./components/views/Unternehmen.tsx";
import Kontakt from "./components/views/Kontakt.tsx";
import Footer from "./components/Footer.tsx";
import Leistungen from "./components/views/Leistungen.tsx";
import Projektberichte from "./components/Projektberichte.tsx";
import Karriere from "./components/views/Karriere.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import {HelmetProvider} from "@vuer-ai/react-helmet-async";
import Error404 from "./components/Error404.tsx";
import Rechtliches from "./components/Rechtliches.tsx";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/Navbar.tsx";
import Technologies from "./components/views/Technologies.tsx";
import './i18n';

function App() {
    return (
        <HelmetProvider>
            <>
                <style>{`
                    html {
                        zoom: 0.85;
                        -moz-transform: scale(0.85);
                        -moz-transform-origin: 0 0;
                    }
                    
                    @supports not (zoom: 0.85) {
                        body {
                            transform: scale(0.85);
                            transform-origin: 0 0;
                            width: 117.65%;
                        }
                    }
                `}</style>
                <div>
                    <Navbar/>
                    <ScrollToTop/>
                    <Routes>
                        <Route path="/" element={<Homepage/>} />
                        <Route path="/Unternehmen" element={<Unternehmen/>} />
                        <Route path="/Leistungen" element={<Leistungen/>} />
                        <Route path="/Technologien" element={<Technologies/>} />
                        <Route path="/Karriere" element={<Karriere/>} />
                        <Route path="/Kontakt" element={<Kontakt/>} />
                        <Route path="/Projektberichte" element={<Projektberichte/>} />
                        <Route path="/Rechtliches" element={<Rechtliches/>}/>

                        <Route path="*" element={<Error404/>} />
                    </Routes>
                    <Footer/>
                    <Analytics />
                </div>
            </>
        </HelmetProvider>
    );
}

export default App;