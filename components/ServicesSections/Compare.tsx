import React from "react";
import styles from "./services.module.css";
import section from "@/components/HomeSections/section.module.css";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";

const plans = ["Starter", "Signature", "Care"];

const rows: { label: string; values: [string, string, string] }[] = [
  { label: "Price", values: ["[from PRICE]", "[from PRICE]", "[PRICE] / month"] },
  { label: "Pages", values: ["1 scrolling page", "Up to [5]", "—"] },
  { label: "Custom design", values: ["Light", "Full art direction", "—"] },
  { label: "Editable menu", values: ["Yes", "Yes, multilingual", "We update it"] },
  { label: "Reservations", values: ["Button", "Integrated", "—"] },
  { label: "Local SEO", values: ["Google profile", "Full setup", "Monthly report"] },
  { label: "Timeline", values: ["[2] weeks", "[4–6] weeks", "Ongoing"] },
];

const Compare = () => (
  <section className={section.section}>
    <div className={`${section.head} ${styles.blockHead}`}>
      <div className={`${section.labelCol} ${styles.plainLabel} ${styles.grey}`}>
        Compare
      </div>
      <RevealLines
        as="h2"
        className={section.title}
        lines={[
          <>
            What’s on <span className={section.serif}>each plate.</span>
          </>,
        ]}
      />
    </div>

    <FadeIn>
      {/* scrolls sideways on phones; focusable so keyboards can scroll it */}
      <div
        className={styles.tableWrap}
        role="region"
        aria-label="Package comparison"
        tabIndex={0}
      >
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col" className={styles.colLabel}>
                Included
              </th>
              {plans.map((plan) => (
                <th scope="col" key={plan} className={styles.colPlan}>
                  {plan}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.values.map((value, i) => (
                  <td key={plans[i]}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FadeIn>
  </section>
);

export default Compare;
