import ModelView from "@/components/ModelView";
import { models } from "@/data/models";

function Work() {
  return (
    <main className="px-6 py-20">
      <header className="mx-auto mb-16 max-w-6xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
          Selected work
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          3D Gallery
        </h1>

        <p className="mt-5 max-w-xl text-white/50">
          A collection of 3D experiments created in Blender and brought to life
          on the web.
        </p>
      </header>

      <section className="mx-auto max-w-6xl space-y-24">
        {models.map((model) => (
          <ModelView key={model.title} model={model} />
        ))}
      </section>
    </main>
  );
}

export default Work;
