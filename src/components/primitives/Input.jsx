import { forwardRef } from 'react';
import classNames from 'classnames';

const Input = forwardRef(
  ({ nativeType = 'text', className = '', ...props }, ref) => {
    return (
      <input
        type={nativeType}
        className={classNames('input', className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
