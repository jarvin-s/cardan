// import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./intro.module.css";

export default function Intro() {
    const t = useTranslations("welkom-pagina");
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>{t("title")}</h1>
          <p className={styles.subheading}>{t("heading")}</p>
          <p className={styles.paragraph}>{t("paragraaf")}</p>
          <p className={styles.finalText}>{t("finaltext")}</p>
          <button className={styles.button}>{t("button")}</button>
        </div>
      </div>
    );
}
