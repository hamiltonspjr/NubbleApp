import {useAuthIsUsernameAvailable} from '@domain';
import {UseFormWatch, UseFormGetFieldState} from 'react-hook-form';

import {SignUpSchemaType} from './signUpSchema';

type Props = {
  watch: UseFormWatch<SignUpSchemaType>;
  getFieldState: UseFormGetFieldState<SignUpSchemaType>;
};

export function useAsyncValidation({watch, getFieldState}: Props) {
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: usernameIsValid,
  });

  return {
    errorMessage: usernameQuery.isUnavailable
      ? 'username indisponível'
      : undefined,
    notReady: usernameQuery.isFetching || usernameQuery.isUnavailable,
    isFetching: usernameQuery.isFetching,
  };
}
