import { Text, View } from "react-native";

export interface ParImparProps {
    numero: number;
}

export default function ParImpar(props: ParImparProps){
    
    function renderizarResultado() {
        const par = props.numero % 2 === 0;
        return par ? <Text>Par</Text> : <Text>Ímpar</Text>
    }
    return (

        <View style={{flexDirection:"row"}}>
            <Text>O número {props.numero} é </Text>
            {renderizarResultado()}
        </View>

        // <Text>
        //     O número {props.numero} é {par ? "Par" : "Ímpar"}
        // </Text>
    )


    // if (par) {
    //     return <Text>Número {props.numero} é par!</Text>;

    // }else{
    //     return <Text>Número {props.numero} é ímpar!</Text>;
    // }

}