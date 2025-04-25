"use client";

import React from "react";
import styles from "./LanguageSwitcher.module.css";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
const LanguageSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();

  const handleLanguageChange = (language: string) => {
    router.push(`/${language}`);
  };

  return (
    <div className={styles.languageSelector}>
      <span
        style={{
          fontWeight: locale === "nl" ? "bold" : "normal",
        }}
        className={styles.languageButton}
        onClick={() => handleLanguageChange("nl")}
      >
        NL
      </span>
      <span className={styles.languageDivider}>|</span>
      <span
        style={{
          fontWeight: locale === "en" ? "bold" : "normal",
        }}
        className={styles.languageButton}
        onClick={() => handleLanguageChange("en")}
      >
        EN
      </span>
    </div>
  );
};

export default LanguageSwitcher;
