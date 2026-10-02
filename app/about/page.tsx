export default function About() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      {" "}
      <section className="w-full max-w-2xl text-center">
        {" "}
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent">
          {" "}
          About the project{" "}
        </p>{" "}
        <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {" "}
          A small experiment in 3D{" "}
        </h2>{" "}
        <p className="mx-auto max-w-xl text-base leading-8 text-white/60 sm:text-lg">
          {" "}
          This is a personal project where I&apos;m exploring 3D design using
          Blender. The goal is to learn more about 3D while becoming a better
          developer, and eventually use some of these assets in future web
          projects.{" "}
        </p>{" "}
      </section>{" "}
    </main>
  );
}
