type Model = { title: string; description: string; model: string };

export const models: Model[] = [
  {
    title: "Golden Donut",
    description: "A simple golden donut with a glossy finish.",
    model: "/models/golden-donut.glb",
  },
  {
    title: "Coffee on a table",
    description:
      "Just a coffee on a table. I used a cylinder to build the cup and saucer, and a torus for the handle. For the smoke, I used a Bezier curve with a simple animation.",
    model: "/models/coffee-table.glb",
  },
];
