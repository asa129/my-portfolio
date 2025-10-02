"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NavItems() {
  const navItems: { id: string; label: string }[] = [
    { id: "about", label: "ABOUT" },
    { id: "project", label: "Projects" },
    { id: "article", label: "Article" },
    { id: "experience", label: "Experience" },
  ];
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // navItemをループして、idと一致する要素（<section id="about">）をとる
    // nullじゃない要素をとる
    const sections: HTMLElement[] = navItems
      .map((item) => document.getElementById(item.id) as HTMLElement | null)
      .filter((element): element is HTMLElement => !!element);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        //  e.isIntersecting: 画面内に入っているか
        //  e.intersectionRatio: 画面内に入っている割合
        //  画面内に入っている割合が25%以上の要素をとる
        entries.map((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.25) {
            setActiveId(e.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0.25],
      }
    );

    // セクションを監視する
    sections.forEach((sec) => observer.observe(sec));

    // コンポーネントが画面から消えるときに、監視を解除する
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col space-y-2 ml-0">
      {navItems.map((navItem) => {
        return (
          <Link
            key={navItem.id}
            href={`#${navItem.id}`}
            scroll={true}
            className="group grid grid-cols-2 gap-2 items-center"
          >
            <div
              className={`h-px w-24 ${
                activeId === navItem.id
                  ? "bg-cyan-600/90"
                  : "bg-sidebar-foreground dark:bg-foreground/60"
              } transition-all duration-300 group-hover:w-32 mr-2 col-span-1`}
            />
            <p
              className={`xl:text-2xl lg:text-xl ${
                activeId === navItem.id
                  ? "text-cyan-600/90"
                  : "text-foreground dark:text-foreground/60"
              }  group-hover:font-bold col-span-1`}
            >
              {navItem.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
