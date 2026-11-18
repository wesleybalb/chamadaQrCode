import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import "./src/styles/global.css"

export default function App() {
  return (
    <View className="flex-1 bg-blue-600 items-center " >
      <View className='h-110 items-center justify-center pt-10 pb-5'>
        <Image source={require ("./src/img/vaca.png")} className='w-56 h-56 mt-10'></Image>
        <Text className='text-white text-[45px] font-extrabold'>Cowlabs</Text>
        <Text className='text-white text-[20px] items-ce'>Chamada Inteligente</Text>
      </View>
      <View className=' bg-white rounded-t-[25] w-full h-full items-center'>

        <Text>Open up App.tsx to start working on your app!</Text>
      </View>

      
      
    </View>
  );
}

