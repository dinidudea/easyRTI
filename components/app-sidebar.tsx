"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Create Request",
      url: "/requests",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "New Request",
          url: "/create/allnew",
        },
        {
          title: "Drafts",
          url: "/create/drafts",
        },        
      ],
    },
    {
      title: "My Requests",
      url: "/requests",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Sent",
          url: "/requests/history",
        },
        {
          title: "Acknowledged",
          url: "/requests/history",
        },
        {
          title: "Provided",
          url: "/requests/history",
        },
        {
          title: "Refused",
          url: "/requests/history",
        },
        {
          title: "Appealed (DO)",
          url: "/requests/history",
        },
        {
          title: "Acknowleddged (DO)",
          url: "/requests/history",
        },
        {
          title: "Refused (DO)",
          url: "/requests/history",
        },
        {
          title: "Appealed (RTIC)",
          url: "/requests/history",
        },
      ],
    },
    {
      title: "Public Authorities",
      url: "/pas",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Browse",
          url: "/pas/browse",
        },
        {
          title: "Edit",
          url: "/pas/",
        },
        // {
        //   title: "Starred",
        //   url: "/requests/starred",
        // },
        // {
        //   title: "Settings",
        //   url: "#",
        // },
      ],
    },
    // {
    //   title: "Models",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Genesis",
    //       url: "#",
    //     },
    //     {
    //       title: "Explorer",
    //       url: "#",
    //     },
    //     {
    //       title: "Quantum",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({
  user,
  ...props
}: React.ComponentProps<typeof Sidebar> & { user: User | null }) {
  if (!user) {
    data.navMain = data.navMain.map((item) =>
      item.title === "Requests" ? { ...item, items: [] } : item
    );
  }
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        {user ? (
          <NavUser user={user} />
        ) : (
          <Button type="button" className="mx-auto">
            <Link href={"/login"}> Sign In</Link>
          </Button>
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
