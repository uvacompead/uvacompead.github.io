import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenuButton,
} from "../components/ui/sidebar";
import { FaExternalLinkAlt } from "react-icons/fa";

const sidebarLinks = [
  {
    group: "Cursos Gratuitos",
    items: [
      {
        subgroup: "Com Certificado",
        links: [
          { label: "Fundação Bradesco", url: "https://www.ev.org.br/cursos" },
          {
            label: "HackerRank",
            url: "https://www.hackerrank.com/auth/signup",
          },
          { label: "IBM SkillsBuild", url: "https://skillsbuild.org/learners" },
          {
            label: "Coursera (alguns gratuitos)",
            url: "https://www.coursera.org/browse",
          },
          {
            label: "The Linux Foundation (alguns gratuitos)",
            url: "https://training.linuxfoundation.org/certification-catalog/?_sfm_price=0",
          },
        ],
      },
      {
        subgroup: "Para Diversão Útil",
        links: [
          {
            label: "Web 3.0 - CryptoZombies",
            url: "https://cryptozombies.io/",
          },
          {
            label: "Beecrowd",
            url: "https://judge.beecrowd.com/en/login",
          },
          {
            label: "Khan Academy",
            url: "https://pt.khanacademy.org/",
          },
          {
            label: "Codecademy",
            url: "https://www.codecademy.com/",
          },
        ],
      },
    ],
  },
];

export default function ShadcnSidebar({ className }: { className?: string }) {
  // Track open/close state for each group item
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const handleToggle = (groupIdx: number, subIdx: number) => {
    const key = `${groupIdx}-${subIdx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Sidebar className={className ?? "w-full max-w-xs"}>
      <SidebarContent
        data-slot="sidebar-content"
        data-sidebar="content"
        className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden"
      >
        {sidebarLinks.map((group, groupIdx) => (
          <Collapsible key={groupIdx} defaultOpen className="group/collapsible">
            <SidebarGroup
              data-slot="sidebar-group"
              data-sidebar="group"
              className="relative flex w-full min-w-0 flex-col p-2"
            >
              <SidebarGroupLabel
                data-slot="sidebar-group-label"
                data-sidebar="group-label"
                asChild
              >
                <CollapsibleTrigger className="text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0">
                  {group.group}
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <ul
                    data-slot="sidebar-menu"
                    data-sidebar="menu"
                    className="flex w-full min-w-0 flex-col gap-1"
                  >
                    {group.items.map((item, subIdx) => {
                      const key = `${groupIdx}-${subIdx}`;
                      const isOpen = !!openItems[key];
                      return (
                        <li
                          data-slot="collapsible"
                          data-sidebar="menu-item"
                          key={subIdx}
                          className="group/menu-item relative group/collapsible"
                        >
                          {/* Controlled Collapsible */}
                          <button
                            data-slot="collapsible-trigger"
                            data-sidebar="menu-button"
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() => handleToggle(groupIdx, subIdx)}
                            className="cursor-pointer peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-hidden ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-8 text-sm"
                          >
                            <span>{item.subgroup}</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`ml-auto transition-transform duration-200 ${
                                !isOpen ? "rotate-90" : "-rotate-90"
                              }`}
                            >
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                          </button>
                          {isOpen && (
                            <ul
                              data-slot="sidebar-menu-sub"
                              data-sidebar="menu-sub"
                              className="border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5 group-data-[collapsible=icon]:hidden"
                            >
                              {item.links.map((link, linkIdx) => (
                                <li
                                  data-slot="sidebar-menu-sub-item"
                                  data-sidebar="menu-sub-item"
                                  key={linkIdx}
                                  className="group/menu-sub-item relative"
                                >
                                  <SidebarMenuButton
                                    data-slot="sidebar-menu-sub-button"
                                    data-sidebar="menu-sub-button"
                                    asChild
                                  >
                                    <a
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground text-sm group-data-[collapsible=icon]:hidden"
                                    >
                                      <span className="flex-1 truncate">
                                        {link.label}
                                      </span>
                                      <span className="flex items-center">
                                        <FaExternalLinkAlt className="text-xs" />
                                      </span>
                                    </a>
                                  </SidebarMenuButton>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
