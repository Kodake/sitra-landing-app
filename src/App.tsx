import { useState } from "react";
import "./App.css";

/* =========================
   HEADER + HERO
========================= */
function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}) {
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
            <li>
              <a href="#features" onClick={() => setMenuOpen(false)}>
                Características
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setMenuOpen(false)}>
                Planes
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setMenuOpen(false)}>
                Testimonios
              </a>
            </li>
            <li>
              <a href="#faq" onClick={() => setMenuOpen(false)}>
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contacto
              </a>
            </li>
            <li>
              <a href="https://app.sitra.do/">
                Login
              </a>
            </li>
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

/* =========================
   FEATURES
========================= */
function Features() {
  return (
    <section id="features">
      <div className="container">
        <h2>¿Por qué elegir SITRA?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Fácil de usar</h3>
            <p>
              Interfaz intuitiva para que tu equipo empiece a vender en minutos.
            </p>
          </div>

          <div className="feature-card">
            <h3>En la nube</h3>
            <p>
              Accede a tu POS desde cualquier dispositivo con conexión a
              internet.
            </p>
          </div>

          <div className="feature-card">
            <h3>Reportes en tiempo real</h3>
            <p>
              Visualiza ventas, productos más vendidos y rendimiento por
              sucursal.
            </p>
          </div>

          <div className="feature-card">
            <h3>Soporte dedicado</h3>
            <p>Equipo de soporte listo para ayudarte cuando lo necesites.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   PRICING
========================= */
/* =========================
   PRICING
========================= */
function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <h2>Planes SITRA POS</h2>
        <p className="subtext">
          Elige el plan que mejor se adapte a tu negocio.
        </p>

        <div className="pricing-grid">
          {/* GRATIS */}
          <div className="plan">
            <h3>Plan Inicial</h3>
            <div className="price">
              <span className="symbol">RD$</span>
              <span className="amount">1.00</span>
              <span className="duration">/mes</span>
            </div>
            <p className="description">Ideal para emprendedores.</p>
            <ul>
              <li>Hasta 10 ventas mensuales</li>
              <li>1 usuario</li>
              <li>Consulta de ventas</li>
              <li>Soporte por correo</li>
            </ul>
            <a
              href="https://app.sitra.do/register"
              className="plan-btn free"
            >
              Empieza gratis
            </a>
          </div>

          {/* ESTÁNDAR */}
          <div className="plan popular">
            <h3>Plan Estándar</h3>
            <div className="price">
              <span className="symbol">RD$</span>
              <span className="amount">1.00</span>
              <span className="duration">/mes</span>
            </div>
            <p className="description">Pequeños negocios en crecimiento.</p>
            <ul>
              <li>Hasta 100 ventas mensuales</li>
              <li>2 usuarios</li>
              <li>Gestión de inventario</li>
              <li>Reportes avanzados</li>
              <li>Soporte chat/correo</li>
            </ul>
            <button disabled>Elegir Plan Estándar</button>
          </div>

          {/* PREMIUM */}
          <div className="plan">
            <h3>Plan Premium</h3>
            <div className="price">
              <span className="symbol">RD$</span>
              <span className="amount">1.00</span>
              <span className="duration">/mes</span>
            </div>
            <p className="description">Negocios en expansión.</p>
            <ul>
              <li>Hasta 300 ventas mensuales</li>
              <li>5 usuarios</li>
              <li>Reportes avanzados</li>
              <li>Integraciones API</li>
              <li>Soporte 24/7</li>
            </ul>
            <button disabled>Elegir Plan Premium</button>
          </div>

          {/* FULL */}
          <div className="plan">
            <h3>Plan Full</h3>
            <div className="price">
              <span className="symbol">RD$</span>
              <span className="amount">1.00</span>
              <span className="duration">/mes</span>
            </div>
            <p className="description">Para empresas y múltiples sucursales.</p>
            <ul>
              <li>Ventas ilimitadas</li>
              <li>Usuarios ilimitados</li>
              <li>Múltiples sucursales</li>
              <li>Integraciones API</li>
              <li>Reportes avanzados</li>
              <li>Reportes personalizados</li>
              <li>Estadísticas avanzadas</li>
              <li>Soporte 24/7</li>
            </ul>
            <button disabled>Elegir Plan Full</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   TESTIMONIALS
========================= */
function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <h2>Lo que dicen nuestros clientes</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="quote">
              “El cierre de caja ahora es rápido y preciso.”
            </p>
            <p className="name">Ana Rodríguez</p>
            <p className="role">Dueña de minimarket</p>
          </div>

          <div className="testimonial-card">
            <p className="quote">“Puedo ver las ventas desde mi celular.”</p>
            <p className="name">Carlos Pérez</p>
            <p className="role">Gerente de tiendas</p>
          </div>

          <div className="testimonial-card">
            <p className="quote">“Inicié con el plan gratis y luego subí.”</p>
            <p className="name">Laura Gómez</p>
            <p className="role">Emprendedora</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   FAQ
========================= */
function FAQ() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container">
        <h2>Preguntas frecuentes</h2>

        <div className="faq-list">
          {[
            {
              q: "¿Necesito instalar algo en mi computadora?",
              a: "SITRA es un sistema en la nube, solo necesitas un navegador.",
            },
            {
              q: "¿Puedo cambiar de plan en cualquier momento?",
              a: "Sí, puedes subir o bajar cuando lo necesites.",
            },
            {
              q: "¿Mis datos están seguros?",
              a: "Usamos servidores seguros y backups periódicos.",
            },
            {
              q: "¿Ofrecen soporte para la puesta en marcha?",
              a: "Sí, te acompañamos en la configuración inicial.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`faq-item ${faqOpen === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.q}
                <span className="faq-icon">+</span>
              </button>

              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   CONTACT
========================= */
function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2>¿Listo para probar SITRA?</h2>
        <p>Déjanos tus datos. (Formulario demostrativo)</p>

        <div className="contact-box">
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="fullName">Nombre completo</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
            />

            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />

            <label htmlFor="phone">Teléfono</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" />

            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              autoComplete="off"
              required
            />

            <button type="submit">Enviar formulario</button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* =========================
   FOOTER
========================= */
function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} SITRA POS. Todos los derechos reservados.
    </footer>
  );
}

/* =========================
   APP
========================= */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
