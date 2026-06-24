import { useState } from "react";
import "./styles/global.css";

import { Header } from "./components/Header/Header";
import { Features } from "./components/Features/Features";
import { Pricing } from "./components/Pricing/Pricing";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { FAQ } from "./components/FAQ/FAQ";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
