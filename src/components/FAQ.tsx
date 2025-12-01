export default function FAQ() {
  return (
    <>
      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold">Preguntas frecuentes</h2>
          <p className="mt-3 text-white/70">
            Resolviendo las dudas más comunes.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          <details className="group rounded-2xl border border-white/10 bg-white/5 p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold">
                ¿Puedo migrar mis datos actuales?
              </span>
              <span className="text-white/60 group-open:rotate-45 transition">
                ＋
              </span>
            </summary>
            <p className="mt-3 text-white/70">
              Sí. Te ayudamos a importar productos, clientes y precios desde
              Excel/CSV.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/5 p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold">¿Funciona sin internet?</span>
              <span className="text-white/60 group-open:rotate-45 transition">
                ＋
              </span>
            </summary>
            <p className="mt-3 text-white/70">
              SITRA cuenta con modo offline. Podrás seguir vendiendo y se
              sincronizará al reconectar.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/5 p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold">
                ¿Cómo se realiza la facturación con NCF/e-CF?
              </span>
              <span className="text-white/60 group-open:rotate-45 transition">
                ＋
              </span>
            </summary>
            <p className="mt-3 text-white/70">
              Dependiendo de tu régimen, se habilitan series y formatos. Nuestro
              equipo te guía en la configuración.
            </p>
          </details>

          <details className="group rounded-2xl border border-white/10 bg-white/5 p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-semibold">
                ¿Qué hardware es compatible?
              </span>
              <span className="text-white/60 group-open:rotate-45 transition">
                ＋
              </span>
            </summary>
            <p className="mt-3 text-white/70">
              Lectores de código de barras, gavetas, impresoras térmicas 58/80mm
              y pantallas táctiles estándar.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
