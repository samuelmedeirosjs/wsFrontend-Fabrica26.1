"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    return `${pathname}?${params.toString()}`;
  }

  function goToPage(page: number) {
    router.push(createPageURL(page));
  }

  function getPages() {
    const pages: number[] = [];

    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  const pages = getPages();

  return (
    <nav
      className="flex items-center justify-center gap-2"
      aria-label="Paginação"
    >
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className="cursor-pointer"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="size-4" />
      </Button>

      {pages[0] > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => goToPage(1)}
            className="cursor-pointer"
          >
            1
          </Button>
          {pages[0] > 2 && <span className="px-1 text-sm">...</span>}
        </>
      )}

      {pages.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "ghost"}
          size="sm"
          onClick={() => goToPage(page)}
          className="cursor-pointer"
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Button>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <span className="px-1 text-sm">...</span>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => goToPage(totalPages)}
            className="cursor-pointer"
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === totalPages}
        className="cursor-pointer"
        onClick={() => goToPage(currentPage + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} className="size-4" />
      </Button>
    </nav>
  );
}