import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {EyeOnIcon} from './src/assets/icons/EyeOnIcon';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text bold preset="headingLarge">
          Coffstack
        </Text>
        <EyeOffIcon />
        <EyeOnIcon />
        <Icon name="eyeOff" color="error" size={90} />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
