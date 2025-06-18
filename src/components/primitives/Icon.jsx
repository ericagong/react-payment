import { Center } from '../layouts/index.jsx';

export default function Icon({
  icon: Icon,
  className,
  clickable = false,
  onClick,
  color = 'currentColor',
}) {
  const composedClassName = `icon__container ${className || ''} ${
    clickable ? 'icon__container--clickable' : ''
  }`;

  return (
    <Center
      className={composedClassName}
      role='img'
      aria-hidden='true'
      onClick={clickable ? onClick : undefined}
    >
      <Icon size={24} color={color} />
    </Center>
  );
}
