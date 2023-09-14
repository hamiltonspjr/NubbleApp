import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

// pega os dados pegos da api e retorna no formato que vamos utilizar na aplicação
async function getList(page: number): Promise<Post[]> {
  const postPageApi = await postApi.getList({page, per_page: 10});
  return postPageApi.data.map(postAdapter.toPost);
}

export const postService = {
  getList,
};
