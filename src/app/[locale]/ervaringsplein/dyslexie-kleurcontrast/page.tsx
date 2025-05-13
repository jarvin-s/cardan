import React from "react";
import { useTranslations } from "next-intl";
import Dyslexie from "@/app/components/dyslexie/dyslexie";
import Stationtk from "@/app/components/station/station";
const DyslexieKleurcontrastPage = () => {
  const t = useTranslations("dyslexie");
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
      <Dyslexie
        title={t("title")}
        subtitle={t("subtitle")}
        formTitle={t("form.title")}
        formText={t("form.text")}
        formSubmit={t("form.submit")}
        formFinishButton={t("finish-button")}
        formDyslexie={t("form.dyslexie")}
        formKleurcontrast={t("form.kleurcontrast")}
        formQuestion={t("form.question")}
      />
    </>
  );
};

export default DyslexieKleurcontrastPage;
