import { useNavigation, useRoute, RouteProp } from "@react-navigation/native"; 
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TouchableOpacity,Image, FlatList } from "react-native";
import { PublicStackParamsList } from "../../routes";
import { DadosAluno } from "../../components/data/DadosAluno";
import { LinearGradient } from "expo-linear-gradient";
import { FrequenciaAlunoList } from "../../components/data/FrequenciaAlunoList";
import { colors } from "../../shared/colors";
import { useState } from "react";
import { Disciplinas } from "../../components/disciplinas";



export function Frequencia(){
  const { params } = useRoute<RouteProp<PublicStackParamsList, "Frequencia">>();
  const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>()

  const todasAulas = FrequenciaAlunoList.flatMap((disciplina) => {
    return disciplina.aulas
  })

  const aulasPresentes = todasAulas.filter((aula) => {
    return aula.presente
  })

  const frequenciaGeral = todasAulas.length > 0 ? Math.round((aulasPresentes.length / todasAulas.length) * 100) : 0

  const situacao = frequenciaGeral >= 75 ? "Regular" : "Irregular"

  
  const disciplina = FrequenciaAlunoList.find((disciplina) => {
    return disciplina.sigla === params.sigla
  })

  const [aberto, setAberto] = useState(false)




  return(
    <>
    <View className="p-5 pt-20">
      <View className="flex-row justify-between items-center ">
                <View className="items-start">
                    <TouchableOpacity onPress={() =>{navigation.navigate("Aluno")}}>
                        <Image className="w-[24px] h-[24px] rotate-180" source={require("../../img/icons/right-arrow.png")}/>
                    </TouchableOpacity>
                </View>
              <View className="justify-end pr-5 items-end">
                <Image
                  source={require("../../img/icons/notifications.png")}
                  className="w-[40px] h-[40px]"
                />
              </View>
            </View>
            <View className="pt-6">
                <Text className="font-poppins-bold text-[22px]">Minha Frequência</Text>
                <Text>{DadosAluno.periodo} - {DadosAluno.curso}</Text>
            </View>
            <LinearGradient
              colors={["#2563EB", "#1E3A5F"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{
                borderRadius: 16,
                paddingHorizontal: 16,
                paddingVertical: 14,
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View className="items-center">
                <Text className="font-poppins-bold text-blue-100" >Frequência geral</Text>
                <Text className="font-poppins-bold text-blue-100 text-[30px]">{frequenciaGeral}%</Text>
              </View>
                <View className="items-center">
                  <Text className="font-poppins-bold text-blue-100">Situação</Text>
                  <Text className={`font-poppins-bold ${ situacao === "Regular" ? "bg-green-500" : "bg-red-500" } rounded-full px-4 py-2 mt-2 text-blue-100`}>{situacao}</Text>
                </View>
            </LinearGradient>
    </View>
    <View className="flex-1 p-5" style={{ backgroundColor: colors.backgroundAluno }}>
      <TouchableOpacity onPress={() => {setAberto(!aberto)}} className="bg-white rounded-[15px] p-4 flex-row items-center">
        <Image
          className="w-[40px] h-[40px] mr-3"
          source={require("../../img/icons/aulas.png")}
        />
        <View className="flex-1">
          <Text className="font-poppins-bold text-[14px]">{disciplina.title}</Text>
          <Text className="font-poppins text-gray-600 text-[11px]">{disciplina.professor} - {disciplina.diaSemana} - {disciplina.horaInicio} - {disciplina.horaFim}</Text>
          <View className="flex-row items-center mt-1">
            <View className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
              <View className="h-full rounded-full bg-green-500" style={{ width: "95%" }} />
            </View>
            <Text className="font-poppins-bold text-[11px] text-green-500 ml-2">95%</Text>
          </View>
        </View>
        <Image
          className="w-[14px] h-[14px] ml-3"
          style={{ transform: [{ rotate: aberto ? "90deg" : "360deg"  }] }}
          source={require("../../img/icons/right-arrow.png")}
        />
      </TouchableOpacity>
      {aberto && (
        <View className="bg-gray-100 px-2 py-4 rounded-b-[15px]" >
              <FlatList
                data={disciplina.aulas}
                keyExtractor={(item) => item.id.toString()}
                numColumns={4}
                scrollEnabled={false}
                renderItem={({item}) =>(
                  <View className="w-1/4 items-center mb-3">
                    <View
                      className={`w-[60px] h-[60px] rounded-[12px] items-center justify-center ${
                        item.presente ? "bg-green-200" : "bg-red-200"
                      }`}
                    >
                      <Image
                        className={`mb-1 ${item.presente ? "w-4 h-4" : "w-3 h-3"}`}
                        source={
                          item.presente
                            ? require("../../img/icons/check.png")
                            : require("../../img/icons/delete.png")
                        }
                      />
                      <Text className="font-poppins text-[12px] text-gray-700">{item.data}</Text>
                    </View>
                  </View>
                )}
              />
        </View> 
      )}
    </View>
    </>)
}




















