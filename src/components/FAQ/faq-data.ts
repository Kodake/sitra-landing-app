/* ============================
   TYPES
   ============================ */

export interface FAQItem {
  question: string;
  answer: string;
}

/* ============================
   DATA
   ============================ */

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "¿Necesito instalar algo en mi computadora?",
    answer: "SITRA es un sistema en la nube, solo necesitas un navegador.",
  },
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer: "Sí, puedes subir o bajar cuando lo necesites.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer: "Usamos servidores seguros y backups periódicos.",
  },
  {
    question: "¿Ofrecen soporte para la puesta en marcha?",
    answer: "Sí, te acompañamos en la configuración inicial.",
  },
];
