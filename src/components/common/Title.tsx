export default function Title({ className, ...props }) {
  return (
    <h1 {...props}
      className={`mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl ${className}`}
    />
  );
}
