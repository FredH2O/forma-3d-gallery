import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 pt-6 md:px-10 md:pt-8">
      <nav className="border-b border-border pb-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-medium tracking-tight text-foreground transition-colors hover:text-accent"
          >
            FORMA
          </Link>

          <ul className="flex gap-6 text-sm tracking-wide text-muted">
            <li>
              <Link
                href="/work"
                className="transition-colors hover:text-accent"
              >
                WORK
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="transition-colors hover:text-accent"
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
