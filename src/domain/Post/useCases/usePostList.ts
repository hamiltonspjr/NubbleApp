import React from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<boolean | null>(null);
  const [postList, setPostList] = React.useState<Post[]>([]);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return {
    postList,
    error,
    loading,
    refetch: fetchData,
  };
}
