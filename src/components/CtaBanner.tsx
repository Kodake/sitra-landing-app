export default function CtaBanner() {
  return (
    <>
      {/* CTA BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="brand-gradient rounded-3xl p-8 md:p-12 text-slate-900">
          <h3 className="text-2xl md:text-3xl font-extrabold">
            Empieza a vender más con SITRA
          </h3>
          <p className="mt-2 text-slate-900/80 max-w-2xl">
            Configura tu primera caja en minutos. Importa productos y precios
            fácilmente.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#precios"
              className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition"
            >
              Elegir plan
            </a>
            <a
              href="#contacto"
              className="px-5 py-3 rounded-xl border border-slate-900/30 hover:bg-white/30 transition"
            >
              Solicitar demo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
