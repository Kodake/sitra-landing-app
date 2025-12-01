export default function TrustStats() {
  return (
    <>
      {/* TRUST / STATS */}
      <section className="border-y border-white/10 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-wrap items-center justify-between gap-6">
          <p className="text-white/70">
            Con la confianza de{" "}
            <span className="font-semibold text-white">+2,000</span> negocios y
            equipos en crecimiento
          </p>
          <div className="flex flex-wrap gap-4 opacity-70">
            <span className="px-3 py-1 rounded-lg bg-white/5 text-xs">
              Retail
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-xs">
              Restaurantes
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-xs">
              Farmacias
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-xs">
              Ferreterías
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/5 text-xs">
              Mini markets
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
