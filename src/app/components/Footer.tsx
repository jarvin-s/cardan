import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image src="/footerimages/footer.png" alt="Cardan logo" width={150} height={40} />
      </div>

      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Digitale toegankelijkheid</h3>
          <ul>
            <li><Link href="#">Diensten</Link></li>
            <li><Link href="#">Branches</Link></li>
            <li><Link href="#">De WCAG</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Inschrijven nieuwsbrief</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Cardan</h3>
          <ul>
            <li><Link href="#">Over Cardan</Link></li>
            <li><Link href="#">Onze mensen</Link></li>
            <li><Link href="#">Vacatures</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:contact@cardan.com">contact@cardan.com</a></li>
            <li><a href="tel:+31885004070">+31 (0)88 500 4070</a></li>
            <li>Burgemeester Brokxlaan 32<br />5041 SB Tilburg</li>
          </ul>
          <div className={styles.socials}>
            <Image src="/footerimages/linkedin.png" alt="LinkedIn" width={24} height={24} />
            <Image src="/footerimages/instagram.png" alt="Instagram" width={24} height={24} />
            <Image src="/footerimages/youtube.png" alt="YouTube" width={24} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
