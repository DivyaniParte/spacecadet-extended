import { useTranslations } from "next-intl";
import Content from "./Content";

export default function Hero({ content }: { content: any }) {
  return (
    <div className="bg-gradient-to-t from-black to-transparent">
      <div className=" min-h-[90vh] w-full pt-24 bg-gradient-to-r from-black to-transparent z-30 flex flex-col justify-end px-10 lg:px-24">
        <Content titleTag="h1" content={content} className={""} />
      </div>
    </div>
  );
}
