import { FlashList, FlashListProps } from "@shopify/flash-list";

export default function DocumentList<T>({ ...props }: FlashListProps<T>) {
  return (
    <FlashList
      nestedScrollEnabled={true}
      keyboardShouldPersistTaps={"always"}
      ListHeaderComponentStyle={{ height: 5 }}
      ListFooterComponentStyle={{ height: 220 }}
      keyExtractor={(item, index) => index.toString()}
      scrollEventThrottle={100}
      estimatedItemSize={200}
      onEndReachedThreshold={0.5}
      {...props}
    />
  );
}
