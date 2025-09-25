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

    let currentActive: string | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        //  e.isIntersecting: 画面内に入っているか
        //  e.intersectionRatio: 画面内に入っている割合
        //  sortで画面内に入っている割合の大きい順に並べる
        // 複数のセクションが同時に画面内にある場合、最も大きく表示されているものを選ぶ
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
          );

        if (visible.length > 0) {
          // 一番大きい(画面に表示されている割合が大きい)要素（セクション）をとる
          console.log(visible[0].target.id);
          const id = visible[0].target.id;
          if (currentActive !== id) {
            currentActive = id;
            setActiveId(id);
          }
        } else {
          // boundingClientRect.top: 画面の上部からセクションの上部までの距離
          // 画面の上部から最も近いセクションを選ぶ
          const topMost = entries
            .slice()
            .sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
            )[0];
          if (topMost) {
            const fallbackId = topMost.target.id;
            if (currentActive !== fallbackId) {
              currentActive = fallbackId;
              setActiveId(fallbackId);
            }
          }
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px", // 画面中央付近で切り替え
        threshold: [0.25, 0.5, 0.75],
      }
    );

    // セクションを監視する
    sections.forEach((sec) => observer.observe(sec));

    // コンポーネントが画面から消えるときに、監視を解除する
    return () => observer.disconnect();
  }, []);

  return (
    console.log(activeId),
    (
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
                    : "bg-neutral-50/60"
                } transition-all duration-300 group-hover:w-34 group-hover:bg-neutral-50/90 mr-2 col-span-1`}
              />
              <p
                className={`xl:text-2xl lg:text-xl ${
                  activeId === navItem.id
                    ? "text-cyan-600/90"
                    : "text-neutral-50/60"
                } group-hover:text-neutral-50/90 group-hover:font-bold col-span-1`}
              >
                {navItem.label}
              </p>
            </Link>
          );
        })}
      </div>
    )
  );
}
