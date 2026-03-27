import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faRocket } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <video
        className='w-full h-screen object-cover fixed top-0 left-0 -z-10 opacity-50'
        src="/videoMain.mp4"
        autoPlay
        loop
        muted
      />

      <section className="w-full h-[calc(100vh-130px)] md:-mt-10 mb-10 flex items-center max-w-300 flex-col justify-center gap-5 md:gap-10 px-6 lg:flex-row lg:items-center lg:justify-between mx-auto">
        <div className="md:w-1/2 flex flex-col text-center md:text-left gap-3">
          <h3 className="uppercase tracking-wider text-white/90 font-bold text-[20px] md:text-2xl">Todo o universo</h3>
          <div className="relative md:w-90 md:h-30 w-70 mx-auto md:mx-0 h-25">
            <Image
              className='pointer-events-none'
              src="/logoRickAndMorty.png"
              fill
              alt="logo Rick and Morty"
              priority
            />
          </div>
          <h3 className="uppercase tracking-wider text-white/90 font-bold text-[20px] md:text-2xl">em um só lugar</h3>
        </div>
        <div className="flex flex-col md:items-start items-center gap-4">
          <Link className="min-w-60 items-center justify-center bg-background/70 rounded-2xl py-2 px-3 md:px-6 md:py-4 hover:bg-primary font-bold text-2xl text-primary hover:text-background border border-primary/40 transition-all duration-400 hover:-translate-y-1 inline-flex hover:shadow-glow backdrop-blur-md" href="/characters">
            Explorar multiverso
            <FontAwesomeIcon className="ml-2 h-5 md:h-7" icon={faRocket} />
          </Link>
          <Link className="inline-flex min-w-60 items-center justify-center bg-background/70 rounded-2xl p-2 md:px-6 md:py-4 hover:bg-background/80 font-bold text-2xl text-white hover:text-primary border border-white/15 transition-all duration-400 hover:-translate-y-1 hover:shadow-glow backdrop-blur-md hover:border-primary/40" href="https://www.netflix.com/br/title/80014749">
            Onde assistir?
            <FontAwesomeIcon className="ml-2 h-5 md:h-7" icon={faCirclePlay} />
          </Link>
        </div>
      </section>
    </main>
  );
}
