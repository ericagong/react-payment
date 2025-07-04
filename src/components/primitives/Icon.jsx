import { Center } from '../layouts';
import classnames from 'classnames';

export default function Icon({ icon: Icon, isValid = false, ...props }) {
  return (
    <Center className={classnames('icon-box')} role='img' aria-hidden='true'>
      <Icon
        size={24}
        className={classnames('icon-content', { 'is-valid': isValid })}
        {...props}
      />
    </Center>
  );
}
