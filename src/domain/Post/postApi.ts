import {PageAPI, PageParams, api} from '@api';

import {PostAPI} from './postTypes';

// pega os dados da api
async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  });
  return response.data;
}

export const postApi = {
  getList,
};
