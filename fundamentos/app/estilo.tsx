import { center } from "@/styles/components";
import { fontBold, textRed500, textXl } from "@/styles/utils";
import { Text, View } from "react-native";

export default function Estilo() {
    return(
        <View style={center}>
            <Text style={[textXl, fontBold,textRed500]}>Estilo</Text>
        </View>

    )
}