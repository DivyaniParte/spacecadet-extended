import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import SolarSystem from "@/components/SolarSystem";
import Stars from "@/components/Stars";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";
import { useTranslations } from "next-intl";
const exo = Exo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "SPACECADET",
  description:
    "Site pioneering aliens can enter criteria and determine extraplanetary travel",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations().raw;
  return (
    <html lang={locale} className={`${exo.variable}`}>
      <body className=" text-white lg:text-xl">
        <div className="fixed right-1/4 top-1/4 scale-[2] -z-10">
          <SolarSystem />
        </div>
        <Header content={t("navigation")} locale={locale} />
        {children}
        <Stars />
      </body>
    </html>
  );
}
