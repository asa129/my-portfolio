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
    <div className="bg-slate-900 h-screen min-h-screen overflow-hidden flex flex-col">
      <section id="article" className="m-2 flex-1 min-h-0 flex flex-col">
        <div className="flex justify-start items-center gap-4 xl:text-2xl lg:text-xl text-lg font-bold text-neutral-50/80 mb-4">
          <div className="bg-slate-800 p-2 rounded-lg">
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
                  className="rounded hover:bg-accent/10 hover:text-accent-foreground"
                >
                  <Link href={article.url} target="_blank">
                    <section className="xl:m-4 p--2">
                      <Image
                        src={article.ogpImage}
                        width={300}
                        height={300}
                        alt={article.title}
                        className="rounded-lg"
                      />

                      <div className="mx-2">
                        <h2 className="font-bold text-neutral-50/80 my-2">
                          {article.title}
                        </h2>
                        <p className="text-neutral-50/60 text-sm">
                          {article.body}
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="text-neutral-50/60 flex items-center gap-2">
                            <FaRegHeart />
                            {article.likes_count}
                          </div>
                          <div className="text-neutral-50/60 flex items-center gap-2">
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
        <PaginationContent className="text-neutral-50/80">
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
              className={`text-neutral-50/80 hover:text-cyan-600 ${
                index + 1 === 1 ? "text-cyan-600 " : ""
              }`}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => onClickIndex(1)}
              className={`text-neutral-50/80 hover:text-cyan-600 ${
                index + 1 === 2 ? "text-cyan-600 " : ""
              }`}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              onClick={() => onClickIndex(2)}
              className={`text-neutral-50/80 hover:text-cyan-600 ${
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
              className={`text-neutral-50/80 hover:text-cyan-600 ${
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
    </div>
  );
}
