import React from 'react';

import {Post} from '@domain';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';

type Props = Pick<Post, 'reactionCount' | 'commentCount' | 'favoriteCount'>;

export function PostActions({
  reactionCount,
  commentCount,
  favoriteCount,
}: Props) {
  function likePost() {
    //TODO: implement like post
  }

  function navigateToComment() {
    //TODO: implement navigate to comments
  }

  function favoritePost() {
    //TODO: implement
  }

  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked
        onPress={likePost}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={reactionCount}
      />
      <Item
        marked={false}
        onPress={navigateToComment}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={commentCount}
      />
      <Item
        marked={false}
        onPress={favoritePost}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteCount}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
  marked: boolean;
}

function Item({onPress, icon, marked, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      mr="s24"
      alignItems="center"
      onPress={onPress}>
      <Icon
        color={marked ? 'market' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text ml="s4" preset="paragraphSmall" bold>
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
