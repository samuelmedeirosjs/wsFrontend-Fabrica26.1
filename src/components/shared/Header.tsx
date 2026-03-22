"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();
  const navHeaderItems = [
    { name: "Início", href: "/" },
    { name: "Personagens", href: "/characters" }
  ]

  return (
    <header className="z-10 flex-col gap-5 md:gap-0 md:flex-row bg-surface/80 border border-border hover:bg-surface transition-colors duration-500  m-5 mx-auto rounded-3xl w-full max-w-300 backdrop-blur-md flex items-center justify-between px-5 py-2">
      <Link href="/">
        <div className="relative w-35 h-13">
          <Image
            className="pointer-events-none"
            src="/logoRickpedia.png"
            fill
            alt='logo rickpédia'
            loading="eager"
          />
        </div>
      </Link>

      <nav className="flex gap-5">
        {navHeaderItems.map((item => (
          <Link
            key={item.name}
            href={item.href} 
            className={`${pathname === item.href ? 'bg-gray-100/5' : ''} py-1 px-3 rounded-2xl text-primary hover:text-primary-hover transition-colors duration-500`}>
            {item.name}
          </Link>
        )))}
      </nav>

    </header>
  );
}
