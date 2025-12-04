import { useState } from "react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="container">
          <nav>
            <div className="logo">SITRA POS</div>

            {/* Hamburguesa */}
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
                <a href="https://rpos-app-git-pre-prod-kodakes-projects.vercel.app/">
                  Login
                </a>
              </li>
            </ul>
          </nav>

          {/* HERO */}
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

      {/* FEATURES */}
      <section id="features">
        <div className="container">
          <h2>¿Por qué elegir SITRA?</h2>

          <div className="features-grid">
            <div className="feature-card">
              <h3>Fácil de usar</h3>
              <p>
                Interfaz intuitiva para que tu equipo empiece a vender en
                minutos.
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

      {/* PRICING */}
      <section id="pricing">
        <div className="container">
          <h2>Planes SITRA POS</h2>
          <p className="subtext">
            Elige el plan que mejor se adapte a tu negocio.
          </p>

          <div className="pricing-grid">
            {/* Gratis */}
            <div className="plan">
              <h3>Plan Gratis</h3>
              <div className="price">
                US$ 0<span>/mes</span>
              </div>
              <p className="description">Ideal para emprendedores.</p>
              <ul>
                <li>Hasta 100 ventas mensuales</li>
                <li>1 usuario</li>
                <li>Reporte básico</li>
                <li>Soporte por correo</li>
              </ul>
              <button>Empieza gratis</button>
            </div>

            {/* Estándar */}
            <div className="plan popular">
              <h3>Plan Estándar</h3>
              <div className="price">
                US$ 9.85<span>/mes</span>
              </div>
              <p className="description">Pequeños negocios en crecimiento.</p>
              <ul>
                <li>Ventas ilimitadas</li>
                <li>Hasta 3 usuarios</li>
                <li>Gestión de inventario</li>
                <li>Reportes avanzados</li>
                <li>Soporte chat/correo</li>
              </ul>
              <button>Elegir Plan Estándar</button>
            </div>

            {/* Premium */}
            <div className="plan">
              <h3>Plan Premium</h3>
              <div className="price">
                US$ 19.25<span>/mes</span>
              </div>
              <p className="description">Para varias sucursales.</p>
              <ul>
                <li>Ventas ilimitadas</li>
                <li>Usuarios ilimitados</li>
                <li>Múltiples sucursales</li>
                <li>Integraciones API</li>
                <li>Soporte 24/7</li>
              </ul>
              <button>Elegir Plan Premium</button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
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

      {/* FAQ */}
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
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
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

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <h2>¿Listo para probar SITRA?</h2>
          <p>Déjanos tus datos. (Formulario demostrativo)</p>

          <div className="contact-box">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nombre completo" required />
              <input type="email" placeholder="Correo electrónico" required />
              <input type="text" placeholder="Teléfono (opcional)" />
              <textarea
                rows={4}
                placeholder="Cuéntanos sobre tu negocio"
                required
              />
              <button type="submit">Enviar formulario</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        © {new Date().getFullYear()} SITRA POS. Todos los derechos reservados.
      </footer>
    </>
  );
}
