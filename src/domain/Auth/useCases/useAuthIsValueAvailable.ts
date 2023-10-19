import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Param {
  username: string;
  enabled: boolean;
}

export function useAuthIsValueAvailable({username, enabled}: Param) {
  const debouncedUsername = useDebounce(username, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.isUserNameAvailable, debouncedUsername],
    queryFn: () => authService.isUserNameAvailable(debouncedUsername),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedUsername.length > 0,
  });

  const isDebouncing = debouncedUsername !== username;

  return {
    isAvailable: !!data,
    isFetching: isFetching || isDebouncing,
  };
}