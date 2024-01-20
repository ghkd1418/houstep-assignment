import { useQuery } from 'react-query'
import { getItems } from '@/apis/product'
import { QUERY_KEY } from '@/constants/reactQuery'

export const useGetItems = () =>
  useQuery({
    queryKey: QUERY_KEY.getItems(),
    queryFn: getItems,
  })
