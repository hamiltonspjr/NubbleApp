import React from 'react';

import {useAuthSignOut} from '@domain';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  const {signOut, isLoading} = useAuthSignOut();
  return (
    <Screen canGoBack title="Configurações">
      <Text preset="headingSmall">Setting Screen</Text>
      <Button title="Sair da conta" onPress={signOut} loading={isLoading} />
    </Screen>
  );
}
