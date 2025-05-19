import Visuele from "@/app/components/visuele/visuele";
import Station from "@/app/components/station/station";
import React from "react";
import { useTranslations } from "next-intl";

const VisuelePage = () => {
  const t = useTranslations("visuele");
  const t2 = useTranslations("stationnav");
  const stations = [
    { naam: "Kleurenblindheid", slug: "kleurenblindheid" },
    { naam: "Auditieve beperking", slug: "auditieve-beperking" },
    { naam: "Cognitieve beperking", slug: "cognitieve-beperking" },
    { naam: "Motorische beperking", slug: "motorische-beperking" },
    { naam: "Dyslexie", slug: "dyslexie" },
  ];
  return (
    <>
      <Station
        stations={stations}
        naam1={t2("naam1")}
        slug1={t2("slug1")}
        naam2={t2("naam2")}
        slug2={t2("slug2")}
        naam3={t2("naam3")}
        slug3={t2("slug3")}
        naam4={t2("naam4")}
        slug4={t2("slug4")}
        naam5={t2("naam5")}
        slug5={t2("slug5")}
      />
      <Visuele
        title={t("title")}
        paragraaf={t("paragraaf")}
        subtekst={t("subtekst")}
        opdracht={t("opdracht")}
        hoofdnaam={t("hoofdnaam")}
        combi1={t("combi1")}
        combi2={t("combi2")}
        combi3={t("combi3")}
        volgende={t("volgende")}
        reserved_message={t("reserved_message")}
        success_message={t("success_message")}
      />
    </>
  );
};

export default VisuelePage;
