export const QUERY_KEY = {
  all: ['all'] as const,
  getItems: () => [...QUERY_KEY.all, 'get-itmes'] as const,
}
