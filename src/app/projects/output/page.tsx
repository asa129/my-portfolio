import Link from "next/link";
import React from "react";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { MdKeyboardReturn } from "react-icons/md";

export default function page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12  text-muted-foreground">
        <div className="bg-gradient-to-br from-background to-white/30 dark:to-white/10 p-2 rounded-lg">
          <Link href="/" prefetch={false} className="flex items-center gap-2">
            <MdKeyboardReturn />
            Back to Home
          </Link>
        </div>
        <section className="mb-12">
          <h1 className="lg:static sticky top-0 lg:bg-background/0 bg-background/20 lg:text-4xl text-lg text-cyan-600 mb-4">
            アウトプットサポートサービス（開発中）
          </h1>
          <h2 className="mb-4">2025-09 ~ </h2>
          <p className="flex items-center gap-2 lg:text-sm text-xs text-foreground dark:text-foreground/60 mb-2">
            <CiLink />
            <Link href="#" target="_blank">
              #
            </Link>
          </p>
          <p className="flex items-center gap-2 lg:text-sm text-xs text-foreground dark:text-foreground/60 mb-2">
            <FaGithub />
            <Link href="#" target="_blank">
              GitHub
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
