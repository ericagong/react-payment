import { forwardRef } from 'react';
import classNames from 'classnames';

const Input = forwardRef(
  ({ nativeType = 'text', className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={nativeType}
        className={classNames('input', className)}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
