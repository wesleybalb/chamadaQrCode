import { RouteProp, useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Linking,
  TouchableOpacity,
  Image,
} from "react-native";
import { PublicStackParamsList } from "../../routes";
import { StackNavigationProp } from "@react-navigation/stack";




const TEMPO_PAUSA = 1500;

export const LerQRCode = () => {
    const {params} = useRoute<RouteProp<PublicStackParamsList, "LerQRCode">>();
    const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>();
  const [AlunosLidos, setAlunosLidos] = useState(0);
  const [permission, requestPermission] = useCameraPermissions();
  const [pausado, setPausado] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const idsLidos = useRef(new Set<string>());

  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const telaEmFoco = useIsFocused();

  useEffect(() => {
    return () => {
      if (timeRef.current) clearTimeout(timeRef.current);
    };
  }, []);

  function handleScan({ data }: BarcodeScanningResult) {
    if (idsLidos.current.has(data)) {
      setMensagem("Este aluno já foi registrado");
      return;
    }
    idsLidos.current.add(data);
    setAlunosLidos(idsLidos.current.size);
    setMensagem("Aluno Registrado!");
    setPausado(true);
    timeRef.current = setTimeout(() => {
      setPausado(false);
      setMensagem("");
    }, TEMPO_PAUSA);
  }

  if (!permission) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Verificando permissão da câmera</Text>
      </View>
    );
  }

  if (!permission.granted) {
    if (!permission.canAskAgain) {
      return (
        <View className="flex-1 items-center justify-center p-4">
          <Text>
            O acesso à câmera foi bloqueado. Libere nas configurações do
            celular.
          </Text>

          <Pressable onPress={() => Linking.openSettings()}>
            <Text>Abrir Configurações</Text>
          </Pressable>
        </View>
      );
    }
    return (
      <View className="flex-1 items-center justify-center p-4 bg-blue-600 ">
        <Text className="font-poppins-bold text-white text-[20px] pb-5">Precisamos da sua câmera para ler os QR codes dos alunos.</Text>
        <Pressable 
        className="w-40 h-12 bg-red-300 rounded-lg border-red-600 border  justify-center items-center "
        onPress={requestPermission}>
          <Text className="text-red-600 font-poppins-semibold">Permitir câmera</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <View className="bg-blue-950 items-center w-auto h-36 justify-end p-4">
        <View className="bg-blue-600 h-10 w-32 rounded-[15] items-center justify-center ">
          <Text className="font-poppins-bold text-sm text-white ">
            {AlunosLidos} Alunos Lidos
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {telaEmFoco && (
          <CameraView
            style={{ flex: 1 }}
            barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
            onBarcodeScanned={pausado ? undefined : handleScan}
          />
        )}
        {mensagem !== "" && (
          <View className="absolute bottom-10 self-center bg-black/70 px-4 py-2 rounded-full">
            <Text className="text-white font-poppins-bold">{mensagem}</Text>
          </View>
        )}
      </View>
      <View className=" bg-blue-950 items-center w-auto h-36 p-4 justify-between">
        <Text className="font-poppins text-white">
          Aponte a câmera para o QR code do aluno
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Chamada", {
              title: params.title,
              totalAlunos: params.totalAlunos,
            })
          }
          className="flex-row items-center w-5/6 h-16 justify-center gap-3 bg-blue-600 rounded-xl"
        >
          <Image
            source={require("../../img/icons/add.png")}
            className="w-10 h-10"
          />
          <Text className="font-poppins-bold text-white">
            {" "}
            Confirmar Chamada
          </Text>
        </TouchableOpacity>
        <View></View>
      </View>
    </View>
  );
};
