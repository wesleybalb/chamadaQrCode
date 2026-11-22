import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { PublicStackParamsList } from "../../routes";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";

const DIAS_SEMANA = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

const MESES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

// Horário de Brasília (America/Sao_Paulo): UTC-3, sem horário de verão desde 2019.
const OFFSET_BRASILIA_MS = -3 * 60 * 60 * 1000;

const horarioBrasilia = (data: Date) =>
  new Date(data.getTime() + OFFSET_BRASILIA_MS);

const formatarData = (data: Date) => {
  const d = horarioBrasilia(data);
  return `${DIAS_SEMANA[d.getUTCDay()]} ${d.getUTCDate()} De ${MESES[d.getUTCMonth()]} de ${d.getUTCFullYear()}`;
};

const formatarHora = (data: Date) => {
  const d = horarioBrasilia(data);
  return `${String(d.getUTCHours()).padStart(2, "0")}:${String(d.getUTCMinutes()).padStart(2, "0")}`;
};

export const Aula = () => {
  const { params } = useRoute<RouteProp<PublicStackParamsList, "Aula">>();
  const [agora] = useState(() => new Date());

  return (
    <View className="flex-1">
      <View className="p-5">
        <View className="h-[120px] justify-center">
          <View className="flex-row flex-1 justify-end">
            <View className="flex-1 justify-end items-center pb-1">
              <View className="items-center">
                <Text className="font-poppins-bold text-[20px]">
                  Abrir Aula
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
        </View>
      </View>
      <View className="flex-1 p-5 bg-blue-200 pr-7 pl-7 ">
        <View className="flex-1 ">
          <View className="">
            <View className="bg-gray-100 border border-gray-400 rounded-[15] h-32">
              <View className="pl-5 pt-3">
                <Text className="font-poppins text-gray-700">Turma Selecionada</Text>
              </View>
              <View className="flex-row pl-5 items-center">
                <View className="items-center pt-2">
                  <Image
                    source={require("../../img/icons/date.png")}
                    className="h-[45px] w-[45px]"
                  />
                </View>
                <View className="pl-5 ">
                  <Text className="font-poppins-bold ">{params.title}</Text>
                  <Text className="font-poppins text-[12px] text-gray-700">
                    {params.sigla} - {params.totalAlunos} alunos matriculados 
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="pt-14">
            <View className="bg-gray-100 border border-gray-400 rounded-[15] h-64 pl-5 pt-5">
              <View className="">
                <Text className="font-poppins text-gray-700">Data e Horário da Aula</Text>
              </View>
              <View className="flex-row flex-1 items-center">
                <View className="h-auto items-center">
                  <Image
                    source={require("../../img/icons/aulas.png")}
                    className="h-[45px] w-[45px]"
                  />
                </View>
                <View className="pl-5 ">
                  <Text className="font-poppins-bold ">{formatarData(agora)}</Text>
                  <Text className="text-blue-600 font-poppins-bold text-[12px]">
                    Iniciando às {formatarHora(agora)}
                  </Text>
                </View>
              </View>
              <View className="justify-end items-baseline pb-3 pr-3 flex-row">
                <View className="w-[100%] h-[35px] bg-gray-200 rounded-lg items-center justify-center flex-row">
                    <Text className="font-poppins text-gray-700">Número da aula no semestre </Text>
                    <Text className="font-poppins-bold text-blue-600">Aula 23</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="pt-14 ">
            <View className="border h-[120px] rounded-lg p-5 border-gray-600 justify-center">
                <Text className="font-poppins">
                    Os alunos devem apresentar seus QR Codes na Câmera. Cada código é escaneado apenas uma vez por aula.
                </Text>
            </View>
          </View>
        </View>
        <View className="pt-[15px] pb-[45px]">
          <TouchableOpacity
            className="w-auto h-[55px] bg-blue-600 rounded-lg justify-center items-center"
            onPress={() => {
              navigation.navigate("Register");
            }}
          ><View className="flex-row items-center ">
            <Image source={require('../../img/icons/scan-qr-code.png')}
            className="w-14 h-14 pr-5"/>
            <Text className="pl-5 font-poppins-bold text-white">
              Iniciar Escaneamento
            </Text>

          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
