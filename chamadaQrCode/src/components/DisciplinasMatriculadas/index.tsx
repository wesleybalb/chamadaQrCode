import { View, Text, TouchableOpacity, Image } from "react-native";


type Props = {
title: string;
  sigla: string;
  diaSemana: string;
  horaInicio: string;
  horaFim: string;
  frequencia: number;
}


export function DisciplinasMatriculadas({
    title,
  sigla,
  diaSemana,
  horaInicio,
  horaFim,
  frequencia,
} : Props){
    const cor = frequencia >= 75 ? "#22C55E" : frequencia >= 50 ? "#FACC15" : "#EF4444";

    return(
        <>
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
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 6 }}>
          <View style={{ flex: 1, height: 8, borderRadius: 4, backgroundColor: "#E5E7EB", overflow: "hidden" }}>
            <View style={{ height: "100%", width: `${frequencia}%`, backgroundColor: cor }} />
          </View>
          <Text className="font-poppins-bold text-[12px]" style={{ color: cor, marginLeft: 6 }}>
            {frequencia}%
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
        </>
    )
}

