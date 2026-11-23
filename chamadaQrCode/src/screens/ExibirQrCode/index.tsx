import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Text, View, Image, TouchableOpacity } from "react-native"
import {PublicStackParamsList} from "../../routes"
import { DadosAluno } from "../../components/data/DadosAluno"

export function ExibirQrCode() {

    const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>()
    return(
        <>
        <View className="flex-1  ">
        <View className="p-5 pt-10 flex-1">
          <View className="h-[170px] ">
            <View className="flex-row flex-1 items-center">
                <View className="items-start">
                    <TouchableOpacity onPress={() =>{navigation.navigate("Aluno")}}>
                        <Image className="w-[24px] h-[24px] rotate-180" source={require("../../img/icons/right-arrow.png")}/>
                    </TouchableOpacity>
                </View>
              <View className="flex-1 justify-end items-center">
                <Text className="font-poppins-bold text-[20px] ">Seu QR Code</Text>
              </View>
              <View className="justify-end pr-5 items-end">
                <Image
                  source={require("../../img/icons/notifications.png")}
                  className="w-[40px] h-[40px]"
                />
              </View>
            </View>
            <View className="flex-row flex-1 items-center justify-center" >
                <View className="pr-5">
                    <Image className="w-[45px] h-[45px]" source={require("../../img/icons/pessoa1.png")}
                    />
                </View>
              <View>
                <Text className="font-poppins-bold text-gray-700 text-[20px] pt-[10px]">
                {DadosAluno.nome}
              </Text>
              <Text>{`${DadosAluno.periodo} - ${DadosAluno.curso} - ${DadosAluno.semestre}`}</Text>
              </View>
            </View>
          </View>
          <View className="flex-1 items-center pt-16">
                <Image className=" w-[350px] h-[350px]" source={require("../../img/icons/scan-qr-code.png")}/>
                <Text className="font-poppins-bold text-[20px] pt-10 ">Mostre este QR code ao professor</Text>
                <Text className="text-center text-gray-600 text-[16px] pb-10">O Código é pessoal e Intransferível.{"\n"} Ele será Escaneado para Registrar Sua Presença</Text>
                <View className=" bg-gray-300 rounded-[5] h-[40px] w-[350] justify-center">
                    <Text className="text-center text-[14px] text-center font-poppins text-gray-700"> Aumente O brilho da tela para facilitar a leitura </Text>
                </View>
            </View>
        </View>
      </View>
        </>
    )
}
