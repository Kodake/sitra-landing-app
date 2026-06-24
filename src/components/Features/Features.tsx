import "./Features.css";

/* ============================
   TYPES
   ============================ */

interface Feature {
  title: string;
  description: string;
}

/* ============================
   DATA
   ============================ */

const FEATURES: Feature[] = [
  {
    title: "Fácil de usar",
    description:
      "Interfaz intuitiva para que tu equipo empiece a vender en minutos.",
  },
  {
    title: "En la nube",
    description:
      "Accede a tu POS desde cualquier dispositivo con conexión a internet.",
  },
  {
    title: "Reportes en tiempo real",
    description:
      "Visualiza ventas, productos más vendidos y rendimiento por sucursal.",
  },
  {
    title: "Soporte dedicado",
    description:
      "Equipo de soporte listo para ayudarte cuando lo necesites.",
  },
];

/* ============================
   COMPONENT
   ============================ */

export function Features() {
  return (
    <section id="features">
      <div className="container">
        <h2>¿Por qué elegir SITRA?</h2>

        <div className="features-grid">
          {FEATURES.map(({ title, description }) => (
            <div className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
