import { Stack } from "expo-router";
import { CartProvider } from "../utils/context/CartContext";
import { usePushToken } from "@/hooks/usePushToken";

export default function RootLayout() {
  usePushToken();
  return (
    <CartProvider>
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="not_found" />
      </Stack>
    </CartProvider>
  );
}
