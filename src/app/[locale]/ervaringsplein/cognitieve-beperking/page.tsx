import Cognitief from "@/app/components/cognitief/cognitief";
import React from "react";
import { useTranslations } from "next-intl";
import Station from "@/app/components/station/station";

const CognitiefPage = () => {
  const t = useTranslations("cognitief");
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
      <Cognitief
        title={t("title")}
        subtitle={t("subtitle")}
        formTitle={t("form.title")}
        formTimerLabel={t("form.timer-label")}
        formSubtitle={t("form.subtitle")}
        formName={t("form.name")}
        formSubject={t("form.subject")}
        formMessage={t("form.message")}
        formSubmit={t("form.submit")}
        formNext={t("form.next")}
      />
    </>
  );
};

export default CognitiefPage;
