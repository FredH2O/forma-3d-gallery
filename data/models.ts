export type Model = {
  title: string;
  description: string;
  modelPath: string;
  environment:
    | "apartment"
    | "city"
    | "dawn"
    | "forest"
    | "lobby"
    | "night"
    | "park"
    | "studio"
    | "sunset"
    | "warehouse";
};

export const models: Model[] = [
  {
    title: "Golden Ring",
    description:
      "A simple golden ring created in Blender using a mesh cylinder. I shaped the form by cutting through the centre and added a gradient gold material with a glossy finish.",
    modelPath: "/models/golden-ring.glb",
    environment: "studio",
  },
  {
    title: "Coffee on a table",
    description:
      "Just a coffee on a table. I used a cylinder to build the cup and saucer, and a torus for the handle. For the smoke, I used a Bezier curve with a simple animation.",
    modelPath: "/models/coffee-mug.glb",
    environment: "sunset",
  },
];
