import { TESTIMONIALS } from "./testimonials-data";
import "./Testimonials.css";

/* ============================
   COMPONENT
   ============================ */

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <h2>Lo que dicen nuestros clientes</h2>

        <div className="testimonials-grid">
          {TESTIMONIALS.map(({ quote, name, role }) => (
            <div className="testimonial-card" key={name}>
              <p className="quote">{quote}</p>
              <p className="name">{name}</p>
              <p className="role">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
