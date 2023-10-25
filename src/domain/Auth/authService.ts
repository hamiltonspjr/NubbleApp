import {api} from '@api';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignUpData} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentialsAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authCredentialsAPI);
  } catch (error) {
    throw new Error('email ou senha inválido');
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

async function signUp(singUpData: SignUpData): Promise<void> {
  await authApi.signUp(singUpData);
}
// atualizar o token da api
function updateToken(token: string) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.Authorization = null;
}

async function isUsernameAvailable(username: string): Promise<boolean> {
  const {isAvailable} = await authApi.isUsernameAvailable({username});
  return isAvailable;
}
async function isEmailAvailable(email: string): Promise<boolean> {
  const {isAvailable} = await authApi.isEmailAvailable({email});
  return isAvailable;
}

export const authService = {
  signIn,
  signUp,
  signOut,
  updateToken,
  removeToken,
  isUsernameAvailable,
  isEmailAvailable,
};
