export default function AppWrapper({ children }) {
  return (
    <div className='app' style={{ height: '100%', padding: '16px 20px' }}>
      {children}
    </div>
  );
}
