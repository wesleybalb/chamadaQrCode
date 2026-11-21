import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack"
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { AtivarConta } from "../screens/AtivarConta/Ativarconta";
import {AtivacaoConta} from "../screens/AtivacaoConta/AtivacaoConta"
import { Professor } from "../screens/Professor";
import { Aluno } from "../screens/Aluno"


export type PublicStackParamsList = {
    Login: undefined;
    Register: undefined;
    AtivarConta: undefined;
    AtivacaoConta : undefined;
    Professor: undefined;
    Turmas: undefined;
    Aluno: undefined;
    ExibirQRCode: undefined;
    LerQRCode: undefined;
    Turma: undefined;
    Historic: undefined;
    Disciplina: undefined;
    Aula: undefined;
    Chamada: undefined;
    Frequencia: undefined;
    

}

export function NavigationRoutes () {

    const PublicStack = createStackNavigator<PublicStackParamsList>()
    
    return(
        <NavigationContainer>
            <PublicStack.Navigator screenOptions={{
                headerShown: false
            }}>
                <PublicStack.Screen name="Login" component={Login}/>
                <PublicStack.Screen name="Register" component={Register}/>
                <PublicStack.Screen name="AtivarConta" component={AtivarConta}/>
                <PublicStack.Screen name="AtivacaoConta" component={AtivacaoConta}/>
                <PublicStack.Screen name="Professor" component={Professor}/>
                <PublicStack.Screen name="Aluno" component={Aluno}/>

            </PublicStack.Navigator>
        </NavigationContainer>
    )
}