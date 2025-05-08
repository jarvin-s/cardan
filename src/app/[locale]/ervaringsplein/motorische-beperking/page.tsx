import Motorisch from "@/app/components/motorisch/motorisch";
import React from "react";
import { useTranslations } from "next-intl";

const MotorischPage = () => {
  const t = useTranslations("motorisch");
  return (
    <>
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
