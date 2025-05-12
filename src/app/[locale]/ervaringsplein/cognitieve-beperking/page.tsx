import Cognitief from "@/app/components/cognitief/cognitief";
import React from "react";
import { useTranslations } from "next-intl";
import Stationtk from "@/app/components/station/station";

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
      <Stationtk title={t2("title")} stations={stations} />
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
