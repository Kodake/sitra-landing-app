import "./Contact.css";

/* ============================
   COMPONENT
   ============================ */

export function Contact() {
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
