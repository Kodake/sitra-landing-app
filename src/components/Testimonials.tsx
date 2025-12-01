export default function Testimonials() {
  return (
    <>
      {/* TESTIMONIALS */}
      <section
        id="clientes"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold">
            Clientes que ya venden con SITRA
          </h2>
          <p className="mt-3 text-white/70">
            Historias reales de crecimiento y eficiencia.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <figure className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <blockquote className="text-white/80">
              “Instalamos SITRA en dos cajas y redujimos el tiempo de cobro en
              un 40%.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              Laura P. · Retail
            </figcaption>
          </figure>

          <figure className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <blockquote className="text-white/80">
              “El control de inventario es impecable y los reportes nos ayudan a
              decidir.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              José A. · Ferretería
            </figcaption>
          </figure>

          <figure className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <blockquote className="text-white/80">
              “Excelente soporte. La facturación con e-CF fue muy sencilla de
              configurar.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-white/60">
              Carolina M. · Farmacia
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
