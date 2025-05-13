import Image from "next/image";
import styles from "./hero.module.css";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("home-page");
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t("title")}</h1>
          <p className={styles.heroText}>{t("description")}</p>

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
              <span className={styles.branchLink}>
                {t("branches.government")}
              </span>
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
              <span className={styles.branchLink}>
                {t("branches.businesses")}
              </span>
            </div>
            <div className={styles.branchItem}>
              <svg
                className={styles.branchIcon}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M4.8 3.4a1.4 1.4 0 0 0-1.4 1.4v14.4a1.4 1.4 0 0 0 1.4 1.4h14.4a1.4 1.4 0 0 0 1.4-1.4V4.8a1.4 1.4 0 0 0-1.4-1.4H4.8ZM1.4 4.8a3.4 3.4 0 0 1 3.4-3.4h14.4a3.4 3.4 0 0 1 3.4 3.4v14.4a3.4 3.4 0 0 1-3.4 3.4H4.8a3.4 3.4 0 0 1-3.4-3.4V4.8Zm8.907 3.493a1 1 0 0 1 0 1.414L8.014 12l2.293 2.293a1 1 0 0 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0Zm3.386 0a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L15.986 12l-2.293-2.293a1 1 0 0 1 0-1.414Z"></path>
              </svg>
              <span className={styles.branchLink}>
                {t("branches.suppliers")}
              </span>
            </div>
          </div>
          <div className={styles.ctaButtonContainer}>
            <button className={styles.newButton}>
              {t("new-button")}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={styles.arrowIcon}
              >
                <path d="M13.293 7.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L15.586 13H7a1 1 0 1 1 0-2h8.586l-2.293-2.293a1 1 0 0 1 0-1.414z" />
              </svg>
            </button>
            <button className={styles.ctaButton}>{t("cta-button")}</button>
          </div>
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
            <span>
              {t.rich("features.wcag", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </span>
          </div>
          <div className={styles.featureItem}>
            <svg
              className={styles.featureIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span>
              {t.rich("features.report", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </span>
          </div>
          <div className={styles.featureItem}>
            <svg
              className={styles.featureIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span>
              {t.rich("features.certification", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </span>
          </div>
          <div className={styles.featureItem}>
            <svg
              className={styles.featureIcon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
            <span>
              {t.rich("features.eaa", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
