import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-6 text-sm tracking-[0.3em] text-accent uppercase">
          Digital <span className="animate-pulse italic text-white">3D</span>{" "}
          Art Gallery
        </p>

        <h1 className="text-7xl font-medium tracking-widest text-foreground sm:text-8xl md:text-9xl">
          FORMA
        </h1>

        <p className="mt-8 max-w-md text-base leading-relaxed text-muted">
          Explore objects, forms and visual experiments created in Blender.
        </p>

        <Link
          href="/work"
          className="group mt-10 inline-flex items-center gap-2 border border-accent px-6 py-3 text-sm tracking-wide text-foreground transition-colors hover:bg-accent hover:text-white"
        >
          EXPLORE WORK
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </section>
    </main>
  );
}
