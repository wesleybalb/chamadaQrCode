import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, Text, TextInput, View, Image } from "react-native";
import { PublicStackParamsList } from "../../routes";
import { Disciplinas } from "../../components/disciplinas";

type Props = {
  title: string;
  sigla: string;
  diaDaSemana: string;
  horaInicio: string;
  horaFinal: string;
  local: string;
  totalAlunos: number;
};

export const Professor = () => {
  const navigation =
    useNavigation<StackNavigationProp<PublicStackParamsList>>();

  const insertList = [
    {
      id: 1,
      title: "Cálculo II",
      sigla: "CalcII",
      diaSemana: "Ter",
      horaInicio: "19:00",
      horaFim: "21:30",
      local: "Lab12",
      totalAlunos: 38,
    },
    {
      id: 2,
      title: "Programação Mob 1",
      sigla: "PM1",
      diaSemana: "Qua",
      horaInicio: "19:00",
      horaFim: "21:30",
      local: "Lab10",
      totalAlunos: 24,
    },
    {
      id: 3,
      title: "Design Web 2",
      sigla: "DW2",
      diaSemana: "Qua",
      horaInicio: "19:00",
      horaFim: "21:30",
      local: "Lab11",
      totalAlunos: 30,
    },
    {
      id: 4,
      title: "Banco de Dados 4",
      sigla: "BD4",
      diaSemana: "Sex",
      horaInicio: "19:00",
      horaFim: "21:30",
      local: "Lab8",
      totalAlunos: 35,
    },
  ];

  return (
    <View className="flex-1 ">
      <View className="p-5">
        <View className="h-[240px] justify-center">
          <View className="flex-row flex-1  col-span-2">
            <View className="flex-1 justify-end ">
              <Image
                source={require("../../img/icons/pessoa2.png")}
                className="w-[40px] h-[40px]"
              />
            </View>
            <View className="justify-end pr-5">
              <Image
                source={require("../../img/icons/notifications.png")}
                className="w-[40px] h-[40px]"
              />
            </View>
          </View>
          <View>
            <Text className="font-poppins-bold text-gray-700 text-[20px] pt-[10px]">
              Olá, Professor
            </Text>
          </View>
          <View className="font-poppins flex-row">
            <Text className="font-poppins text-gray-700">Você tem</Text>
            <Text className="font-poppins-bold text-blue-600"> 4 turmas</Text>
            <Text className="font-poppins text-gray-700">
              ativas neste semestre
            </Text>
          </View>
          <View className="pt-[15px] pb-5">
            <TextInput
              placeholder="Buscar Turma"
              className="w-auto h-auto bg-gray-100 border-gray-500 border rounded-[15]"
            ></TextInput>
          </View>
        </View>
      </View>
      <View className="flex-1 p-5 bg-blue-200">
        <FlatList
          className="flex-1"
          data={insertList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Disciplinas
              title={item.title}
              sigla={item.sigla}
              diaSemana={item.diaSemana}
              horaInicio={item.horaInicio}
              horaFim={item.horaFim}
              local={item.local}
              totalAlunos={item.totalAlunos}
            />
          )}
        />
        <LinearGradient
          colors={["#2563EB", "#1E3A5F"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{
            borderRadius: 16,
            paddingHorizontal: 20,
            paddingVertical: 18,
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text className="font-poppins-bold text-white text-[16px]">
              Resumo do Mês
            </Text>
            <Text className="font-poppins text-blue-100 text-[12px]">
              Novembro 2026
            </Text>
          </View>
          <View className="flex-row gap-5">
            <View className="items-center">
              <Text className="font-poppins-bold text-white text-[22px]">
                48
              </Text>
              <Text className="font-poppins text-blue-100 text-[12px]">
                aulas
              </Text>
            </View>
            <View className="items-center">
              <Text className="font-poppins-bold text-white text-[22px]">
                87%
              </Text>
              <Text className="font-poppins text-blue-100 text-[12px]">
                Média
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};
