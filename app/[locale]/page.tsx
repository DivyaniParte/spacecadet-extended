import GetStarted from "@/components/docs/GetStarted";
import Hero from "@/components/docs/Hero";
import HowItWorks from "@/components/docs/HowItWorks";
import Intro from "@/components/docs/Intro";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("homepage").raw;
  return (
    <main>
      <Hero content={t("hero")} />
      <Intro content={t("intro")} />
      <HowItWorks content={t("howItWorks")} />
      <GetStarted content={t("getStarted")} />
    </main>
  );
}
