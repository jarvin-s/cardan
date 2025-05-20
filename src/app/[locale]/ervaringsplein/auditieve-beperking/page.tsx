import Auditieve from "@/app/components/auditieve/auditieve";
import Station from "@/app/components/station/station";
import React from "react";
import { useTranslations } from "next-intl";

const AuditievePage = () => {
  const t = useTranslations("auditieve");
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
      <Auditieve
        title={t("title")}
        subtext={t("subtext")}
        blocktitle1={t("blocktitle1")}
        subtext1={t("subtext1")}
        soort1={t("soort1")}
        omschrijving1={t("omschrijving1")}
        soort2={t("soort2")}
        omschrijving2={t("omschrijving2")}
        soort3={t("soort3")}
        omschrijving3={t("omschrijving3")}
        soort4={t("soort4")}
        omschrijving4={t("omschrijving4")}
        naarluisteren={t("naarluisteren")}
        blocktitle2={t("blocktitle2")}
        subtext2={t("subtext2")}
        gehoord={t("gehoord")}
        blocktitle3={t("blocktitle3")}
        subtext3={t("subtext3")}
        antwoord1={t("antwoord1")}
        antwoord2={t("antwoord2")}
        antwoord3={t("antwoord3")}
        antwoord4={t("antwoord4")}
        antwoord5={t("antwoord5")}
        antwoord6={t("antwoord6")}
        blocktitle4={t("blocktitle4")}
        headtext4={t("headtext4")}
        subtext4={t("subtext4")}
        opnieuw={t("opnieuw")}
        blocktitle5={t("blocktitle5")}
        headtext5={t("headtext5")}
        subtext5={t("subtext5")}
        ander={t("ander")}
        naarcognitief={t("naarcognitief")}
        nietnormaal1={t("nietnormaal1")}
      />
    </>
  );
};

export default AuditievePage;
