import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppTheme} from './useAppTheme';

export function useAppSafeArea() {
  const {top} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {
    // retorna verifica qual é maior e retorna
    // no caso do ios será retornado o top e no
    // android o valor de spacing.s20
    top: Math.max(top, spacing.s20),
    bottom: Math.max(top, spacing.s20),
  };
}
