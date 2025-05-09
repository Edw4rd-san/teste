import { Stack, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
    <StatusBar style="light" />

    <Stack
    screenOptions={{
      headerStyle: { backgroundColor: '#6A0572',},
      headerShadowVisible: false,
      headerTintColor: 'white',
      }}
    >

      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      <Stack.Screen name="+not_found" options={{}}/>
    </Stack>
    </>
  );
}

