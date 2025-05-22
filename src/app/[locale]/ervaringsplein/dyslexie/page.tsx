import React from "react";
import { useTranslations } from "next-intl";
import Dyslexie from "@/app/components/dyslexie/dyslexie";
import Station from "@/app/components/station/station";
import PageTransition from "@/app/components/transitions/page-transition";

const DyslexiePage = () => {
  const t = useTranslations("dyslexie");
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
      <PageTransition>
        <Dyslexie
          title={t("title")}
          subtitle={t("subtitle")}
          formTitle={t("form.title")}
          formText={t("form.text")}
          formSubmit={t("form.submit")}
          formQuestion={t("form.question")}
          formPlaceholder={t("form.placeholder")}
          dyslexie={t("form.dyslexie")}
          introText={t("form.intro-text")}
          startInstruction={t("form.start-instruction")}
        />
      </PageTransition>
    </>
  );
};

export default DyslexiePage;
