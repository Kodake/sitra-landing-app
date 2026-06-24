import "./Footer.css";

/* ============================
   COMPONENT
   ============================ */

export function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} SITRA POS. Todos los derechos reservados.
    </footer>
  );
}
