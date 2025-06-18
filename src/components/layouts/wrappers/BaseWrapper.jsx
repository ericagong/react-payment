export default function BaseWrapper({ children, ...props }) {
  return (
    <div
      style={{
        boxSizing: 'border-box',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
