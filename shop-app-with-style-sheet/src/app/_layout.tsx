import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
