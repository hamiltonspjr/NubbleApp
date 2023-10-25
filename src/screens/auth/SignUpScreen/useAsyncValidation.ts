import {useAuthIsEmailAvailable, useAuthIsUsernameAvailable} from '@domain';
import {UseFormWatch, UseFormGetFieldState} from 'react-hook-form';

import {SignUpSchemaType} from './signUpSchema';

type Props = {
  watch: UseFormWatch<SignUpSchemaType>;
  getFieldState: UseFormGetFieldState<SignUpSchemaType>;
};

type ReturnValues = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};

export function useAsyncValidation({watch, getFieldState}: Props): {
  usernameValidation: ReturnValues;
  emailValidation: ReturnValues;
} {
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: usernameIsValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailIsValid = !emailState.invalid && emailState.isDirty;
  const emailQuery = useAuthIsEmailAvailable({
    email,
    enabled: emailIsValid,
  });

  return {
    usernameValidation: {
      errorMessage: usernameQuery.isUnavailable
        ? 'username indisponível'
        : undefined,
      notReady: usernameQuery.isFetching || usernameQuery.isUnavailable,
      isFetching: usernameQuery.isFetching,
    },
    emailValidation: {
      errorMessage: emailQuery.isUnavailable ? 'email indisponível' : undefined,
      notReady: emailQuery.isFetching || emailQuery.isUnavailable,
      isFetching: emailQuery.isFetching,
    },
  };
}
