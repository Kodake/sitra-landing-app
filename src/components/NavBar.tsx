"use client";

import { useEffect } from "react";

export default function NavBar() {
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    const btn = document.getElementById("menuBtn");
    const menu = document.getElementById("mobileMenu");

    const toggle = () => menu?.classList.toggle("hidden");
    btn?.addEventListener("click", toggle);
    return () => btn?.removeEventListener("click", toggle);
  }, []);

  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl brand-gradient text-white shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 3h7l2 3h9v15H3V3z" />
                </svg>
              </span>
              <span className="text-lg font-extrabold tracking-tight">
                SITRA
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a
                href="#caracteristicas"
                className="hover:text-white/90 text-white/70"
              >
                Características
              </a>
              <a href="#precios" className="hover:text-white/90 text-white/70">
                Precios
              </a>
              <a href="#clientes" className="hover:text-white/90 text-white/70">
                Clientes
              </a>
              <a href="#faq" className="hover:text-white/90 text-white/70">
                FAQ
              </a>
              <a href="#contacto" className="hover:text-white/90 text-white/70">
                Contacto
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#demo"
                className="text-sm px-4 py-2 rounded-xl border border-white/15 hover:border-white/25 transition"
              >
                Probar demo
              </a>
              <a
                href="#precios"
                className="text-sm px-4 py-2 rounded-xl brand-gradient hover:opacity-90 transition shadow"
              >
                Afíliate
              </a>
            </div>

            <button
              id="menuBtn"
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobileMenu"
          className="md:hidden hidden border-t border-white/10"
        >
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-3">
            <a
              className="px-3 py-2 rounded-lg hover:bg-white/5"
              href="#caracteristicas"
            >
              Características
            </a>
            <a
              className="px-3 py-2 rounded-lg hover:bg-white/5"
              href="#precios"
            >
              Precios
            </a>
            <a
              className="px-3 py-2 rounded-lg hover:bg-white/5"
              href="#clientes"
            >
              Clientes
            </a>
            <a className="px-3 py-2 rounded-lg hover:bg-white/5" href="#faq">
              FAQ
            </a>
            <a
              className="px-3 py-2 rounded-lg hover:bg-white/5"
              href="#contacto"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
