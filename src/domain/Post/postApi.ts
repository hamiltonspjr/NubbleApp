import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  await new Promise(resolve => setInterval(() => resolve(''), 1000));
  return postListMock;
}

export const postApi = {
  getList,
};
