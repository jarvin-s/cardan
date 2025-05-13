import Motorisch from "@/app/components/motorisch/motorisch";
import React from "react";
import { useTranslations } from "next-intl";
import Station from "@/app/components/station/station";

const MotorischPage = () => {
  const t = useTranslations("motorisch");
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
