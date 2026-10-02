"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Model } from "@/data/models";

type ModelViewProps = {
  model: Model;
};

function ModelObject({ model }: ModelViewProps) {
  const { scene } = useGLTF(model.modelPath);

  return <primitive object={scene} />;
}

export default function ModelView({ model }: ModelViewProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/3">
      <div className="h-120">
        <Canvas>
          <Environment preset={model.environment} background />
          <ambientLight intensity={3} />
          <ModelObject model={model} />

          <OrbitControls />
        </Canvas>
      </div>

      <div className="border-t border-white/10 p-8">
        <h2 className="text-2xl font-medium text-white">{model.title}</h2>

        <p className="mt-3 max-w-2xl leading-7 text-white/50">
          {model.description}
        </p>
      </div>
    </article>
  );
}
