export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-6">
      <p className="text-center text-sm text-muted">
        Made by{" "}
        <a href="https://github.com/FredH2O" target="_blank">
          Fred
        </a>
        <span className="mx-1 text-accent">©</span> {currentYear}
      </p>
    </footer>
  );
}
