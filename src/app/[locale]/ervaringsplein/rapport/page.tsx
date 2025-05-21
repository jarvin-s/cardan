import React from "react";
import Rapport from "@/app/components/rapport/rapport";
import { useTranslations } from "next-intl";

const RapportPage = () => {
  const t = useTranslations("rapport");
  return (
    <Rapport
      title={t("title")}
      text={t("text")}
      text2={t("text2")}
      textBold={t("textBold")}
      ctaText={t("ctaText")}
    />
  );
};

export default RapportPage;
