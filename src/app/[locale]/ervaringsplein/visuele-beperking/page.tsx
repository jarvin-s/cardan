import Visuele from "@/app/components/visuele/visuele";
import Station from "@/app/components/station/station";
import React from "react";
import { useTranslations } from "next-intl";

const VisuelePage = () => {
  const t = useTranslations("visuele");
  const t2 = useTranslations("stationnav");
  const stations = [
    { naam: "Visuele beperking", slug: "visuele-beperking" },
    { naam: "Auditieve beperking", slug: "auditieve-beperking" },
    { naam: "Cognitieve beperking", slug: "cognitieve-beperking" },
    { naam: "Motorische beperking", slug: "motorische-beperking" },
    { naam: "Dyslexie & kleurcontrast", slug: "dyslexie-kleurcontrast" },
  ];
  return (
    <>
      <Station title={t2("title")} stations={stations} />
      <Visuele
        title={t("title")}
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
