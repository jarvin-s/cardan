import React from "react";
import styles from "./ervaringsplein.module.css";
import { useTranslations } from "next-intl";

const Ervaringsplein = () => {
  const t = useTranslations("ervaringsplein");
  return (
    <div className={styles.container}>
      <h1>{t("title")}</h1>
    </div>
  );
};

export default Ervaringsplein;
