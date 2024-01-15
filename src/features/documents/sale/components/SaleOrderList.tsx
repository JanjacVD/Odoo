import DocumentList from "@features/documents/DocumentList";
import { useSaleOrder } from "../api/useSaleOrder";
import SaleOrderListItem from "./SaleOrderListItem";
import { SaleOrder } from "../typesAndData";

export default function SaleOrderList() {
  const {
    saleOrderData,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useSaleOrder();
  const renderItem = ({ item }: { item: SaleOrder }) => <SaleOrderListItem />;
  const fetchNext = () =>
    !isLoading && !isFetchingNextPage && hasNextPage && fetchNextPage();
  return (
    <DocumentList
      onEndReached={fetchNext}
      onRefresh={refetch}
      refreshing={isLoading || isFetchingNextPage}
      data={saleOrderData?.pages.flat()}
      renderItem={renderItem}
    />
  );
}
