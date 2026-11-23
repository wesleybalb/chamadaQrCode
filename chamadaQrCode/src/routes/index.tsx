import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { AtivarConta } from "../screens/AtivarConta/Ativarconta";
import { AtivacaoConta } from "../screens/AtivacaoConta/AtivacaoConta";
import { Professor } from "../screens/Professor";
import { Aluno } from "../screens/Aluno";
import { Turma } from "../screens/Turma";
import { Aula } from "../screens/Aula";
import { ExibirQrCode } from "../screens/ExibirQrCode";
import { LerQRCode } from "../screens/LerQRCode";
import { Chamada } from "../screens/Chamada";
import { ChamadaDetalhe } from "../screens/ChamadaDetalhe";
import { typeAluno } from "../types/typeAluno";
import { Frequencia } from "../screens/Frequencia";

export type PublicStackParamsList = {
  Login: undefined;
  Register: undefined;
  AtivarConta: undefined;
  AtivacaoConta: undefined;
  Professor: undefined;
  Turmas: undefined;
  Aluno: undefined;
  ExibirQrCode: undefined;
  LerQRCode: {
    title: string;
    totalAlunos: number;
  };
  Turma: {
    title: string;
    sigla: string;
    diaSemana: string;
    horaInicio: string;
    horaFim: string;
    local: string;
    totalAlunos: number;
  };
  Historic: undefined;
  Disciplina: undefined;
  Aula: {
    title: string;
    sigla: string;
    diaSemana: string;
    horaInicio: string;
    horaFim: string;
    local: string;
    totalAlunos: number;
  };
  Chamada: {
    title: string;
    totalAlunos: number;
  };
  Frequencia: {
    sigla: string;
  },
  ChamadaDetalhe: {
    title: string;
    totalAlunos: number;
    alunosPresentes: typeAluno[];
    alunosAusentes: typeAluno[];
  };
};

const PublicStack = createStackNavigator<PublicStackParamsList>();

export function NavigationRoutes() {
  return (
    <NavigationContainer>
      <PublicStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <PublicStack.Screen name="Login" component={Login} />
        <PublicStack.Screen name="Register" component={Register} />
        <PublicStack.Screen name="AtivarConta" component={AtivarConta} />
        <PublicStack.Screen name="AtivacaoConta" component={AtivacaoConta} />
        <PublicStack.Screen name="Professor" component={Professor} />
        <PublicStack.Screen name="Turma" component={Turma} />
        <PublicStack.Screen name="Aula" component={Aula} />
        <PublicStack.Screen name="Aluno" component={Aluno} />
        <PublicStack.Screen name="ExibirQrCode" component={ExibirQrCode}/>
        <PublicStack.Screen name="LerQRCode" component={LerQRCode} />
        <PublicStack.Screen name="Chamada" component={Chamada} />
        <PublicStack.Screen name="ChamadaDetalhe" component={ChamadaDetalhe} />
        <PublicStack.Screen name="Frequencia" component={Frequencia}/>
      </PublicStack.Navigator>
    </NavigationContainer>
  );
}
