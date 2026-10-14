/* 1) ZONA DE EXPORTACIONES */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludo2} from './components/Saludo2';
import {Perfil} from './components/Perfil';





/* 2) ZONA DE MAIN (COMPONENTES) */
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo!</Text>
      <Image source={require('./assets/mano.png')}></Image>
      <Saludo></Saludo>
      <Saludo />
      <Saludo2></Saludo2>
      <Perfil></Perfil>


 
      {/* Status bar es donde se muestra la barra de estado del dispositivo */}
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona de estilos  */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
