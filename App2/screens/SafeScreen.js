/* 1) ZONA DE EXPORTACIONES */

import { StyleSheet, View, Text} from 'react-native';



/* 2) ZONA DE MAIN (COMPONENTES) */
export default function SafeScreen() {

  return (
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
