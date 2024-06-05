"use client";
import useSideBar from "@/hooks/sidebar/use-sidebar";
import React from "react";
import MaxMenu from "./maximized-menu";
import { cn } from "@/lib/utils";
import { MinMenu } from "./minimized-menu";

type Props = {
  domains:
    | {
        id: string;
        name: string;
        icon: string;
      }[]
    | null
    | undefined;
};

const Sidebar = ({ domains }: Props) => {
  const { expand, onExpand, page, onSignOut } = useSideBar();
  return (
    <div
      className={cn(
        "bg-cream dark:bg-neutral-950 h-full w-[60px] fill-mode-forwards fixed md:relative",
        expand == undefined && "",
        expand == true
          ? "animate-open-sidebar"
          : expand == false && "animate-close-sidebar"
      )}
    >
      {expand ? (
        <MaxMenu
          domains={domains}
          current={page!}
          onExpand={onExpand}
          onSignOut={onSignOut}
        />
      ) : (
        <MinMenu
          domains={domains}
          onShrink={onExpand}
          current={page!}
          onSignOut={onSignOut}
        />
      )}
    </div>
  );
};

export default Sidebar;
