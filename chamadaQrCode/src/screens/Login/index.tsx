import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { PublicStackParamsList } from "../../routes";

export const Login = () => {
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();

  return (
    <View className="flex-1 bg-blue-600 items-center ">
      <View className="h-110 items-center justify-center pt-10 pb-5">
        <Image
          source={require("../../img/vaca.png")}
          className="w-56 h-56 mt-10"
        ></Image>
        <Text className="text-white text-[48px] font-poppins-bold">
          CowLabs
        </Text>
        <Text className="text-white text-[20px] items-center font-poppins">
          Chamada Inteligente
        </Text>
      </View>
      <View className=" bg-white rounded-t-[25] w-full h-full items-center font-poppins">
        <View className="h-[55px] items-center justify-center bg-gray-200 flex-row rounded-[20] w-[320px] mt-[32px]">
          <View className="w-[160px] bg-blue-600 justify-center text-center h-[55px] rounded-[20] items-center ">
            <TouchableOpacity>
              <Text className="text-white font-poppins-bold">Professor</Text>
            </TouchableOpacity>
          </View>
          <View className="w-[160px] items-center">
            <TouchableOpacity>
              <Text className="font-poppins">Aluno</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="items-center justify-center p-[15]">
          <View className="">
            <Text className="font-poppins text-gray-700">
              Email-institucional
            </Text>
            <TextInput
              placeholder="mail@example.br"
              className="w-[320px] h-[55px] bg-gray-100 border rounded-[15] border-gray-500 pl-4"
            ></TextInput>
          </View>
          <View className="p-[15]">
            <Text className="font-poppins text-gray-700">Senha</Text>
            <TextInput
              placeholder="******"
              className="w-[320px] h-[55px] bg-gray-100 border rounded-[15] border-gray-500 pl-4"
            ></TextInput>
        <View className="items-end pt-2">
          <TouchableOpacity>
            <Text className="font-poppins-bold text-blue-600">Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
          </View>
          <View>
            <TouchableOpacity
              className="p-[15] w-[320] h-[55] bg-blue-600 rounded-[15] justify-center items-center  "
              onPress={() => navigation.navigate("Login")}
            >
              {/*ATENÇÃO:  TEMOS QUE ALTERAR NO NAVIGATE PARA QUE A NAVIGATION FAÇA O LOGIN DE ACORDO COM A CREDENCIAL. ACHO ATÉ QUE DÁ PRA EXCLUIR O BOTÃO PROFESSOR / ALUNO. A ROTA DEVE CONSEGUIR FAZER ESSA DISTINÇÃO PELO QUE ME PARECE */}
              <Text className="font-poppins-bold text-white">Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="items-center justify-center flex-row ">
          <View className="pr-1">
            <Text className="font-poppins text-grey-700 items-center justify-center ">
              Primeiro acesso?
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            className=" "
          >
            <Text className="text-blue-600 font-poppins-bold">
              Ative a sua conta
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
