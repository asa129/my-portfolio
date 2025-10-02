"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [mode, setMode] = React.useState("light");

  const handleToggleTheme = (mode: string) => {
    setTheme(mode === "light" ? "dark" : "light");
    setMode(mode === "light" ? "dark" : "light");
  };

  React.useEffect(() => {
    setMode("light");
  }, []);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => handleToggleTheme(mode)}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
