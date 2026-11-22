import { View, Text, Image, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../shared/colors";
import { DisciplinasMatriculadas } from "../../components/DisciplinasMatriculadas";

export const Aluno = () => {
  const insertList = [
    {
      id: 1,
      title: "Cálculo II",
      sigla: "CalcII",
      diaSemana: "Ter",
      horaInicio: "19:00",
      horaFim: "21:30",
      frequencia: 95,
    },
    {
      id: 2,
      title: "Programação Mob 1",
      sigla: "PM1",
      diaSemana: "Qua",
      horaInicio: "19:00",
      horaFim: "21:30",
      frequencia: 75,
    },
    {
      id: 3,
      title: "Design Web 2",
      sigla: "DW2",
      diaSemana: "Qua",
      horaInicio: "19:00",
      horaFim: "21:30",
      frequencia: 63,
    },
    {
      id: 4,
      title: "Banco de Dados 4",
      sigla: "BD4",
      diaSemana: "Sex",
      horaInicio: "19:00",
      horaFim: "21:30",
      frequencia: 30,
    },
  ];

  return (
    <>
      <View className="flex-1  ">
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
                Olá, Lucas
              </Text>
              <Text>
                Você está Matriculado em{" "}
                <Text className="font-bold">4 disciplinas</Text>
              </Text>
            </View>
            <LinearGradient
              colors={["#2563EB", "#1E3A5F"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{
                borderRadius: 16,
                paddingHorizontal: 20,
                paddingVertical: 25,
                marginTop: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View className="">
                <Image
                  className="w-[40px] h-[40px]"
                  source={require("../../img/icons/scan-qr-code.png")}
                />
              </View>
              <View>
                <Text className=" font-poppins-bold text-white text-[16px] text-center">
                  Seu QR Code
                </Text>
                <Text className="font-poppins text-blue-100 text-[12px]">
                  Mostre ao professor para registrar a presença
                </Text>
              </View>
            </LinearGradient>
          </View>
        </View>
        <View
          style={{ backgroundColor: colors.backgroundAluno }}
          className=" flex-1"
        >
          <FlatList
            className="flex-1"
            contentContainerStyle={{ padding: 20 }}
            data={insertList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <DisciplinasMatriculadas
                title={item.title}
                sigla={item.sigla}
                diaSemana={item.diaSemana}
                horaInicio={item.horaInicio}
                horaFim={item.horaFim}
                frequencia={item.frequencia}
              />
            )}
          />
        </View>
      </View>
    </>
  );
};
