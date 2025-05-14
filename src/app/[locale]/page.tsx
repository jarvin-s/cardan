import { useTranslations } from "next-intl";
import Hero from "../components/index/hero/hero";

export default function Home() {
  const t = useTranslations("home-page");
  return (
    <>
      <Hero
        title={t("title")}
        description={t("description")}
        branches={{
          government: t("branches.government"),
          businesses: t("branches.businesses"),
          suppliers: t("branches.suppliers"),
        }}
        newButtonText={t("new-button")}
        ctaButtonText={t("cta-button")}
        features={{
          wcag: t.raw("features.wcag"),
          report: t.raw("features.report"),
          certification: t.raw("features.certification"),
          eaa: t.raw("features.eaa"),
        }}
      />
    </>
  );
}
