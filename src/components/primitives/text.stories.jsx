import Text from '../primitives/Text.jsx';

const COLOR_TOKENS = {
  Default: 'var(--color-text-page-title)',
  Primary: 'var(--color-text-page-next)',
};

const FONT_SIZE_TOKENS = {
  Medium: 'var(--font-size-md)',
  Large: 'var(--font-size-lg)',
};

const FONT_WEIGHT_TOKENS = {
  Normal: 'var(--font-weight-normal)',
  Bold: 'var(--font-weight-bold)',
};

export default {
  title: 'Primitives/Text',
  component: Text,
  argTypes: {
    color: {
      options: Object.keys(COLOR_TOKENS),
      mapping: COLOR_TOKENS,
      control: { type: 'select' },
    },
    fontSize: {
      options: Object.keys(FONT_SIZE_TOKENS),
      mapping: FONT_SIZE_TOKENS,
      control: { type: 'select' },
    },
    fontWeight: {
      options: Object.keys(FONT_WEIGHT_TOKENS),
      mapping: FONT_WEIGHT_TOKENS,
      control: { type: 'select' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export const Default = () => {
  return (
    <Text
      color={COLOR_TOKENS.Default}
      fontSize={FONT_SIZE_TOKENS.Medium}
      fontWeight={FONT_WEIGHT_TOKENS.Normal}
    >
      Default Text
    </Text>
  );
};

export const PageTitleText = () => {
  return (
    <Text
      color={COLOR_TOKENS.Default}
      fontSize={FONT_SIZE_TOKENS.Large}
      fontWeight={FONT_WEIGHT_TOKENS.Bold}
    >
      Page Title Text
    </Text>
  );
};

export const PageNextText = () => {
  return (
    <Text
      color={COLOR_TOKENS.Primary}
      fontSize={FONT_SIZE_TOKENS.Medium}
      fontWeight={FONT_WEIGHT_TOKENS.Normal}
    >
      Page Next Text
    </Text>
  );
};
