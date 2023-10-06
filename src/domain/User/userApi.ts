import {api} from '@api';

import {UserAPI} from './userTypes';

const PATH = 'users';

// função utiliza a api para conectar com o banco de dados e utiliza-lo
async function getById(userId: string): Promise<UserAPI> {
  const response = await api.get<UserAPI>(`${PATH}/${userId}`);
  return response.data;
}

export const userApi = {
  getById,
};
