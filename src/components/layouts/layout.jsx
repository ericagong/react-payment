export function Box({ children, style = {}, ...props }) {
  return (
    <div style={{ ...style }} {...props}>
      {children}
    </div>
  );
}

export function VStack({
  children,
  spacing = 'var(--spacing-sm, 1rem)',
  align = 'stretch',
  justify = 'flex-start',
  style = {},
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
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function HStack({
  children,
  spacing = 'var(--spacing-md, 1rem)',
  align = 'center',
  justify = 'flex-start',
  style = {},
  ...props
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: spacing,
        alignItems: 'baseline',
        justifyContent: justify,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function Spacer({ style = {}, ...props }) {
  return <div style={{ flexGrow: 1, ...style }} {...props} />;
}

export function Container({
  children,
  maxWidth = '1200px',
  padding = '1rem',
  style = {},
  ...props
}) {
  return (
    <div
      style={{
        maxWidth,
        width: '100%',
        margin: '0 auto',
        padding,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function Center({ children, style = {}, ...props }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
