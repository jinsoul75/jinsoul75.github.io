export default function SubTitle({ children, className, ...props }) {
  return (
    <h2
      className={`${className} mb-2 text-xl font-bold tracking-tight`}
      {...props}
    >
      {children}
    </h2>
  );
}
