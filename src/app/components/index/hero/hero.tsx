"use client";

import Image from "next/image";
import styles from "./hero.module.css";
import { useRouter } from "next/navigation";

interface HeroProps {
  title: string;
  description: string;
  branches: {
    government: string;
    businesses: string;
    suppliers: string;
  };
  newButtonText: string;
  ctaButtonText: string;
  demoText: string;
  newLabel: string;

  features: {
    wcag: string;
    report: string;
    certification: string;
    eaa: string;
  };
}

const Hero = ({
  title,
  description,
  branches,
  newButtonText,
  ctaButtonText,
  demoText,
  newLabel,
  features,
}: HeroProps) => {
  const router = useRouter();

  const handleNewButtonClick = () => {
    router.push("/ervaringsplein");
  };

  const handleCtaButtonClick = () => {
    router.push("https://www.cardan.com/contact");
  };

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroText}>{description}</p>

          <div className={styles.branchList}>
            <div className={styles.branchItem}>
              <svg
                className={styles.branchIcon}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M11.185 1.493a1 1 0 0 1 .813-.013l9.995 4.267a1 1 0 0 1 .607.92V8.8a1 1 0 0 1-1 1H2.4a1 1 0 0 1-1-1V6.667a1 1 0 0 1 .58-.908l9.205-4.266Zm.437 2.001L3.4 7.305V7.8h17.2v-.473l-8.978-3.833ZM4 11.331a1 1 0 0 1 1 1V15a1 1 0 1 1-2 0v-2.67a1 1 0 0 1 1-1Zm5.333 0a1 1 0 0 1 1 1V15a1 1 0 1 1-2 0v-2.67a1 1 0 0 1 1-1Zm5.334 0a1 1 0 0 1 1 1V15a1 1 0 1 1-2 0v-2.67a1 1 0 0 1 1-1Zm5.333 0a1 1 0 0 1 1 1V15a1 1 0 1 1-2 0v-2.67a1 1 0 0 1 1-1ZM1.4 18.4a1 1 0 0 1 1-1h19.2a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1H2.4a1 1 0 0 1-1-1v-3.2Zm2 1v1.2h17.2v-1.2H3.4Z"></path>
              </svg>
              <span className={styles.branchLink}>{branches.government}</span>
            </div>
            <div className={styles.branchItem}>
              <svg
                className={styles.branchIcon}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.18 10.308h2.47a1.79 1.79 0 0 0 1.265-3.055L6.685 6.02a7.993 7.993 0 0 0-2.506 4.287Zm4.184-5.436.965.966a3.79 3.79 0 0 1-2.68 6.47H4.007a8 8 0 0 0 13.392 5.597l-2.4-2.828h-1.613a1 1 0 0 1-.707-.293l-1.385-1.385a1 1 0 0 1-.125-1.261l2.77-4.154a1 1 0 0 1 .831-.446h3.872A7.992 7.992 0 0 0 12 4c-1.31 0-2.545.315-3.636.872Zm11.25 4.666h-4.31l-2.017 3.027.512.512h1.662a1 1 0 0 1 .763.353l2.485 2.93A7.963 7.963 0 0 0 20 12c0-.859-.135-1.686-.386-2.462Zm-.103 9.064A9.962 9.962 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.975 9.975 0 0 0 7.511-3.398Z"
                ></path>
              </svg>
              <span className={styles.branchLink}>{branches.businesses}</span>
            </div>
            <div className={styles.branchItem}>
              <svg
                className={styles.branchIcon}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M4.8 3.4a1.4 1.4 0 0 0-1.4 1.4v14.4a1.4 1.4 0 0 0 1.4 1.4h14.4a1.4 1.4 0 0 0 1.4-1.4V4.8a1.4 1.4 0 0 0-1.4-1.4H4.8ZM1.4 4.8a3.4 3.4 0 0 1 3.4-3.4h14.4a3.4 3.4 0 0 1 3.4 3.4v14.4a3.4 3.4 0 0 1-3.4 3.4H4.8a3.4 3.4 0 0 1-3.4-3.4V4.8Zm8.907 3.493a1 1 0 0 1 0 1.414L8.014 12l2.293 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0Zm3.386 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L15.986 12l-2.293-2.293a1 1 0 0 1 0-1.414Z"></path>
              </svg>
              <span className={styles.branchLink}>{branches.suppliers}</span>
            </div>
          </div>
          <div className={styles.ctaButtonContainer}>
            <button className={styles.newButton} onClick={handleNewButtonClick}>
              {newButtonText}
            </button>
            <button className={styles.ctaButton} onClick={handleCtaButtonClick}>
              {ctaButtonText}
            </button>
          </div>
          <p className={styles.newButtonText}>
            <ArrowUp />
            <span className={styles.newButtonSpan}>{newLabel} </span> {demoText}
          </p>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/images/cardan-team.jpg"
            alt="Cardan team"
            width={584}
            height={584}
          />
        </div>
      </section>
      <div className={styles.featureBanner}>
        <div className={styles.featuresList}>
          <div className={styles.featureItem}>
            <svg
              className={styles.featureIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span dangerouslySetInnerHTML={{ __html: features.wcag }}></span>
          </div>
          <div className={styles.featureItem}>
            <svg
              className={styles.featureIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span dangerouslySetInnerHTML={{ __html: features.report }}></span>
          </div>
          <div className={styles.featureItem}>
            <svg
              className={styles.featureIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span
              dangerouslySetInnerHTML={{ __html: features.certification }}
            ></span>
          </div>
          <div className={styles.featureItem}>
            <svg
              className={styles.featureIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span dangerouslySetInnerHTML={{ __html: features.eaa }}></span>
          </div>
        </div>
      </div>
    </>
  );
};

const ArrowUp = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 70.000000 84.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,84.000000) scale(0.100000,-0.100000)"
        fill="#008743"
        stroke="none"
      >
        <path
          d="M185 807 c-38 -16 -89 -42 -112 -58 -23 -16 -46 -29 -51 -29 -6 0
-12 -7 -15 -15 -12 -29 16 -26 71 8 62 38 118 67 127 67 9 0 -1 -29 -46 -143
-52 -130 -64 -216 -45 -324 36 -209 148 -305 351 -305 124 0 251 30 227 54 -8
8 -29 6 -76 -6 -83 -20 -207 -21 -277 0 -72 22 -138 87 -169 169 -44 115 -36
315 16 389 7 11 23 50 35 88 11 37 24 68 28 68 10 0 21 -84 21 -153 0 -34 5
-49 15 -54 9 -3 18 -3 21 -1 3 3 -1 64 -8 136 -9 102 -16 132 -28 135 -8 2
-46 -10 -85 -26z"
        />
      </g>
    </svg>
  );
};

export default Hero;
