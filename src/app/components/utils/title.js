export default function Title({ title }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground tracking-tight">{title}</h2>
      <div className="mt-1.5 w-8 h-0.5 rounded-full bg-primary" />
    </div>
  );
}
