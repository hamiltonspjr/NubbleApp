import {PageAPI, PageParams, api} from '@api';

import {PostCommentAPI} from './postCommentTypes';

// pega os dados da api
async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  const response = await api.get<PageAPI<PostCommentAPI>>('user/post_comment', {
    params: {
      post_id,
      ...pageParams,
    },
  });
  return response.data;
}

// criar comentário no post
async function create(
  post_id: number,
  message: string,
): Promise<PostCommentAPI> {
  const response = await api.post<PostCommentAPI>('user/post_comment', {
    post_id,
    message,
  });

  return response.data;
}

export const postCommentApi = {
  getList,
  create,
};
