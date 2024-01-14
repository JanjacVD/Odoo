import * as SecureStore from "expo-secure-store";

const ID_KEY = "@UVID_";

async function storeSecureItem(key: string, value: string) {
  SecureStore.setItemAsync(ID_KEY + key, value);
}

async function getSecureItem(key: string) {
  return await SecureStore.getItemAsync(ID_KEY + key, {
    requireAuthentication: true,
  });
}

async function deleteSecureItem(key: string) {
  SecureStore.deleteItemAsync(ID_KEY + key);
}

async function getParsedSecureItem<T>(key: string): Promise<T | null> {
  const data = await getSecureItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
}

export { storeSecureItem, deleteSecureItem, getParsedSecureItem };
