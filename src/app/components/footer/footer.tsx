import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footerdeel");
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image src="/images/footer/logo-wit.png" alt="Cardan logo" width={183} height={28} />
      </div>

      <div className={styles.columns}>
        <div className={styles.column}>
          <h3 className="titel1">{t("titel1")}</h3>
          <ul>
            <li><Link href="#">{t("diensten")}</Link></li>
            <li><Link href="#">{t("branches")}</Link></li>
            <li><Link href="#">{t("wcag")}</Link></li>
            <li><Link href="#">{t("blog")}</Link></li>
            <li><Link href="#">{t("nieuwsbrief")}</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className="titel2">{t("titel2")}</h3>
          <ul>
            <li><Link href="#">{t("over-cardan")}</Link></li>
            <li><Link href="#">{t("onze-mensen")}</Link></li>
            <li><Link href="#">{t("vacatures")}</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className="titel3">{t("titel3")}</h3>
          <ul>
            <li><a href="#">
              {t.rich("email", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
              </a></li>
            <li><a href="#">
            {t.rich("telefoon", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
              </a></li>
            <li>Burgemeester Brokxlaan 32<br />5041 SB Tilburg</li>
          </ul>
          <div className={styles.socials}>
            <Image src="/images/footer/linkedin.png" alt="LinkedIn" width={48} height={48} />
            <Image src="/images/footer/instagram.png" alt="Instagram" width={48} height={48} />
            <Image src="/images/footer/youtube.png" alt="YouTube" width={48} height={48} />
          </div>
        </div>
      </div>
    </footer>
  );
}