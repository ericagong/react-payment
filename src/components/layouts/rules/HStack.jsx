export default function HStack({
  children,
  spacing = 'var(--spacing-md, 1rem)',
  align = 'center',
  justify = 'flex-start',
  ...props
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: spacing,
        alignItems: 'center',
        justifyContent: justify,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
