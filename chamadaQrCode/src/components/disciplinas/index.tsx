import { View, Text, Image } from "react-native";

type Props = {
  title: string;
  sigla: string;
  diaSemana: string;
  horaInicio: string;
  horaFim: string;
  local: string;
  totalAlunos: number;
};

export function Disciplinas({
  title,
  sigla,
  diaSemana,
  horaInicio,
  horaFim,
  local,
  totalAlunos,
}: Props) {
  return (
    <View className="bg-white p-5 rounded-[15] m-2 flex-row items-center">
      <View>
        <Image
          source={require("../../img/icons/aulas.png")}
          className="w-[50px] h-[50px]"
        />
      </View>
      <View className="flex-1">
        <View className="">
          <Text className="font-poppins-bold text-[14px]">{title}</Text>
        </View>
        <View>
          <Text className="font-poppins text-gray-600 text-[12px]">
            {sigla} - {diaSemana} {horaInicio}:{horaFim}
          </Text>
          <Text className="font-poppins text-gray-600 text-[12px]">
            {local} - {totalAlunos} alunos
          </Text>
        </View>
      </View>
      <View className=" items-end">
        <Image
            source={require('../../img/icons/right-arrow.png')}
            className="w-[18px] h-[18px] "
        />
      </View>
         

    </View>
    
  );
}
