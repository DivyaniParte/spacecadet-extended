import Hero from "@/components/docs/Hero";
import SubmitWork from "@/components/docs/SubmitWork";
import Intro from "@/components/docs/Intro";
import Features from "@/components/docs/Features";
import { useTranslations } from "next-intl";

export default function Frontend() {
  const t = useTranslations("frontend").raw;

  return (
    <main>
      <Hero content={t("hero")} />
      <Intro content={t("intro")} />
      <Features content={t("features")} />
      <SubmitWork content={t("submitWork")} />
    </main>
  );
}
