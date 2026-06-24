/* ============================
   TYPES
   ============================ */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/* ============================
   DATA
   ============================ */

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "\u201CEl cierre de caja ahora es rápido y preciso.\u201D",
    name: "Ana Rodríguez",
    role: "Dueña de minimarket",
  },
  {
    quote: "\u201CPuedo ver las ventas desde mi celular.\u201D",
    name: "Carlos Pérez",
    role: "Gerente de tiendas",
  },
  {
    quote: "\u201CInicié con el plan gratis y luego subí.\u201D",
    name: "Laura Gómez",
    role: "Emprendedora",
  },
];
