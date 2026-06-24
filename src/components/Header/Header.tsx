import "./Header.css";

/* ============================
   TYPES
   ============================ */

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

/* ============================
   DATA
   ============================ */

const NAV_LINKS: NavLink[] = [
  { label: "Características", href: "#features" },
  { label: "Planes", href: "#pricing" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contact" },
  { label: "Login", href: "https://app.sitra.do/", external: true },
];

/* ============================
   COMPONENT
   ============================ */

export function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="logo">SITRA POS</div>

          <button
            className="hamburger"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {NAV_LINKS.map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={external ? undefined : () => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="hero">
          <h1>Administra tu negocio con SITRA, tu POS en la nube</h1>
          <p>
            Controla ventas, inventario y clientes desde cualquier lugar.
            Rápido, seguro y pensado para pequeños y medianos negocios.
          </p>
          <a href="#pricing" className="btn-primary">
            Ver planes
          </a>
        </section>
      </div>
    </header>
  );
}
