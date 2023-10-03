import {PageAPI, PageParams, api} from '@api';

import {PostCommentAPI} from './postCommentTypes';

const PATH = 'user/post_comment';

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
  const response = await api.post<PostCommentAPI>(PATH, {
    post_id,
    message,
  });

  return response.data;
}

// remover comentário
async function remove(postCommentId: number): Promise<{message: string}> {
  const response = await api.delete<{message: string}>(
    `${PATH}/${postCommentId}`,
  );
  return response.data;
}

export const postCommentApi = {
  getList,
  create,
  remove,
};
