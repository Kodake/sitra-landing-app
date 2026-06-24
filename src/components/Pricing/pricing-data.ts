/* ============================
   TYPES
   ============================ */

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

/* ============================
   DATA
   ============================ */

export const PLANS: Plan[] = [
  {
    name: "Plan Inicial",
    price: "1.00",
    description: "Ideal para emprendedores.",
    features: [
      "Hasta 10 ventas mensuales",
      "1 usuario",
      "Consulta de ventas",
      "Soporte por correo",
    ],
  },
  {
    name: "Plan Estándar",
    price: "1.00",
    description: "Pequeños negocios en crecimiento.",
    popular: true,
    features: [
      "Hasta 100 ventas mensuales",
      "2 usuarios",
      "Gestión de inventario",
      "Reportes avanzados",
      "Soporte chat/correo",
    ],
  },
  {
    name: "Plan Premium",
    price: "1.00",
    description: "Negocios en expansión.",
    features: [
      "Hasta 300 ventas mensuales",
      "5 usuarios",
      "Reportes avanzados",
      "Integraciones API",
      "Soporte 24/7",
    ],
  },
  {
    name: "Plan Full",
    price: "1.00",
    description: "Para empresas y múltiples sucursales.",
    features: [
      "Ventas ilimitadas",
      "Usuarios ilimitados",
      "Múltiples sucursales",
      "Integraciones API",
      "Reportes avanzados",
      "Reportes personalizados",
      "Estadísticas avanzadas",
      "Soporte 24/7",
    ],
  },
];
