import React from 'react';

import {Page} from '@types';

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [list, setList] = React.useState<Data[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<boolean | null>(null);
  const [page, setPage] = React.useState(1);
  const [hasNextPage, setHasNextPage] = React.useState(true);

  async function fetchInitialData() {
    try {
      setError(null);
      setLoading(true);
      const {data, meta} = await getList(1);
      setList(data);
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
      const {data, meta} = await getList(page);
      setList(prev => [...prev, ...data]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    list,
    error,
    loading,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
