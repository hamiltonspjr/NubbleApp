import React from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<boolean | null>(null);
  const [postList, setPostList] = React.useState<Post[]>([]);
  const [page, setPage] = React.useState(1);
  const [hasNextPage, setHasNextPage] = React.useState(true);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await postService.getList(1);
      setPostList(data);
      if (meta.hasNextPage) {
        setPage(2);
      } else {
        setHasNextPage(false);
      }
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading || !hasNextPage) {
      return;
    }
    try {
      setLoading(true);
      const {data, meta} = await postService.getList(page);
      setPostList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchInitialData();
  }, []);

  return {
    postList,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
