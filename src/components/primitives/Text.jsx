export default function Text({ fontSize, fontWeight, color, children }) {
  return (
    <div
      className='text'
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
      }}
    >
      {children}
    </div>
  );
}
