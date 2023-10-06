import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

// função que vai utilizar a camada da api e retornar os dados utilizando o adapter
async function getById(id: number): Promise<User> {
  const userAPI = await userApi.getById(id.toString());
  return userAdapter.toUser(userAPI);
}

export const userService = {
  getById,
};
