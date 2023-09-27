import {dateUtils} from '@utils';

import {PostComment, PostCommentAPI} from './postCommentTypes';

function toPostComment(postCommentApi: PostCommentAPI): PostComment {
  return {
    id: postCommentApi.id,
    message: postCommentApi.message,
    created_at: postCommentApi.created_at,
    createdAtRelative: dateUtils.formatRelative(postCommentApi.created_at),
    author: {
      name: postCommentApi.user.full_name,
      profile_url: postCommentApi.user.profile_url,
      id: postCommentApi.user.id,
      userName: postCommentApi.user.username,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};
