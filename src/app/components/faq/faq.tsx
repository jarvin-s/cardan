import React, { useState } from "react";
import styles from "./faq.module.css";

interface FAQProps {
  title: string;
  description: string;
}

const FAQ = ({ title, description }: FAQProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.faqSection}>
      <div
        className={styles.faqCard}
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsExpanded(!isExpanded);
          }
        }}
      >
        <div className={styles.faqHeader}>
          <h3>{title}</h3>
          <div className={styles.expandButton}>
            {isExpanded ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>
        {isExpanded && (
          <div className={styles.faqContent}>
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ArrowDown = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 23 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.74153 0.984408C1.07735 0.618182 1.54481 0.400233 2.04122 0.378436C2.53764 0.356639 3.0224 0.532776 3.38903 0.868158L11.5003 8.29316L19.6078 0.868158C19.7874 0.691807 20.0007 0.553426 20.2349 0.461263C20.4691 0.369099 20.7195 0.325041 20.9711 0.331714C21.2228 0.338387 21.4705 0.395654 21.6995 0.500103C21.9285 0.604552 22.1341 0.754043 22.3041 0.939665C22.4741 1.12529 22.605 1.34324 22.689 1.58053C22.773 1.81782 22.8083 2.06959 22.7929 2.32082C22.7775 2.57206 22.7117 2.81763 22.5993 3.04288C22.487 3.26813 22.3304 3.46845 22.139 3.63191L12.7659 12.2194C12.4203 12.5356 11.9688 12.711 11.5003 12.711C11.0318 12.711 10.5803 12.5356 10.2347 12.2194L0.85778 3.63191C0.491554 3.29609 0.273604 2.82863 0.251807 2.33222C0.23001 1.8358 0.406148 1.35104 0.74153 0.984408Z"
        fill="white"
      />
    </svg>
  );
};

const ArrowUp = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 23 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.2585 12.5156C21.9226 12.8818 21.4552 13.0998 20.9588 13.1216C20.4624 13.1434 19.9776 12.9672 19.611 12.6318L11.4997 5.20684L3.39222 12.6318C3.21261 12.8082 2.99933 12.9466 2.7651 13.0387C2.53087 13.1309 2.28049 13.175 2.02887 13.1683C1.77724 13.1616 1.52954 13.1043 1.30053 12.9999C1.07151 12.8954 0.865871 12.746 0.695866 12.5603C0.525858 12.3747 0.394966 12.1568 0.310993 11.9195C0.227018 11.6822 0.191681 11.4304 0.207087 11.1792C0.222494 10.9279 0.288332 10.6824 0.400671 10.4571C0.51301 10.2319 0.669554 10.0315 0.860968 9.86809L10.2341 1.28059C10.5797 0.964367 11.0312 0.788995 11.4997 0.788995C11.9682 0.788995 12.4197 0.964367 12.7653 1.28059L22.1422 9.86809C22.5084 10.2039 22.7264 10.6714 22.7482 11.1678C22.77 11.6642 22.5939 12.149 22.2585 12.5156Z"
        fill="white"
      />
    </svg>
  );
};

export default FAQ;
