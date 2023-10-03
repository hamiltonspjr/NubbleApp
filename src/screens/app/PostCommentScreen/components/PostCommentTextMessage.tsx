import React from 'react';
import {Keyboard} from 'react-native';

import {usePostCommentCreate} from '@domain';

import {TextMessage} from '@components';

interface Props {
  postId: number;
  onAddComment: () => void;
}

export function PostCommentTextMessage({postId, onAddComment}: Props) {
  const [message, setMessage] = React.useState('');
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      // fecha o teclado
      Keyboard.dismiss();
      onAddComment();
    },
  });

  return (
    <TextMessage
      value={message}
      onChangeText={setMessage}
      onPressSend={createComment}
      placeholder="Adicione um comentário"
    />
  );
}
