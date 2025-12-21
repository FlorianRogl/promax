import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.tsx";
import Unternehmen from "./components/Unternehmen.tsx";
import Kontakt from "./components/Kontakt.tsx";
import Footer from "./components/Footer.tsx";
import Leistungen from "./components/Leistungen.tsx";
import Projektberichte from "./components/Projektberichte.tsx";
import Karriere from "./components/Karriere.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import {HelmetProvider} from "@vuer-ai/react-helmet-async";
import Error404 from "./components/Error404.tsx";
import Rechtliches from "./components/Rechtliches.tsx";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/Navbar.tsx";
import Technologies from "./components/Technologies.tsx";
import './i18n';
import SEOWrapper from "./seo/SeoWrapper.tsx"; // Import i18n configuration

function App() {
    return (
        <HelmetProvider>
            <SEOWrapper>
            <div>
                <Navbar/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/Unternehmen" element={<Unternehmen/>} />
                    <Route path="/Kontakt" element={<Kontakt/>} />
                    <Route path="/Technologien" element={<Technologies/>} />
                    <Route path="/Leistungen" element={<Leistungen/>} />
                    <Route path="/Projektberichte" element={<Projektberichte/>} />
                    <Route path="/Karriere" element={<Karriere/>} />
                    <Route path="/Rechtliches" element={<Rechtliches/>}/>

                    <Route path="*" element={<Error404/>} />
                </Routes>
                <Footer/>
                <Analytics />
            </div>
            </SEOWrapper>
        </HelmetProvider>
    );
}

export default App;