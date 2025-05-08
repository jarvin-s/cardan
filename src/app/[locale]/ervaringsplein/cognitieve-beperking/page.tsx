import Cognitief from "@/app/components/cognitief/cognitief";
import React from "react";
import { useTranslations } from "next-intl";

const CognitiefPage = () => {
  const t = useTranslations("cognitief");
  return (
    <>
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
