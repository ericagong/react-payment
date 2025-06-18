export default function PageWrapper({
  children,
  maxWidth = '1200px',
  padding = '1rem',
  ...props
}) {
  return (
    <div
      style={{
        maxWidth,
        width: '100%',
        margin: '0 auto',
        padding,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
