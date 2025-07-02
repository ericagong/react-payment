import classnames from 'classnames';
import { Center } from '../layouts/index.jsx';

export default function InputBox({ className = '', children, ...props }) {
  return (
    <Center className={classnames('input-box', className)} {...props}>
      {children}
    </Center>
  );
}
