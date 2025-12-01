export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-6">

        {/* LEFT BLOCK */}
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg brand-gradient text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 3h7l2 3h9v15H3V3z" />
              </svg>
            </span>

            <span className="font-extrabold">SITRA</span>
          </div>

          <p className="mt-3 text-sm text-white/60 max-w-md">
            El POS que hace simple vender. © <span id="year"></span> SITRA.  
            Todos los derechos reservados.
          </p>
        </div>

        {/* RIGHT BLOCK */}
        <div className="grid sm:grid-cols-3 gap-4 text-sm">

          <div>
            <div className="font-semibold">Producto</div>
            <ul className="mt-2 space-y-1 text-white/70">
              <li>
                <a href="#caracteristicas" className="hover:text-white">
                  Características
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-white">
                  Precios
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Compañía</div>
            <ul className="mt-2 space-y-1 text-white/70">
              <li>
                <a href="#clientes" className="hover:text-white">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Términos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Síguenos</div>
            <ul className="mt-2 space-y-1 text-white/70">
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
