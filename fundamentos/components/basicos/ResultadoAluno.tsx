import Aluno from "@/data/model/Aluno";
import { View, Text, StyleSheet } from "react-native"

export interface ResultadoAlunoProps {
    aluno: Aluno;
}

export default function ResultadoAluno(props:ResultadoAlunoProps){
const { aluno } = props;
return (
    <View style={styles.container}>
        <Text style={styles.nome}>{aluno.nome} </Text>
        <Text style={styles.nota}>{aluno.nota} </Text>
        {/* <Text style={styles.texto}>
            {aluno.nome} - {aluno.nota}
        </Text> */}
    </View>

)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#222",
        padding:15,
        borderRadius: 5,
        width: 300,
    },
    nome: {
        color:"#fff",
        fontSize: 28,
    },
    nota: {
        color:"#aaa",
        fontSize:18,
    }
})