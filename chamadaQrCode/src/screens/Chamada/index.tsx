import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { PublicStackParamsList } from "../../routes";
import { Text, View, Image, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";

type Aluno = {
  id: number;
  name: string;
};

const presentsEntrancelist = [
  { id: 1, name: "Ana Beatriz Costa" },
  { id: 2, name: "Carlos Eduardo" },
  { id: 3, name: "Fernanda Souza" },
  { id: 4, name: "Gabriel Mendes" },
];

const alunosAusentesList = [
  { id: 5, name: "João Paulo" },
  { id: 6, name: "Larissa Alves" },
  { id: 7, name: "Marcos Vinícius" },
  { id: 8, name: "Natália Gomes" },
];

export const Chamada = () => {
  const { params } = useRoute<RouteProp<PublicStackParamsList, "Chamada">>();
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();
  const [presentes, setPresentes] = useState<Aluno[]>(presentsEntrancelist);
  const [naoPresentes, setNaoPresentes] = useState<Aluno[]>(alunosAusentesList);
  const ausentes = params.totalAlunos - presentes.length;

  function handleAluno(aluno: Aluno) {
    setPresentes((prev) =>
      prev.some((a) => a.id === aluno.id) ? prev : [...prev, aluno],
    );
    setNaoPresentes((prev) => prev.filter((a) => a.id !== aluno.id));
  }

  function handleRemove(aluno: Aluno) {
    setNaoPresentes((prev) =>
      prev.some((a) => a.id === aluno.id) ? prev : [...prev, aluno],
    );
    setPresentes((prev) => prev.filter((a) => a.id !== aluno.id));
  }

  return (
    <View className="flex-1 ">
      <View className="p-5">
        <View className="h-[240px] justify-center">
          <View className="flex-row pt-20">
            <View className="flex-1 flex-row-reverse justify-end items-center">
              <View className="pr-5">
                <Image
                  source={require("../../img/icons/notifications.png")}
                  className="w-[40px] h-[40px]"
                />
              </View>
              <View className=" flex-1 items-center">
                <Text className="font-poppins-bold text-[20px] pl-16">
                  {params.title}
                </Text>
              </View>
            </View>
          </View>
          <View className="items-center">
            <Text className="font-poppins-semibold text-gray-700 text-[16px] pt-[10px]">
              Confirmar Chamada
            </Text>
          </View>
          <View className=" flex-row justify-between pl-5 pr-5 pt-5 items-center">
            <View className="bg-blue-200 border border-blue-400 rounded-[15] w-[80px] h-[55px] items-center justify-center">
              <Text className="font-bold text-blue-600  text-[20px] pb-0">
                {presentes.length}
              </Text>
              <Text className="pt-0 text-gray-600 text-[12px]">Presentes</Text>
            </View>
            <View className="bg-red-200 border border-red-400 rounded-[15] w-[80px] h-[55px] items-center justify-center">
              <Text className="font-bold text-red-600  text-[20px] pb-0">
                {ausentes}
              </Text>
              <Text className="pt-0 text-gray-600 text-[12px]"> ausentes</Text>
            </View>
            <View className="bg-gray-200 border border-gray-400 rounded-[15] w-[80px] h-[55px] items-center justify-center">
              <Text className="font-bold text-blue-600  text-[20px] pb-0">
                {params.totalAlunos}
              </Text>
              <Text className="pt-0 text-gray-600 text-[12px]">Alunos</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex-1 p-5 bg-blue-200">
        <View className=" flex-1 ">
          <View className="flex-row mb-3 items-center">
            <Image
              source={require("../../img/icons/checklist.png")}
              className="w-5 h-5 p-1"
            />
            <Text className="font-poppins-semibold ">
              {" "}
              Alunos presentes ({presentes.length})
            </Text>
          </View>
          <View className="flex-1">
            <FlatList
              data={presentes}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerClassName="bg-white rounded-2xl overflow-hidden"
              ItemSeparatorComponent={() => (
                <View className="h-px bg-gray-300 mx-4" />
              )}
              renderItem={({ item }) => (
                <View className="flex-row items-center px-4 py-3 gap-3">
                  <Image
                    source={require("../../img/icons/pessoa1.png")}
                    className="w-8 h-8"
                    resizeMode="contain"
                  />
                  <Text className="flex-1 font-poppins-semibold text-[14px] text-gray-900 ">
                    {item.name}
                  </Text>

                  <TouchableOpacity
                    className="bg-red-200 border border-red-400 rounded-xl w-24 h-9 items-center justify-center flex-row-reverse"
                    onPress={() => handleRemove(item)}
                  >
                    <Text className="font-poppins text-red-600 text-[12px] pl-1">
                      Remover
                    </Text>
                    <Image
                      source={require("../../img/icons/delete.png")}
                      className="w-5 h-5"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
        <View className=" flex-1 ">
          <View className="flex-row mb-3 items-center">
            <Image
              source={require("../../img/icons/add.png")}
              className="w-5 h-5 p-1"
            />
            <Text className="font-poppins-semibold ">
              {" "}
              Adicionar Manualmente
            </Text>
          </View>
          <View className="flex-1">
            <FlatList
              data={naoPresentes}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerClassName="bg-white rounded-2xl overflow-hidden"
              ItemSeparatorComponent={() => (
                <View className="h-px bg-gray-300 mx-4" />
              )}
              renderItem={({ item }) => (
                <View className="flex-row items-center px-4 py-3 gap-3">
                  <Image
                    source={require("../../img/icons/pessoa1.png")}
                    className="w-8 h-8"
                    resizeMode="contain"
                  />
                  <Text className="flex-1 font-poppins-semibold text-[14px] text-gray-900 ">
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    className="flex-row justify-center items-center bg-gray-200 w-24 h-10 rounded-xl border border-gray-400
                  "
                    onPress={() => handleAluno(item)}
                  >
                    <Image
                      source={require("../../img/icons/add.png")}
                      className="w-5 h-5"
                      resizeMode="contain"
                    />
                    <Text className="font-poppins text-[10px] text-gray-700">
                      Adicionar
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
        <TouchableOpacity
          className="bg-blue-600 rounded-lg h-10 justify-center items-center "
          onPress={() =>
            navigation.navigate("ChamadaDetalhe", {
              title: params.title,
              totalAlunos: params.totalAlunos,
              alunosPresentes: presentes,
              alunosAusentes: naoPresentes
            })
          }
        >
          <Text className="font-poppins-bold text-white">
            Confirmar Chamada
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
