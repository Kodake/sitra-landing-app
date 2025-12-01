export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 brand-gradient opacity-20"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full brand-gradient blur-3xl opacity-30"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-white/10 border border-white/15">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
                Disponible para Escritorio, Web y Android
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                SITRA · POS inteligente para{" "}
                <span className="text-transparent bg-clip-text brand-gradient">
                  comercios modernos
                </span>
              </h1>

              <p className="mt-4 text-white/80 max-w-xl">
                Gestiona ventas, inventario, facturación y reportes desde un
                solo lugar. Rápido, seguro y listo para crecer con tu negocio.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#precios"
                  className="px-5 py-3 rounded-xl brand-gradient hover:opacity-90 transition shadow"
                >
                  Comenzar ahora
                </a>
                <a
                  href="#caracteristicas"
                  className="px-5 py-3 rounded-xl border border-white/15 hover:border-white/25 transition"
                >
                  Ver características
                </a>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Soporte en vivo
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8.25h18m-12 7.5h6M4.5 6v12a2.25 2.25 0 0 0 2.25 2.25h10.5A2.25 2.25 0 0 0 19.5 18V6A2.25 2.25 0 0 0 17.25 3.75H6.75A2.25 2.25 0 0 0 4.5 6z"
                    />
                  </svg>
                  Facturación
                </div>

                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 3v18m9-9H3"
                    />
                  </svg>
                  Escalable
                </div>
              </div>
            </div>

            {/* HERO CARD */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-sky-500/20 to-cyan-400/20 blur-2xl"></div>
              <div className="relative glass rounded-3xl border border-white/10 p-4 shadow-xl">
                <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 grid place-items-center text-center px-6">
                  <div>
                    <div className="mx-auto mb-4 h-12 w-12 rounded-2xl brand-gradient grid place-items-center shadow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3 6h18v4H3zM4 11h16l-2 7H6z" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold">
                      Interfaz de caja rápida
                    </p>
                    <p className="text-white/60 mt-2">
                      Procesa ventas en segundos, con lector de código de barras
                      y múltiples métodos de pago.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
