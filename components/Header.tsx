"use client";

import Link from "next/link";
import Button from "./Button";
import { Listbox } from "@headlessui/react";
import { usePathname } from "../navigation";

function Header({ content, locale }: { content: any; locale: string }) {
  const path = usePathname();
  return (
    <header className=" py-10 lg:px-24  absolute w-full z-40 flex lg:flex-row justify-between items-center flex-col">
      <a
        href="/"
        className="text-2xl font-bold mb-5 lg:mb-0 hover:text-violet-500 transition-colors"
      >
        SPACECADET
      </a>
      <nav className="flex gap-5 flex-row items-center">
        <Button
          label={locale === "en" ? "vk" : "en"}
          link={locale === "en" ? "/vk" : "/en" + path}
        />
        <Listbox as="div" className="relative text-center">
          <Listbox.Button
            className={`border-2 border-violet-500 px-5 py-3 lg:px-10 lg:py-4 rounded-full appearance-none bg-black text-center hover:bg-violet-950 `}
          >
            {content.instructions}
          </Listbox.Button>
          <Listbox.Options className="absolute w-full border-2 border-violet-500 p-4 rounded-3xl bg-black mt-3 z-20  transition-colors">
            <Listbox.Option
              key="frontend"
              value="frontend"
              className="cursor-pointer hover:text-violet-500 rounded-full"
            >
              <Link href="/frontend">{content.frontend}</Link>
            </Listbox.Option>
            <Listbox.Option
              key="backend"
              value="backend"
              className="cursor-pointer hover:text-violet-500 rounded-full"
            >
              <Link href="/fullstack">{content.fullstack}</Link>
            </Listbox.Option>
          </Listbox.Options>
        </Listbox>
        <Button link="/planner" label={content.plan} type="primary"></Button>
      </nav>
    </header>
  );
}

export default Header;
