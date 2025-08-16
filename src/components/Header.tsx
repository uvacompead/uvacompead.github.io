"use client";

import Link from "next/link";
import { cn } from "../lib/utils";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import ShadcnSidebar from "./shadcn-sidebar";
import { useEffect, useState } from "react";

export default function Header() {
  // Sidebar state is derived from query string
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { /* open */ setOpen } = useSidebar();
  const [query, setQuery] = useState("");

  // Read sidebar state from query string on mount and when URL changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const isOpen = params.get("sidebar") === "1";
      setSidebarOpen(isOpen);
      setOpen(isOpen);
    }
    // Listen for popstate (browser navigation)
    const onPopState = () => {
      const params = new URLSearchParams(window.location.search);
      const isOpen = params.get("sidebar") === "1";
      setSidebarOpen(isOpen);
      setOpen(isOpen);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [setOpen]);

  // Function to update query string (and thus sidebar state)
  const setSidebarState = (open: boolean) => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      params.set("sidebar", open ? "1" : "0");
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?${params}`
      );
      setSidebarOpen(open);
      setOpen(open);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("sidebar", "0");
    setQuery(params.toString());
  }, []);

  return (
    <header
      className={cn(
        "w-full py-4 bg-white border-b border-zinc-200 flex items-center justify-center px-4"
      )}
    >
      <nav className="flex gap-6">
        <ShadcnSidebar className={sidebarOpen ? "left-0" : "left-[-500px]"} />
        <SidebarTrigger
          className={`cursor-pointer transition-colors ${
            sidebarOpen ? "bg-zinc-300" : ""
          }`}
          onClick={() => setSidebarState(!sidebarOpen)}
        />
        {/* Preserve query string state in header links without hydration mismatch */}
        {(() => {
          return (
            <>
              <Link
                href={query ? `/?${query}` : "/?sidebar=0"}
                className="font-semibold text-zinc-700 hover:text-sky-600"
              >
                Início
              </Link>
              <Link
                href={query ? `/about?${query}` : "/about?sidebar=0"}
                className="font-semibold text-zinc-700 hover:text-sky-600"
              >
                Sobre
              </Link>
            </>
          );
        })()}
      </nav>
    </header>
  );
}
