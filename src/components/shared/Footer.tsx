import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full h-20 relative text-center flex items-center justify-center text-sm">
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -translate-y-32 w-32 h-32 md:w-60 md:h-50 z-50 flex items-center justify-center">
        <Image
          src="/rickEscondido.png"
          fill
          alt="logo rickpédia"
          loading="eager"
          className="drop-shadow-(--shadow-cyan)"
        />
      </div>
      
      <section className="w-full h-full mx-auto flex justify-between px-6 items-center backdrop-blur-md border-t border-white/10 bg-background/60 hover:bg-background">
        <div className="relative flex items-center justify-center gap-5">
          <Image className="" src="/logoFabrica.png" alt="Logo Fábrica de Software" width={50} height={40} />
          <p className="font-bold text-[1rem] mt-2">Fábrica de Software - 2026.1</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
        <p className="font-semibold text-sm text-white/80">
          Desenvolvido por {" "}
          <a
            href="https://github.com/samuelmedeirosjs"
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:left-0 after:-bottom-1 relative after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            Samuel Medeiros
          </a>
        </p>

      </section>
    </footer>
  )
}