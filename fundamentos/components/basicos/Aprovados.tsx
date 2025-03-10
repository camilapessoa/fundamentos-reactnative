import Aluno from "@/data/model/Aluno";
import { View, Text } from "react-native";
import ResultadoAluno from "./ResultadoAluno";

export interface AprovadosProps{
    alunos: Aluno[];
}

export default function Aprovados(props:AprovadosProps){
    const aprovados = props.alunos.filter((aluno)=>aluno.nota >=7)
    return (
        <View style={{ gap:10}}>
            {aprovados.map((aluno) => (
                <ResultadoAluno key={aluno.id} aluno={aluno} />
             
            ))
            }
        </View>
    );
}