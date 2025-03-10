import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/estilo">
        <Text>Estilo Compartilhado</Text>
      </Link>

      <Link href="/modelo">
        <Text>Componente Modelo</Text>
      </Link>
     <Link href="/primeiro">
        <Text>Primeiro Exemplo</Text>
     </Link>
      

    </View>
  );
}
