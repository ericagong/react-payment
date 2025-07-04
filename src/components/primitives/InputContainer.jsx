import classnames from 'classnames';

export default function InputContainer({ title, className, children }) {
  return (
    <div className={classnames('input-container', className)}>
      {title && <span className='input-title'>{title}</span>}
      {children}
    </div>
  );
}
