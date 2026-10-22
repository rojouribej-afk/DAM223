/* 1) ZONA DE EXPORTACIONES */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import {Perfil} from '../components/Perfil';





/* 2) ZONA DE MAIN (COMPONENTES) */
export default function TarjertasScreen() {
  return (
    <View style={styles.container}>
  
      {/* Aqui en perfil se pasan las propiedades que le asignamos en el componente */}

      <Perfil 
      
      nombre="Jesus Rojo Uribe" 
      carrera="Tecnologia de la información e innovación digital" 
      materia="Desarrollo de aplicaciones móviles" 
      cuatrimestre="Cuatrimestre 4"
      style={styles.tarjeta1}>
  

      </Perfil>

      <Perfil 
      
      nombre="Gustavo Adrian Cerati" 
      carrera="Mecatronica" 
      materia="Desarrollo de robots" 
      cuatrimestre="Cuatrimestre 5"
      style={styles.tarjeta2}>

      </Perfil>

      <Perfil 
      
      nombre="Francisco Duran Rueda" 
      carrera="Negocios Internacionales" 
      materia="Desarrollo de Empresas" 
      cuatrimestre="Cuatrimestre 6"
      style={styles.tarjeta3}>

      </Perfil>
      


 
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
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

tarjeta1:{backgroundColor:'green'},
tarjeta2:{backgroundColor:'orange'},
tarjeta3:{backgroundColor:'brown'},


});
