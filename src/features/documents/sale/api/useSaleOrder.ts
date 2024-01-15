import { useAxiosInstance } from "@shared/api/useAxiosInstance";
import { useInfiniteQuery } from "react-query";
import {
  saleOrderGet,
} from "./versions/universal/saleOrderRequests";

export const useSaleOrder = () => {
  const { instance } = useAxiosInstance();
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery(
    "saleOrder",
    ({ pageParam = 0 }) =>
      saleOrderGet({
        page: pageParam,
        domain: [],
        fields: [],
        instance: instance,
      }),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length < 50 ? undefined : allPages.length + 1,
    }
  );
  return {
    saleOrderData:data,
    error,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    refetch
  };
};
