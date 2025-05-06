import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header>
      {/* Topbar/paarse balk */}
      <div className={styles.topBar}>
        <div className={styles.topBarLinks}>
          <Link href="/ervaringsplein">Ervaringsplein</Link>
          <Link href="/mijn-cardan">Mijn Cardan</Link>
        </div>
      </div>

      {/* Main navbar/navigatie erin */}
      <nav className={styles.mainNav}>
        <div className={styles.navContent}>
          <Link href="/">
            <Image src="/logo.png" alt="Cardan logo" width={120} height={40} />
          </Link>
          <ul className={styles.navLinks}>
            <li>Onze diensten ▾</li>
            <li>Branches ▾</li>
            <li>Kennisbank ▾</li>
            <li>Over ons ▾</li>
            <li>Contact</li>
          </ul>
          <div className={styles.langSwitch}>
            <strong>NL</strong> | EN
          </div>
        </div>
      </nav>
    </header>
  );
}
