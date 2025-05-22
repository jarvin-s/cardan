import React from "react";
import Rapport from "@/app/components/rapport/rapport";
import { useTranslations } from "next-intl";
import PageTransition from "@/app/components/transitions/page-transition";

const RapportPage = () => {
  const t = useTranslations("rapport");
  return (
    <PageTransition>
      <Rapport
        title={t("title")}
        text={t("text")}
        text2={t("text2")}
        textBold={t("textBold")}
        ctaText={t("ctaText")}
      />
    </PageTransition>
  );
};

export default RapportPage;
