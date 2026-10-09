import React from "react";
import styles from "./services.module.css";
import section from "@/components/HomeSections/section.module.css";
import { RevealLines, FadeIn } from "@/components/Reveal/Reveal";
import { Link } from "next-view-transitions";

const devStack = [
  { name: "Next.js", note: "Fast, SEO-friendly pages" },
  { name: "Headless CMS", note: "Edit menus without us" },
  { name: "Motion", note: "GSAP, Lenis smooth scroll" },
  { name: "Hosting", note: "Domain, SSL, backups" },
];

const menuFeatures = [
  "Editable digital menu",
  "Multilingual (AR · FR · EN · [more])",
  "Table QR codes",
  "Booking tool, WhatsApp or call button",
  "Allergens & dietary tags",
];

const visibility = [
  { tag: "Google", text: "Business Profile setup & cleanup" },
  { tag: "Search", text: "Local SEO, structured menu data" },
  { tag: "Social", text: "Link in bio & share previews" },
  { tag: "Speed", text: "Core Web Vitals, monthly checks" },
];

// 01 — Website design
export const DesignService = () => (
  <section id="design" className={`${styles.service} ${styles.bordered}`}>
    <div className={styles.row}>
      <div className={`${section.labelCol} ${styles.num}`}>01</div>
      <div className={section.mainCol}>
        <RevealLines
          as="h2"
          className={styles.serviceTitle}
          lines={[
            <>
              Website <span className={styles.italic}>design</span>
            </>,
          ]}
        />
        <FadeIn>
          <p className={styles.body}>
            We start from your room, your plates and your guests — not a
            template. Every layout is designed in Figma, animated where it adds
            appetite, and reviewed with you on a real phone before a line of
            code is written.
          </p>
        </FadeIn>
        <FadeIn className={styles.facts}>
          <div className={styles.fact}>
            <div className={styles.factLabel}>You get</div>
            <ul className={styles.list}>
              <li>Moodboard &amp; art direction</li>
              <li>Desktop + mobile designs</li>
              <li>Motion &amp; interaction specs</li>
              <li>Photo &amp; video direction</li>
            </ul>
          </div>
          <div className={styles.fact}>
            <div className={styles.factLabel}>Good for</div>
            <p className={styles.factText}>
              New openings, rebrands, and places whose Instagram looks better
              than their website.
            </p>
          </div>
          <div className={styles.fact}>
            <div className={styles.factLabel}>Timing</div>
            <p className={styles.factText}>
              [2] weeks, two rounds of feedback included.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>

    <FadeIn>
      <Link href="/work/monch" className={styles.featured}>
        <span className={`${section.placeholder} ${styles.featuredMedia}`}>
          [ Monch — design frames ]
        </span>
        <span className={styles.featuredInfo}>
          <span className={styles.factLabel}>Featured project</span>
          <span className={styles.featuredName}>Monch — M001 ↗</span>
        </span>
      </Link>
    </FadeIn>
  </section>
);

// 02 — Development (dark)
export const DevService = () => (
  <section id="dev" className={`${styles.service} ${styles.dark}`}>
    <div className={styles.row}>
      <div className={`${section.labelCol} ${styles.num}`}>02</div>
      <div className={section.mainCol}>
        <RevealLines
          as="h2"
          className={styles.serviceTitle}
          lines={[
            <>
              Develop<span className={styles.italic}>ment</span>
            </>,
          ]}
        />
        <FadeIn>
          <p className={styles.body}>
            Hand-built with Next.js — fast on a weak 4G signal, smooth on
            scroll, and easy for your team to update. We handle the boring
            parts too: domain, hosting, SSL, analytics.
          </p>
        </FadeIn>
        <FadeIn>
          <ul className={styles.stack}>
            {devStack.map((item) => (
              <li key={item.name} className={styles.stackItem}>
                <span className={styles.stackName}>{item.name}</span>
                <span className={styles.stackNote}>{item.note}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </div>
  </section>
);

// 03 — Menus & bookings
export const MenusService = () => (
  <section id="menus" className={`${styles.service} ${styles.bordered}`}>
    <div className={styles.row}>
      <div className={`${section.labelCol} ${styles.num}`}>03</div>
      <div className={`${section.mainCol} ${styles.menus}`}>
        <div className={styles.menusText}>
          <RevealLines
            as="h2"
            className={styles.serviceTitle}
            lines={[
              <>
                Menus &amp; <span className={styles.italic}>bookings</span>
              </>,
            ]}
          />
          <FadeIn>
            <p className={styles.body}>
              A real menu page, not a blurry PDF. Update a price or a dish in a
              minute, show it in Arabic, French and English, and put a booking
              button exactly where hungry people look for it.
            </p>
            <ul className={`${styles.list} ${styles.menuList}`}>
              {menuFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
        <FadeIn className={`${section.placeholder} ${styles.phone}`}>
          [ Phone mockup — menu page ]
        </FadeIn>
      </div>
    </div>
  </section>
);

// 04 — Visibility
export const VisibilityService = () => (
  <section id="visibility" className={styles.service}>
    <div className={styles.row}>
      <div className={`${section.labelCol} ${styles.num}`}>04</div>
      <div className={section.mainCol}>
        <RevealLines
          as="h2"
          className={styles.serviceTitle}
          lines={[
            <>
              Visi<span className={styles.italic}>bility</span>
            </>,
          ]}
        />
        <FadeIn>
          <p className={styles.body}>
            When someone nearby searches “dinner near me”, you should be there
            — with the right hours, photos and a link that works.
          </p>
        </FadeIn>
        <ul className={styles.cards}>
          {visibility.map((card, i) => (
            <li key={card.tag}>
              <FadeIn className={styles.card} delay={i * 0.08}>
                <span className={styles.factLabel}>{card.tag}</span>
                <span className={styles.cardText}>{card.text}</span>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
