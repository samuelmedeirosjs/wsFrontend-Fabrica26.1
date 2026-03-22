"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faBars } from '@fortawesome/free-solid-svg-icons';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

type ViewMode = "grid" | "list";

interface ViewToggleProps {
  currentView: ViewMode;
}

export default function ViewToggle({ currentView }: ViewToggleProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleViewChange(view: ViewMode) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("view", view);
    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex items-center w-fit gap-2 rounded-xl border bg-background p-1">
      <Button
        type="button"
        variant={currentView === "grid" ? "default" : "ghost"}
        size="sm"
        onClick={() => handleViewChange("grid")}
        aria-pressed={currentView === "grid"}
        className="gap-2 cursor-pointer"
      >
        <FontAwesomeIcon icon={faGripVertical} className="size-4" />
        <span className="hidden sm:inline">Grade</span>
      </Button>

      <Button
        type="button"
        variant={currentView === "list" ? "default" : "ghost"}
        size="sm"
        onClick={() => handleViewChange("list")}
        aria-pressed={currentView === "list"}
        className="gap-2 cursor-pointer"
      >
        <FontAwesomeIcon icon={faBars} className="size-4" />
        <span className="hidden sm:inline">Lista</span>
      </Button>
    </div>
  );
}