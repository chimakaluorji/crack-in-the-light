// ==========================================
// ✅ Icon Imports: Benefits SVG illustrations
// ==========================================
import CostEffectiveness from "./assets/images/cost-effectiveness.svg";
import DiversityOfSolution from "./assets/images/diversity-of-solution.svg";
import CustomerService from "./assets/images/customer-service.svg";
import Quality from "./assets/images/quality.svg";
import LowerPollution from "./assets/images/lower-pollution.svg";
import InventoryControl from "./assets/images/inventory-control.svg";

// ====================================================
// ✅ Benefits Data
// Used in Homepage to show key RMC advantages
// Each benefit contains an icon, title, and description
// ====================================================
export const benefits = [
  {
    icon: CostEffectiveness,
    name: "Cost-Effectiveness",
    description:
      "Ready mixed concrete is more cost-effective because: materials are not stored onsite, reducing the need for space; " +
      "plant/machinery for mixing is not required; wastage of materials is avoided; labor needs are reduced; and the overall production process is faster.",
  },
  {
    icon: DiversityOfSolution,
    name: "Diversity of Solutions",
    description:
      "A wide variety of ready mixed concrete can be produced on-demand by varying the ratios of cement, aggregates, " +
      "and admixtures to meet specific construction needs.",
  },
  {
    icon: CustomerService,
    name: "Customer Service",
    description:
      "RMC ensures excellent customer service through flexible delivery scheduling, availability of multiple mixer trucks, " +
      "and support for complex worksites via pumps, conveyors, and other tools.",
  },
  {
    icon: Quality,
    name: "Quality",
    description:
      "Produced in automated batching plants, RMC ensures superior and consistent quality by using well-controlled raw materials " +
      "and strict quality checks throughout production and delivery.",
  },
  {
    icon: LowerPollution,
    name: "Lower Pollution",
    description:
      "Since mixing occurs at a centralized plant, RMC significantly reduces air and noise pollution at construction sites.",
  },
  {
    icon: InventoryControl,
    name: "Inventory Control",
    description:
      "With RMC, material usage is optimized and monitored, enabling better inventory control and minimizing resource wastage.",
  },
];
