import { useAxiosInstance } from "@shared/api/useAxiosInstance";
import { useInfiniteQuery } from "react-query";
import {
  createSaleOrder,
  saleOrderGet,
} from "./versions/universal/saleOrderRequests";
import { NewSaleOrderParams } from "../typesAndData";
import useFlashMessage from "@shared/lib/flashMessage";

const useSaleOrder = () => {
  const { instance } = useAxiosInstance();
  const { showError, showSuccess } = useFlashMessage();
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

  const createNewSaleOrder = async (
    params: Omit<NewSaleOrderParams, "instance">
  ) => {
    try {
      await createSaleOrder({ instance, ...params });
      await refetch();
    } catch (e) {
      showError(e as string);
    }
  };

  return {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
