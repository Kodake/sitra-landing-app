export default function Contact() {
  return (
    <>
      {/* CONTACTO */}
      <section
        id="contacto"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-10">
          {/* FORMULARIO */}
          <div>
            <h2 className="text-3xl font-extrabold">Hablemos</h2>
            <p className="mt-3 text-white/70">
              Completa el formulario y uno de nuestros asesores te contactará en
              menos de 24 horas hábiles.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("¡Gracias! Te contactaremos pronto.");
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70" htmlFor="nombre">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      required
                      className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900 px-3 py-2 placeholder:text-white/40
                focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-white/70" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900 px-3 py-2 placeholder:text-white/40
                focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-white/70" htmlFor="telefono">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900 px-3 py-2 placeholder:text-white/40
                focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                      placeholder="(809) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-white/70" htmlFor="empresa">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900 px-3 py-2 placeholder:text-white/40
                focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                      placeholder="Nombre del negocio"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-sm text-white/70" htmlFor="mensaje">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      className="mt-1 w-full rounded-xl border border-white/15 bg-slate-900 px-3 py-2 placeholder:text-white/40
                focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
                      placeholder="Cuéntanos qué necesitas"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full sm:w-auto px-5 py-3 rounded-xl brand-gradient hover:opacity-90 transition"
                >
                  Enviar
                </button>

                <p className="mt-3 text-xs text-white/50">
                  Al enviar aceptas nuestros Términos y Política de Privacidad.
                </p>
              </form>
            </div>
          </div>

          {/* INFO LATERAL */}
          <div className="lg:pl-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">¿Necesitas una demo guiada?</h3>
              <p className="mt-2 text-white/70">
                Agendamos una videollamada para mostrarte SITRA en acción.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>
                  • Implementación inicial incluida en planes Profesional y
                  Empresa
                </li>
                <li>• Capacitación para tu equipo</li>
                <li>• Asesoría para facturación NCF / e-CF</li>
              </ul>

              <a
                href="#precios"
                className="mt-6 inline-block px-4 py-2 rounded-xl border border-white/15 hover:border-white/25 transition"
              >
                Ver planes
              </a>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">Soporte</div>
                <div className="mt-1">Lun–Vie 9:00–18:00 (GMT-4)</div>
                <div className="mt-1">soporte@sitra.app</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">Ventas</div>
                <div className="mt-1">ventas@sitra.app</div>
                <div className="mt-1">+1 (809) 555-1234</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
