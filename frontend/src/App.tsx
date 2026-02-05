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
import Navbar from "./components/Navbar.tsx";
import Technologies from "./components/Technologies.tsx";
import CookieBanner from "./coockies/CookieBanner.tsx";
import { CookieProvider, useCookieConsent } from "./coockies/CookieContext.tsx";
import './i18n';

// ─── Vercel Analytics wird nur geladen wenn Analyse-Consent gegeben ─────────
// Analytics aus @vercel/analytics kann nicht konditional im-/exportiert werden,
// daher nutzen wir einen separaten Wrapper der nur rendert wenn consent da ist.
import { Analytics } from '@vercel/analytics/react';

const ConditionalAnalytics = () => {
    const { consent } = useCookieConsent();
    if (!consent.analytics) return null;
    return <Analytics />;
};

// ─── Hauptapp ─────────────────────────────────────────────────────────────────

function AppContent() {
    return (
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

            {/* Vercel Analytics – nur wenn analytics consent gegeben */}
            <ConditionalAnalytics />

            {/* Cookie Banner + Settings Modal */}
            <CookieBanner />
        </div>
    );
}

function App() {
    return (
        <HelmetProvider>
            <CookieProvider>
                <>

                    <AppContent />
                </>
            </CookieProvider>
        </HelmetProvider>
    );
}

export default App;