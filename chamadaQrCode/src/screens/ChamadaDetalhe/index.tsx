import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { PublicStackParamsList } from "../../routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { typeAluno } from "../../types/typeAluno";
import { typeListaPresenca } from "../../types/typeListaPresenca";

export const ChamadaDetalhe = () => {
  const { params } =
    useRoute<RouteProp<PublicStackParamsList, "ChamadaDetalhe">>();
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();

  const presentes = params.alunosPresentes.map((a) => ({
    ...a,
    presente: true,
  }));
  const ausentes = params.alunosAusentes.map((a) => ({
    ...a,
    presente: false,
  }));

  const listaPresenca: typeListaPresenca[] = [...presentes, ...ausentes];

  const totalAlunos = listaPresenca.length;
  const frequencia =
    totalAlunos > 0 ? Math.round((presentes.length / totalAlunos) * 100) : 0;
  const { barra, texto } =
    frequencia === 0
      ? { barra: "bg-gray-200", texto: "text-gray-400" }
      : frequencia >= 75
        ? { barra: "bg-green-500", texto: "text-green-500" }
        : frequencia >= 50
          ? { barra: "bg-yellow-400", texto: "text-yellow-400" }
          : { barra: "bg-red-500", texto: "text-red-500" };

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
                <Text className="font-poppins-bold  text-[20px] pt-[10px]  pl-16">
                  Detalhe da Aula
                </Text>
              </View>
            </View>
          </View>
          <View className="items-center">
            <Text className="font-poppins-semibold text-gray-700 text-[16px]">
              {params.title}
            </Text>
          </View>
          <View className="flex-row items-center mt-5 gap-3">
            <View className="flex-1 h-5 rounded-full bg-gray-200 overflow-hidden">
              <View
                className={`h-full rounded-full ${barra}`}
                style={{ width: `${frequencia}%` }}
              />
            </View>
            <Text className={`font-poppins-semibold text-[14px] ${texto}`}>
              {frequencia}%
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-1 p-5 bg-blue-200">
        <View className=" flex-1 ">
          <View className="flex-row mb-3 items-center">
            <Text className="font-poppins-semibold ">
              Lista de Presença: Presentes ({params.alunosPresentes.length}) -
              Ausentes ({params.alunosAusentes.length})
            </Text>
          </View>
          <View className="flex-1">
            <FlatList
              data={listaPresenca}
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
                  <Image
                    className="w-5 h-5"
                    source={
                      item.presente
                        ? require("../../img/icons/check.png")
                        : require("../../img/icons/delete.png")
                    }
                    resizeMode="contain"
                  />
                </View>
              )}
            />
          </View>
        </View>

        <TouchableOpacity
          className="bg-blue-600 rounded-lg h-10 justify-center items-center "
          onPress={() =>
            navigation.navigate("Professor")
            
          }
        >
          <Text className="font-poppins-bold text-white">
            Finalizar Chamada
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
