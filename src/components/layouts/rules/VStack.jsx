export default function VStack({
  children,
  spacing = 'var(--spacing-sm, 1rem)',
  align = 'stretch',
  justify = 'flex-start',
  ...props
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing,
        alignItems: align,
        justifyContent: justify,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
