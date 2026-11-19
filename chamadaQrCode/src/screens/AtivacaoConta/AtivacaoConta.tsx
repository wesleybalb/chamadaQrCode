import { View, Text, Image,TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PublicStackParamsList } from "../../routes";

export const AtivacaoConta = () =>{
    const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>();

    return(
        <>
        <View className="flex-1 bg-blue-600 items-center justify-center ">
      <View  className=" px-[36px] h-50 items-center justify-center ">
        <Image
          source={require("../../img/vaca.png")}
          className="w-56 h-56"
        ></Image>
        <Text className="text-white text-[38px] font-poppins-bold">
          Conta Ativada!
        </Text>
        <Text className="text-center text-white text-[14px] max-w-[290px] w-[320px] items-center font-poppins">
          Tudo certo, NOME. Agora é só entrar com seu email institucional ea senha que você criou.
        </Text>
      </View>
       <View className="flex-row pt-4">
            <TouchableOpacity className="p-[15] w-[300] h-[55] bg-gray-100 rounded-[15] justify-center items-center " onPress={() => navigation.navigate("Login")} >
              <Text className="font-poppins-bold text-blue-600">Entrar</Text>
            </TouchableOpacity>
          </View>
    </View>
        </>
    )
}