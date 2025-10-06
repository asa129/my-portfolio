"use client";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { MdKeyboardReturn, MdOutlineSaveAlt } from "react-icons/md";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArticleType } from "@/types/articleType";
import { useState } from "react";
import { ModeToggle } from "./toggle";

export default function SliceArticles({ data }: { data: ArticleType[] }) {
  const onClickNext = () => {
    if (index == 7) {
      return;
    }
    setIndex(index + 1);
  };

  const onClickPrevious = () => {
    setIndex(index - 1);
  };

  const onClickIndex = (index: number) => {
    setIndex(index);
  };

  const [index, setIndex] = useState(0);
  const displayData = data.slice(index * 8, (index + 1) * 8);
  return (
    <div className="bg-gradient-to-br from-background via-blue-50/30 to-white/30 dark:via-blue-50/10 dark:to-white/10 h-screen min-h-screen overflow-hidden flex flex-col">
      <section id="article" className="m-2 flex-1 min-h-0 flex flex-col">
        <div className="flex justify-start items-center gap-4 xl:text-2xl lg:text-xl text-lg font-bold text-foreground dark:text-foreground/80 mb-4">
          <div className="bg-gradient-to-br from-background to-white/30 dark:to-white/10 p-2 rounded-lg">
            <Link href="/" prefetch={false}>
              <MdKeyboardReturn />
            </Link>
          </div>

          <Link href="/articles" prefetch={false}>
            <h1 className="">My Article</h1>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-4 flex-1 min-h-0 overflow-auto pr-2">
          {displayData != null &&
            displayData.map((article: ArticleType) => {
              return (
                <div
                  key={article.id}
                  className="rounded hover:bg-cyan-200/60 hover:dark:bg-cyan-50/5 hover:text-accent-foreground"
                >
                  <Link href={article.url} target="_blank">
                    <section className="xl:m-4 p-2">
                      <Image
                        src={article.ogpImage}
                        width={300}
                        height={300}
                        alt={article.title}
                        className="rounded-lg"
                      />

                      <div className="mx-2 text-wrap">
                        <h2 className="font-bold text-foreground dark:text-foreground/80 my-2">
                          {article.title}
                        </h2>
                        <p className="text-foreground dark:text-foreground/60 text-sm">
                          {article.body}
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="text-foreground dark:text-foreground/60 flex items-center gap-2">
                            <FaRegHeart />
                            {article.likes_count}
                          </div>
                          <div className="text-foreground dark:text-foreground/60 flex items-center gap-2">
                            <MdOutlineSaveAlt />
                            {article.stocks_count}
                          </div>
                        </div>
                      </div>
                    </section>
                  </Link>
                </div>
              );
            })}
        </div>
      </section>
      <Pagination className="">
        <PaginationContent className="text-foreground dark:text-foreground/80">
          <PaginationItem>
            <PaginationPrevious
              className={`hover:text-cyan-600 ${
                index === 0 ? "text-gray-500" : ""
              }`}
              onClick={onClickPrevious}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => onClickIndex(0)}
              className={`text-foreground dark:text-foreground/80 hover:text-cyan-600 ${
                index + 1 === 1 ? "text-cyan-600 " : ""
              }`}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => onClickIndex(1)}
              className={`text-foreground dark:text-foreground/80 hover:text-cyan-600 ${
                index + 1 === 2 ? "text-cyan-600 " : ""
              }`}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => onClickIndex(2)}
              className={`text-foreground dark:text-foreground/80 hover:text-cyan-600 ${
                index + 1 === 3 ? "text-cyan-600 " : ""
              }`}
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => onClickIndex(7)}
              className={`text-foreground dark:text-foreground/80 hover:text-cyan-600 ${
                index + 1 === 7 ? "text-cyan-600 " : ""
              }`}
            >
              7
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={onClickNext}
              className={`${index === 7 ? "text-gray-500" : ""}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div className="fixed bottom-4 left-4">
        <ModeToggle />
      </div>
    </div>
  );
}
