type ModelViewProps = {
  model: {
    title: string;
    description: string;
    model: string;
  };
};

export default function ModelView({ model }: ModelViewProps) {
  return (
    <div>
      <h2>{model.title}</h2>
      <p>{model.description}</p>

      {/* 3d view here */}
    </div>
  );
}
