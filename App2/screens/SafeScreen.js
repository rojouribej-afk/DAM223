/* 1) ZONA DE EXPORTACIONES */

import { StyleSheet, View, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeAreaEjemplo from '../components/SafeAreaEjemplo';
import SafeAreaEjemplo from '../components/SafeAreaEjemplo';

/* 2) ZONA DE MAIN (COMPONENTES) */
export default function SafeScreen() {

  return (
<SafeAreaView style ={styles.container}
    <View style={styles.container}>
    <text> Aqui va la practica 10</text>
    <Text>Equipo de Dulce</Text>

    </View>

  );
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
