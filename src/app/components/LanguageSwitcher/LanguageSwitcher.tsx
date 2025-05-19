"use client";

import React from "react";
import styles from "./LanguageSwitcher.module.css";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLocale = (newLocale: string) => {
    const newPathname = `/${newLocale}${pathname.substring(locale.length + 1)}`;
    router.replace(newPathname);
  };

  return (
    <div className={styles.languageSelector}>
      <span
        style={{
          fontWeight: locale === "nl" ? "bold" : "normal",
        }}
        className={styles.languageButton}
        onClick={() => changeLocale("nl")}
      >
        NL
      </span>
      <span className={styles.languageDivider}>|</span>
      <span
        style={{
          fontWeight: locale === "en" ? "bold" : "normal",
        }}
        className={styles.languageButton}
        onClick={() => changeLocale("en")}
      >
        EN
      </span>
    </div>
  );
};

export default LanguageSwitcher;
