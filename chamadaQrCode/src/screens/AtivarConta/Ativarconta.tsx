import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PublicStackParamsList } from "../../routes";

export const AtivarConta = () => {
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();

  return (
    <View className="flex-1 bg-blue-600 items-center ">
      <View className="h-50 items-center justify-center pt-8 pb-3">
        <Image
          source={require("../../img/vaca.png")}
          className="w-56 h-56"
        ></Image>
        <Text className="text-white text-[38px] font-poppins-bold">
          CowLabs
        </Text>
        <Text className="text-white text-[20px] items-center font-poppins">
          Chamada Inteligente
        </Text>
      </View>

      <View className=" bg-white rounded-t-[25] w-full flex-1 items-center font-poppins">
        <View className="h-[55px] items-center justify-center bg-gray-200 flex-row rounded-[20] w-[320px] mt-[32px]">
          <View className="w-[160px] justify-center text-center h-[55px] rounded-[20] items-center ">
            <TouchableOpacity>
              <Text className="text-black font-poppins">Professor</Text>
            </TouchableOpacity>
          </View>
          <View
            className="w-[160px] h-[55px]
          justify-center rounded-[20] bg-blue-600 items-center"
          >
            <TouchableOpacity>
              <Text className="text-white font-poppins-bold">Aluno</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerClassName="items-center pb-10">
          <View className="pt-[15]">
            <Text className="font-poppins text-gray-700">Nome completo:</Text>
            <TextInput
              placeholder="Seu nome"
              className="w-[320px] h-[55px] bg-gray-100 border rounded-[15] border-gray-500 pl-4"
            ></TextInput>
          </View>

          <View className="pt-[15]">
            <Text className="font-poppins text-gray-700">
              Email institucional:
            </Text>
            <TextInput
              placeholder="mail@example.br"
              keyboardType="email-address"
              autoCapitalize="none"
              className="w-[320px] h-[55px] bg-gray-100 border rounded-[15] border-gray-500 pl-4"
            ></TextInput>
          </View>

          <View className="pt-[15]">
            <Text className="font-poppins text-gray-700">Matrícula:</Text>
            <TextInput
              placeholder="Ex.: 2024001234"
              keyboardType="numeric"
              className="w-[320px] h-[55px] bg-gray-100 border rounded-[15] border-gray-500 pl-4"
            ></TextInput>
          </View>

          <View className="pt-[15]">
            <Text className="font-poppins text-gray-700">Senha:</Text>
            <TextInput
              placeholder="******"
              secureTextEntry
              className="w-[320px] h-[55px] bg-gray-100 border rounded-[15] border-gray-500 pl-4"
            ></TextInput>
          </View>

          <View className="pt-[15]">
            <Text className="font-poppins text-gray-700">Confirmar senha:</Text>
            <TextInput
              placeholder="******"
              secureTextEntry
              className="w-[320px] h-[55px] bg-gray-100 border rounded-[15] border-gray-500 pl-4"
            ></TextInput>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("AtivacaoConta")}
            className="mt-[25px] w-[320px] h-[55px] bg-blue-600 rounded-[15] justify-center items-center"
          >
            <Text className="font-poppins-bold text-white">Ativar conta</Text>
          </TouchableOpacity>

          <View className="flex-row pt-4">
            <Text className="font-poppins pr-1">Já ativou sua conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="font-poppins-bold text-blue-600">Entrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
