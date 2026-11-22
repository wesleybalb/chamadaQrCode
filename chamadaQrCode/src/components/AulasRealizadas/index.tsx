import { View, Text, Image } from "react-native";

type Props = {
  diaSemana: string;
  data: string;
  alunosPresentes: number;
  totalAlunos: number;
};

export function AulasRealizadas({
  diaSemana,
  data,
  alunosPresentes,
  totalAlunos,
}: Readonly<Props>) {
  const frequencia =
    totalAlunos > 0 ? Math.round((alunosPresentes / totalAlunos) * 100) : 0;
  const { barra, texto } =
    frequencia === 0
      ? { barra: "bg-gray-200", texto: "text-gray-400" }
      : frequencia >= 75
        ? { barra: "bg-green-500", texto: "text-green-500" }
        : frequencia >= 50
          ? { barra: "bg-yellow-400", texto: "text-yellow-400" }
          : { barra: "bg-red-500", texto: "text-red-500" };

  return (
    <View className="bg-white p-5 rounded-[15] m-2 flex-row items-center">
      <Image
        source={require("../../img/icons/checklist.png")}
        className="w-[35px] h-[35px] mr-3"
      />
      <View className="flex-1">
        <Text className="font-poppins-bold text-black text-[12px]">
          {diaSemana}, {data}
        </Text>
        <Text className="font-poppins text-gray-600 text-[12px]">
          {alunosPresentes}/{totalAlunos} Presentes
        </Text>
      </View>
      <View className="w-[90px] items-end">
        <Text className={`font-poppins-bold text-[10px] mb-1 ${texto}`}>
          {frequencia}%
        </Text>
        <View className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
          <View
            className={`h-full rounded-full ${barra}`}
            style={{ width: `${frequencia}%` }}
          />
        </View>
      </View>
    </View>
  );
}
