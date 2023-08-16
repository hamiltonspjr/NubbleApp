import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function LoginScreen() {
  return (
    <Screen scrollable>
      <View style={{paddingHorizontal: 24}}>
        <Text marginBottom="s8" preset="headingLarge">
          Olá!
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <TextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's10'}}
        />

        <PasswordInput
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{mb: 's10'}}
        />

        <Text color="primary" preset="paragraphSmall" bold>
          Esqueci minha senha
        </Text>
        <Button mt="s48" title="Entrar" />
        <Button preset="outline" mt="s12" title="Criar uma conta" />
      </View>
    </Screen>
  );
}
