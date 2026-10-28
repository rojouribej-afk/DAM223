/* 1) ZONA DE EXPORTACIONES */

import { StyleSheet, View, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeAreaEjemplo from '../components/SafeAreaEjemplo';
import ScrollViewEjemplo from '../components/ScrollViewEjemplo';

/* 2) ZONA DE MAIN (COMPONENTES) */
export default function SafeScreen() {

  return (
<SafeAreaView style ={styles.container} edges={['top', 'bottom']}>
    <Text> Aqui va la practica 10</Text>
    <Text>Equipo de Dulce</Text>
    <SafeAreaEjemplo/>
    <ScrollViewEjemplo/>

    </SafeAreaView>

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

  
tituloPrincipal: {
  fontSize:24,
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: 15,
},

});
