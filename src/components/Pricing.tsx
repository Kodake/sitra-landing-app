export default function Pricing() {
  return (
    <>
      {/* PRICING */}
      <section
        id="precios"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold">Planes de afiliación</h2>
          <p className="mt-3 text-white/70">
            Elige el plan que mejor se adapte a tu negocio. Cancela cuando
            quieras.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* BÁSICO */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Básico</h3>
              <span className="text-xs px-2 py-1 rounded-md bg-white/10">
                Para empezar
              </span>
            </div>

            <p className="mt-4 text-3xl font-extrabold">
              RD$ 990
              <span className="text-base font-semibold text-white/60">
                /mes
              </span>
            </p>
            <p className="mt-2 text-sm text-white/70">
              Ideal para un punto de venta.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <span>✅</span> 1 caja / 1 usuario
              </li>
              <li className="flex gap-2">
                <span>✅</span> Ventas y devoluciones
              </li>
              <li className="flex gap-2">
                <span>✅</span> Inventario básico
              </li>
              <li className="flex gap-2">
                <span>✅</span> Reportes esenciales
              </li>
              <li className="flex gap-2">
                <span>✅</span> Soporte por email
              </li>
            </ul>

            <a
              href="#contacto"
              className="mt-auto w-full text-center px-4 py-3 rounded-xl border border-white/15 hover:border-white/25 transition"
            >
              Afiliarme
            </a>
          </div>

          {/* PROFESIONAL */}
          <div className="relative rounded-2xl border border-cyan-400/40 bg-gradient-to-b from-cyan-500/10 to-indigo-500/10 p-6 shadow-lg flex flex-col">
            <div className="absolute -top-3 right-3 text-xs px-2 py-1 rounded-md brand-gradient">
              Más popular
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Profesional</h3>
              <span className="text-xs px-2 py-1 rounded-md bg-white/10">
                Para crecer
              </span>
            </div>

            <p className="mt-4 text-3xl font-extrabold">
              RD$ 1,990
              <span className="text-base font-semibold text-white/60">
                /mes
              </span>
            </p>
            <p className="mt-2 text-sm text-white/70">
              Para 2–3 puntos de venta.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <span>✅</span> Hasta 3 cajas / 5 usuarios
              </li>
              <li className="flex gap-2">
                <span>✅</span> Inventario avanzado (kardex, alertas)
              </li>
              <li className="flex gap-2">
                <span>✅</span> Facturación NCF / e-CF
              </li>
              <li className="flex gap-2">
                <span>✅</span> Reportes avanzados y exportaciones
              </li>
              <li className="flex gap-2">
                <span>✅</span> Soporte por chat
              </li>
            </ul>

            <a
              href="#contacto"
              className="mt-auto w-full text-center px-4 py-3 rounded-xl brand-gradient hover:opacity-90 transition"
            >
              Afiliarme
            </a>
          </div>

          {/* EMPRESA */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Empresa</h3>
              <span className="text-xs px-2 py-1 rounded-md bg-white/10">
                Para escalar
              </span>
            </div>

            <p className="mt-4 text-3xl font-extrabold">
              RD$ 3,990
              <span className="text-base font-semibold text-white/60">
                /mes
              </span>
            </p>
            <p className="mt-2 text-sm text-white/70">
              Red de tiendas y franquicias.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li className="flex gap-2">
                <span>✅</span> Cajas y usuarios ilimitados
              </li>
              <li className="flex gap-2">
                <span>✅</span> Multi-sucursal y listas de precios
              </li>
              <li className="flex gap-2">
                <span>✅</span> API y roles avanzados
              </li>
              <li className="flex gap-2">
                <span>✅</span> Integraciones contables
              </li>
              <li className="flex gap-2">
                <span>✅</span> Soporte prioritario 24/7
              </li>
            </ul>

            <a
              href="#contacto"
              className="mt-auto w-full text-center px-4 py-3 rounded-xl border border-white/15 hover:border-white/25 transition"
            >
              Hablar con ventas
            </a>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/60 text-center">
          ¿Pagar anual? Ahorra 2 meses. Solicítalo en{" "}
          <a href="#contacto" className="underline">
            Contacto
          </a>
          .
        </p>
      </section>
    </>
  );
}
