import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { PublicStackParamsList } from "../../routes";
import { AulasRealizadasList } from "../../components/data/AulasRealizadasList";
import { AulasRealizadas } from "../../components/AulasRealizadas";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  title: string;
  sigla: string;
  diaSemana: string;
  horaInicio: string;
  horaFim: string;
  local: string;
  totalAlunos: number;
};

export const Turma = () => {
  const { params } = useRoute<RouteProp<PublicStackParamsList, "Turma">>();
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();

  return (
    <View className="flex-1 ">
      <View className="p-5">
        <View className="h-[240px] justify-center">
          <View className="flex-row flex-1 justify-end">
            <View className="flex-1 justify-end items-center pb-1">
              <View className="items-center">
                <Text className="font-poppins-bold text-[20px]">
                  {params.title}
                </Text>
                <Text className="font-poppins text-gray-700 text-[12px]">
                  {`${params.sigla} - ${params.local} ${params.diaSemana} ${params.horaInicio} às ${params.horaFim}`}
                </Text>
              </View>
            </View>
            <View className="justify-end pr-5 pb">
              <Image
                source={require("../../img/icons/notifications.png")}
                className="w-[40px] h-[40px]"
              />
            </View>
          </View>
          <View className=" flex-row justify-between pl-5 pr-5 pt-2">
            <View className="bg-gray-200 border border-gray-400 rounded-[15] w-[80px] h-[55px] items-center justify-center">
              <Text className="font-bold text-blue-600  text-[20px] pb-0">{`${params.totalAlunos}`}</Text>
              <Text className="pt-0 text-gray-600"> alunos</Text>
            </View>
            <View className="bg-gray-200 border border-gray-400 rounded-[15] w-[80px] h-[55px] items-center justify-center">
              <Text className="font-bold text-blue-600  text-[20px] pb-0">
                22
              </Text>
              <Text className="pt-0 text-gray-600"> Aulas</Text>
            </View>
            <View className="bg-gray-200 border border-gray-400 rounded-[15] w-[80px] h-[55px] items-center justify-center">
              <Text className="font-bold text-blue-600  text-[20px] pb-0">
                87%
              </Text>
              <Text className="pt-0 text-gray-600">Freq.</Text>
            </View>
          </View>
          <View className="pt-[15px]">
            <TouchableOpacity
              className="w-auto h-[45px] bg-blue-600 rounded-[15] justify-center items-center"
              onPress={() => {
                navigation.navigate("Aula", {
                  title:params.title,
                  sigla:params.sigla,
                  diaSemana:params.diaSemana,
                  horaInicio:params.horaInicio,
                  horaFim:params.horaFim,
                  local:params.local,
                  totalAlunos:params.totalAlunos,
                });
              }}
            >
              <Text className="font-poppins-bold text-white">
                Iniciar Chamada
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-1 p-5 bg-blue-200 pr-7 pl-7 ">
        <View className="flex-row ">
          <View className="flex-1">
            <Text className="font-poppins-bold">Aulas realizadas</Text>
          </View>
          <View className="flex-row items-center">
            <Image
              source={require("../../img/icons/docs.png")}
              className="w-[18px] h-[18px]"
              resizeMode="contain"
            />
            <Text className="font-poppins-bold text-blue-600 pb-0 pl-2">
              Ver Histórico
            </Text>
          </View>
        </View>
        <FlatList
          className="flex-1"
          data={AulasRealizadasList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AulasRealizadas
              diaSemana={item.diaSemana}
              data={item.data}
              alunosPresentes={item.presenca}
              totalAlunos={params.totalAlunos}
            />
          )}
        />
      </View>
    </View>
  );
};
