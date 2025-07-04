import classnames from 'classnames';

export default function Button({
  className,
  type = 'basic',
  nativeType = 'button',
  children,
  ...props
}) {
  return (
    <div className='button-box'>
      <button
        className={classnames(`button`, className)}
        type={nativeType}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
