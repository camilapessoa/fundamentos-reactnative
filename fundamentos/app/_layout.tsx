import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="primeiro" />
      <Stack.Screen name="modelo" />
      <Stack.Screen name="estilo" />
      <Stack.Screen name="componente" />
      <Stack.Screen name="propriedade" />
      <Stack.Screen name="condicional" />
      <Stack.Screen name="lista" />
    </Stack>
);}
