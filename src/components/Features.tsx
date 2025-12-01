export default function Features() {
  return (
    <>
      {/* FEATURES */}
      <section
        id="caracteristicas"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold">
            Todo lo que necesitas para vender
          </h2>
          <p className="mt-3 text-white/70">
            SITRA centraliza tus operaciones para que te enfoques en crecer.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="h-10 w-10 rounded-xl brand-gradient grid place-items-center shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 3h18v4H3zM4 8h16v13H4z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold">Ventas rápidas</h3>
            <p className="mt-1 text-sm text-white/70">
              Tickets, descuentos, devoluciones y múltiples métodos de pago.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="h-10 w-10 rounded-xl brand-gradient grid place-items-center shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 7h18v2H3zm2 4h14v8H5z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold">Inventario</h3>
            <p className="mt-1 text-sm text-white/70">
              Kardex, mínimos, alertas de stock y variantes por talla/color.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="h-10 w-10 rounded-xl brand-gradient grid place-items-center shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M4 4h16v6H4zM7 12h10v8H7z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold">Facturación</h3>
            <p className="mt-1 text-sm text-white/70">
              Impresión o envío por email/WhatsApp. Soporte para NCF / e-CF.*
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="h-10 w-10 rounded-xl brand-gradient grid place-items-center shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M3 13h18v2H3zm0 4h12v2H3zM3 5h18v6H3z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold">Reportes</h3>
            <p className="mt-1 text-sm text-white/70">
              Ventas por periodo, productos, cajas y usuarios. Exportables.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="h-10 w-10 rounded-xl brand-gradient grid place-items-center shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M6 3h12l3 5v13H3V8z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold">Modo offline</h3>
            <p className="mt-1 text-sm text-white/70">
              Sigue vendiendo aunque falle el internet; sincroniza al volver.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="h-10 w-10 rounded-xl brand-gradient grid place-items-center shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M4 6h16v4H4zm0 6h10v6H4z" />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold">Multi-sucursal</h3>
            <p className="mt-1 text-sm text-white/70">
              Precios por tienda, traspasos y consolidado de inventario.
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs text-white/50">
          *La disponibilidad de NCF/e-CF puede requerir configuración adicional
          según normativa.
        </p>
      </section>
    </>
  );
}
