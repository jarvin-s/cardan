import Visuele from "@/app/components/visuele/visuele";
import Station from "@/app/components/station/station";
import React from "react";
import { useTranslations } from "next-intl";

const VisuelePage = () => {
  const t = useTranslations("visuele");
  return (
    <>
      <Station />
      <Visuele
        titel={t("titel")}
        paragraaf={t("paragraaf")}
        subtekst={t("subtekst")}
        opdracht={t("opdracht")}
        kleur1={t("kleur1")}
        kleur2={t("kleur2")}
        status1={t("status1")}
        status2={t("status2")}
        hoofdnaam={t("hoofdnaam")}
        combi1={t("combi1")}
        combi2={t("combi2")}
        combi3={t("combi3")}
        volgende={t("volgende")}
      />
    </>
  );
};

export default VisuelePage;

