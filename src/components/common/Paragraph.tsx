export default function Paragraph({ children, className, ...props }) {
  return (
    <p className={`${className} break-words`} {...props}>
      {children}
    </p>
  );
}
