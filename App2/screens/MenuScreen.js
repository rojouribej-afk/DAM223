/* 1) ZONA DE EXPORTACIONES */

import { StyleSheet, View, Button, Text} from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import BackgroundScreen from './BackgroundScreen';
import BottomSheetScreen from './BottomSheetScreen';
import IndicatorScreen from './IndicatorScreen';




/* 2) ZONA DE MAIN (COMPONENTES) */
export default function MenuScreen() {
  const[screen, setScreen] = useState('menu');
  
  switch(screen){
    case 'safe': 
      return <SafeScreen/>
    case 'press':
      return <PressableScreen/>
    case 'tarjetas':
      return <TarjetasScreen/>
    case 'textInput':
      return <TextInputScreen></TextInputScreen>
    case 'FlatList':
      return <FlatListScreen></FlatListScreen>
    case 'ImageBackground':
      return <BackgroundScreen></BackgroundScreen>
      case 'BottomSheet':
      return <BottomSheetScreen></BottomSheetScreen>
    case 'ActivityIndicator':
      return <IndicatorScreen></IndicatorScreen>
    case 'menu':
      default: 
  return (
    <View style={styles.container}>
    <Text> Menu de Practicas </Text>
    <Button title='Practica de tarjetas' onPress={()=>setScreen('tarjetas')}></Button>
    <Button title='Practica de SafeAreaView' onPress={()=>setScreen('safe')}></Button>
    <Button title='Practica de Pressable' onPress={()=>setScreen('press')}></Button>
    <Button title='Practica de TextInput' onPress={()=>setScreen('textInput')}></Button>
    <Button title='Practica de FlatList' onPress={()=>setScreen('FlatList')}></Button>    
    <Button title='Practica de ImageBackground' onPress={()=>setScreen('ImageBackground')}></Button>
    <Button title='Practica de BottomSheet' onPress={()=>setScreen('BottomSheet')}></Button> 
    <Button title='Practica de ActivityIndicator' onPress={()=>setScreen('ActivityIndicator')}></Button>         
    </View>
  );
  }
}


/* Zona de estilos  */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
