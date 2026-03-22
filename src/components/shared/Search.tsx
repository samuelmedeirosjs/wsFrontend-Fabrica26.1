"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchProps {
  defaultValue?: string;
}

export default function Search({ defaultValue = "" }: SearchProps) {
  const [value, setValue] = useState(defaultValue);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams(searchParams.toString());
    const trimmedValue = value.trim();

    if (trimmedValue) {
      params.set("name", trimmedValue);
    } else {
      params.delete("name");
    }

    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl items-center gap-2"
    >
      <div className="relative flex-1">
        <FontAwesomeIcon icon={faSearch} className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Buscar personagens..."
          className="pl-9"
          aria-label="Buscar personagens"
        />
      </div>

      <Button type="submit" className="cursor-pointer bg-primary-hover hover:bg-primary-hover/80">
        Buscar
      </Button>
    </form>
  );
}