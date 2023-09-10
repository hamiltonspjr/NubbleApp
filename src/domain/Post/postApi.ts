import {PageAPI} from '@api';

import {PostAPI} from './postTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  let response = await fetch('http://localhost:3333/user/post', {
    headers: {
      Authorization:
        'Bearer Ng.K8712VlnJJX2JYQQrhSp4LxvgmFeCuOHqposBf0pfbtUoAV4Gk5IjgajeYNc',
    },
  });
  let data: PageAPI<PostAPI> = await response.json();
  return data;
}

export const postApi = {
  getList,
};
