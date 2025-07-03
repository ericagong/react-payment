export default function Half({ children, props }) {
  return (
    <div style={{ width: '50%' }} {...props}>
      {children}
    </div>
  );
}
