import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import styles from "./station.module.css";

export default function Stationtk() {
  const t = useTranslations("stationnav");
  const locale = useLocale();

  // Basis routeprefix afhankelijk van taal
  const basePath = locale === "nl" ? "ervaringsplein" : "experience";

  return (
    <div className={styles.container}>
      <h1 className={styles.titel}>{t("titel")}</h1>
      <div className={styles.navitems}>
        {[1, 2, 3, 4, 5].map((num) => (
          <Link
            key={num}
            href={`/${basePath}/${t(`slug${num}`)}`}
            className={styles.stationLink}
          >
            <div className={styles[`station${num}`]}>
              <div className={styles.balkje}></div>
              <div className={styles.stationTitel}>
                <h1 className={styles.nummer}>{num}</h1>
                <h2 className={styles.naam}>{t(`naam${num}`)}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
