import { Center } from '../layouts/index.jsx';
import classnames from 'classnames';

export default function Icon({ icon: Icon, isValid = false }) {
  return (
    <Center className={classnames('icon-box')} role='img' aria-hidden='true'>
      <Icon
        size={24}
        className={classnames('icon-content', { 'is-valid': isValid })}
      />
    </Center>
  );
}
