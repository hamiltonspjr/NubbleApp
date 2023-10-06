import {useCallback, useEffect, useState} from 'react';

import {User} from '../userTypes';
import {userService} from '../useService';

export function useUserGetById(id: number) {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  // função que vai utilizar o service e pegar os dados do usuário
  const getUserById = useCallback(async () => {
    try {
      setLoading(true);
      const _user = await userService.getById(id);
      setUser(_user);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getUserById();
  }, [getUserById]);

  return {
    user,
    error,
    loading,
  };
}
