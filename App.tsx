import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text bold preset="headingLarge">
          Coffstack
        </Text>
        <Button disabled preset="primary" title="entrar" />
        <Button disabled loading preset="outline" title="loading0" />
        <Button disabled preset="outline" title="entrar" marginTop="s10" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
