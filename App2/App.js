/* 1) ZONA DE EXPORTACIONES */

import { StyleSheet, View} from 'react-native';
import MenuScreen from "./screens/MenuScreen";


/* 2) ZONA DE MAIN (COMPONENTES) */
export default function App() {

  return (
    <View style={styles.container}>
    
    <MenuScreen></MenuScreen>
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
