import Planner from "@/components/Planner";
import { useTranslations } from "next-intl";

export default function PlannerPage() {
  const t = useTranslations().raw;
  return (
    <main className="">
      <Planner content={t("planner")} />
    </main>
  );
}
