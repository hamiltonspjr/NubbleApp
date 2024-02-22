import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';

import {Theme} from '@theme';

// criando o componente de box do thema que é
// parecido coom o componente de view do react native
export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

// criando componente de TouchableOpacity conectado com o thema
export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
