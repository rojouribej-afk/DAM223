/* 1) ZONA DE EXPORTACIONES */

import { StyleSheet, View, Text} from 'react-native';



/* 2) ZONA DE MAIN (COMPONENTES) */
export default function PressableScreen() {

  return (
    <View style={styles.container}>
    
    <Text> Aqui va la practica 11</Text>
    <Text> Equipo de Karen </Text>

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
