import {apiAdapter} from '@api';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

// pega os dados pegos da api e retorna no formato que vamos utilizar na aplicação
async function getList(page: number): Promise<Page<Post>> {
  const postPageApi = await postApi.getList({page, per_page: 10});
  return {
    data: postPageApi.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageApi.meta),
  };
}

export const postService = {
  getList,
};
