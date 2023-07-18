import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text bold preset="headingLarge" style={{color: 'blue'}}>
          Coffstack
        </Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
