import Motorisch from "@/app/components/motorisch/motorisch";
import React from "react";
import { useTranslations } from "next-intl";
import Stationtk from "@/app/components/station/station";

const MotorischPage = () => {
  const t = useTranslations("motorisch");
  const stations = [
    { naam: "Visuele beperking", slug: "visuele-beperking" },
    { naam: "Auditieve beperking", slug: "auditieve-beperking" },
    { naam: "Cognitieve beperking", slug: "cognitieve-beperking" },
    { naam: "Motorische beperking", slug: "motorische-beperking" },
    { naam: "Dyslexie & kleurcontrast", slug: "dyslexie-kleurcontrast" },
  ];
  return (
    <>
      <Stationtk stations={stations} />
      <Motorisch
        title={t("title")}
        subtitle={t("subtitle")}
        formTitle={t("form.title")}
        formSubtitle={t("form.subtitle")}
        formName={t("form.name")}
        formLastname={t("form.lastname")}
        formAddress={t("form.address")}
        formPostcode={t("form.postcode")}
        formSubmit={t("form.submit")}
        formNext={t("form.next")}
        formTimerLabel={t("form.timer-label")}
        formCerebralPalsy={t("form.cerebral-palsy")}
        formMultipleSclerosis={t("form.multiple-sclerosis")}
      />
    </>
  );
};

export default MotorischPage;
