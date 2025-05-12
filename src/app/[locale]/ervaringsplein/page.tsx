import Intro from "@/app/components/intro/intro";
import React from "react";
import { useTranslations } from "next-intl";


const Ervaringsplein = () => {
  const t = useTranslations("welkom-pagina");
  return (
    <>
      <Intro 
       title={t("title")}
       heading={t("heading")}
       paragraaf={t("paragraaf")}
       finalText={t("finalText")}
       button={t("button")}
       />
    </>

  );
};

export default Ervaringsplein;
