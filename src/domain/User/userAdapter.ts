import {User, UserAPI} from './userTypes';

// adapta os dados que vem da api para a interface de usuário
function toUser(userAPI: UserAPI): User {
  return {
    id: userAPI.id,
    firstName: userAPI.first_name,
    lastName: userAPI.last_name,
    username: userAPI.username,
    email: userAPI.email,
    profileUrl: userAPI.profile_url,
    isOnline: userAPI.is_online,
    fullName: userAPI.full_name,
  };
}

export const userAdapter = {
  toUser,
};
