import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="primeiro" />
      <Stack.Screen name="modelo" />
      <Stack.Screen name="estilo" />
    </Stack>
);}
