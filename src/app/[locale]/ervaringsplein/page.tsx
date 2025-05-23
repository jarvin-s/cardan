import Intro from "@/app/components/intro/intro";
import React from "react";
import { useTranslations } from "next-intl";
import PageTransition from "@/app/components/transitions/page-transition";

const Ervaringsplein = () => {
  const t = useTranslations("welkom-pagina");
  return (
    <>
      <PageTransition>
        <Intro
          title={t("title")}
          heading={t("heading")}
          paragraaf={t("paragraaf")}
          finalText={t("finalText")}
          button={t("button")}
        />
      </PageTransition>
    </>
  );
};

export default Ervaringsplein;
