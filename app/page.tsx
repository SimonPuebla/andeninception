"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Programa from "./components/sections/Programa";
import ParaVos from "./components/sections/ParaVos";
import LoQueIncluye from "./components/sections/LoQueIncluye";
import ZonaBeneficios from "./components/sections/ZonaBeneficios";
import Ecosistema from "./components/sections/Ecosistema";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/Footer";
import WaitlistModal from "./components/WaitlistModal";
import { LanguageProvider } from "./i18n/LanguageContext";

export default function Home() {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <LanguageProvider>
      <main>
        <Navbar onCta={openModal} />
        <Hero onCta={openModal} />
        <Programa />
        <ParaVos />
        <LoQueIncluye />
        <ZonaBeneficios />
        <Ecosistema />
        <FAQ />
        <FinalCTA onCta={openModal} />
        <Footer />
        <WaitlistModal open={open} onClose={closeModal} />
      </main>
    </LanguageProvider>
  );
}
