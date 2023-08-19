import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../components/Text/Text';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useForm} from 'react-hook-form';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {loginSchema, LoginSchemaType} from './loginSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: LoginSchemaType) {
    //
  }

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <View style={{paddingHorizontal: 24}}>
        <Text marginBottom="s8" preset="headingLarge">
          Olá!
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's10'}}
        />
        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{mb: 's10'}}
        />

        <Text
          onPress={navigateToForgotPasswordScreen}
          color="primary"
          preset="paragraphSmall"
          bold>
          Esqueci minha senha
        </Text>
        <Button
          mt="s48"
          title="Entrar"
          onPress={handleSubmit(submitForm)}
          disabled={!formState.isValid}
        />
        <Button
          onPress={navigateToSignUpScreen}
          preset="outline"
          mt="s12"
          title="Criar uma conta"
        />
      </View>
    </Screen>
  );
}
