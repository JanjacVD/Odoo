import Main from "@entry/Main";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import FlashMessage from "react-native-flash-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Main />
          <StatusBar style="auto" />
          <FlashMessage position={'top'}/>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
