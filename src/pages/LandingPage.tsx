"use client";

import Contact from "../components/Contact";
import CtaBanner from "../components/CtaBanner";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import TrustStats from "../components/TrustStats";

export default function LandingPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <NavBar />
      <Hero />
      <TrustStats />
      <Features />
      <Pricing />
      <Testimonials />
      <CtaBanner />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
