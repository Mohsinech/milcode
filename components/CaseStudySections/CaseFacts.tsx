import React from "react";
import styles from "./case.module.css";
import { FadeIn } from "@/components/Reveal/Reveal";
import type { CaseStudy } from "@/data/projects";

const Lines = ({ lines }: { lines: string[] }) => (
  <>
    {lines.map((line, i) => (
      <React.Fragment key={i}>
        {i > 0 && <br />}
        {line}
      </React.Fragment>
    ))}
  </>
);

const CaseFacts = ({ data }: { data: CaseStudy }) => {
  const { client, scope, stack, liveUrl } = data;
  if (!client && !scope?.length && !stack?.length && !liveUrl) return null;

  // a [bracketed] placeholder isn't a real address yet, so don't link it
  const isUrl = liveUrl?.startsWith("http");
  const liveLabel = liveUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <FadeIn className={styles.facts}>
      {client && (
        <div>
          <div className={styles.factLabel}>Client</div>
          <div className={styles.factValue}>{client}</div>
        </div>
      )}
      {!!scope?.length && (
        <div>
          <div className={styles.factLabel}>Scope</div>
          <div className={styles.factValue}>
            <Lines lines={scope} />
          </div>
        </div>
      )}
      {!!stack?.length && (
        <div>
          <div className={styles.factLabel}>Stack</div>
          <div className={styles.factValue}>
            <Lines lines={stack} />
          </div>
        </div>
      )}
      {liveUrl && (
        <div>
          <div className={styles.factLabel}>Live site</div>
          {isUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.live}
            >
              {liveLabel} ↗
            </a>
          ) : (
            <span className={styles.live}>{liveLabel} ↗</span>
          )}
        </div>
      )}
    </FadeIn>
  );
};

export default CaseFacts;
