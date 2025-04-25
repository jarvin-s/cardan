import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
const Navbar = () => {
  const t = useTranslations("nav");
  return (
    <header>
      <div className={styles.topBar}>
        <div className={styles.topBarLinks}>
          <ul className={styles.topBarMenu}>
            <li className={styles.topBarMenuItem}>
              <span className={styles.topBarLink}>
                <Link href="/ervaringsplein">{t("ervaring")}</Link>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34m-1.051 6.844a1 1 0 0 0-1.152-.663l-.113.03l-2.684.895l-2.684-.895l-.113-.03a1 1 0 0 0-.628 1.884l.109.044L11 12.22v.976l-1.832 2.75l-.06.1a1 1 0 0 0 .237 1.21l.1.076l.101.06a1 1 0 0 0 1.21-.237l.076-.1L12 15.303l1.168 1.752l.07.093a1 1 0 0 0 1.653-1.102l-.059-.1L13 13.196v-.977l2.316-.771l.109-.044a1 1 0 0 0 .524-1.221zM12 6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"
                />
              </svg>
            </li>
            <li className={styles.topBarMenuItem}>
              <span className={styles.topBarLink}>
                <Link href="/">{t("mijn-cardan")}</Link>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" />
                  <path strokeLinejoin="round" d="m3 21l8-8m0 0H5m6 0v6" />
                </g>
              </svg>
            </li>
            <li className={styles.topBarMenuItem}>
              <span className={styles.topBarLink}>
                <Link href="/">Cookies</Link>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-1.875.725-3.675T4.75 5.112t3.125-2.275t4-.862q.525 0 1.075.05t1.125.175q-.225 1.125.15 2.125t1.125 1.662t1.788.913t2.137-.125q-.65 1.475.188 2.825T21.95 11q.025.275.038.512t.012.513q0 2.05-.788 3.862t-2.137 3.175t-3.175 2.15T12 22m-1.5-12q.625 0 1.063-.437T12 8.5t-.437-1.062T10.5 7t-1.062.438T9 8.5t.438 1.063T10.5 10m-2 5q.625 0 1.063-.437T10 13.5t-.437-1.062T8.5 12t-1.062.438T7 13.5t.438 1.063T8.5 15m6.5 1q.425 0 .713-.288T16 15t-.288-.712T15 14t-.712.288T14 15t.288.713T15 16"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <nav className={styles.mainNav}>
        <div className={styles.navContent}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/logo.svg"
              alt="Cardan logo"
              width={120}
              height={120}
            />
          </Link>
          <div className={styles.navLinks}>
            <div className={styles.navMenuItem}>
              <span>{t("services")}</span>
              <svg
                className={styles.dropdownIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.navMenuItem}>
              <span>{t("industries")}</span>
              <svg
                className={styles.dropdownIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.navMenuItem}>
              <span>{t("knowledge")}</span>
              <svg
                className={styles.dropdownIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.navMenuItem}>
              <span>{t("about")}</span>
              <svg
                className={styles.dropdownIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className={styles.navMenuItem}>
              <span>Contact</span>
            </div>
          </div>
          <div className={styles.navControls}>
            <LanguageSwitcher />
            <button className={styles.themeButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M7.5 12a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0m11.394-5.834a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061zM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75m-3.916 6.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06zM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18m-4.242-.697a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061zM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12m.697-4.243a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06z"
                />
              </svg>
            </button>
            <button className={styles.mobileMenuButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
