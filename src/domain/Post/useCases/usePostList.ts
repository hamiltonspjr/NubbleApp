import React, {useState} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<boolean | null>(null);
  const [postList, setPostList] = React.useState<Post[]>([]);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (er) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (!loading) {
      fetchData();
    }
  }

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    postList,
    error,
    loading,
    refetch: fetchData,
    fetchNextPage,
  };
}
