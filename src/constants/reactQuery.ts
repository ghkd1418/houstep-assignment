export const QUERY_CLIENT_OPTIONS = {
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 2, // 2 min
    },
  },
}

export const QUERY_KEY = {
  all: ['all'] as const,
  getItems: () => [...QUERY_KEY.all, 'get-itmes'] as const,
}
