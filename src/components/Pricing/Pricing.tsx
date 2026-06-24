import { PLANS } from "./pricing-data";
import type { Plan } from "./pricing-data";
import "./Pricing.css";

/* ============================
   CONSTANTS
   ============================ */

const REGISTER_URL = "https://app.sitra.do/register";

/* ============================
   SUB-COMPONENT: PlanCard
   ============================ */

function PlanCard({ name, price, description, features, popular }: Plan) {
  return (
    <div className={`plan ${popular ? "popular" : ""}`}>
      <h3>{name}</h3>

      <div className="price">
        <span className="symbol">RD$</span>
        <span className="amount">{price}</span>
        <span className="duration">/mes</span>
      </div>

      <p className="description">{description}</p>

      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <a href={REGISTER_URL} className="plan-btn free">
        Empieza gratis
      </a>
    </div>
  );
}

/* ============================
   MAIN COMPONENT
   ============================ */

export function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <h2>Planes SITRA POS</h2>
        <p className="subtext">
          Elige el plan que mejor se adapte a tu negocio.
        </p>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
