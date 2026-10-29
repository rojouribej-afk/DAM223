/* 1) ZONA DE EXPORTACIONES */
import { useState } from 'react';
import { StyleSheet, View, Text, Switch, Pressable} from 'react-native';

/* 2) ZONA DE MAIN (COMPONENTES) */
export default function PressableScreen() {

  const[encendido,SetEnciendido] = useState(false);
  const[contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
    
    <Text style = {styles.titulo}> Aqui va la practica 11 Switch y Pressable </Text>
    <Text> Equipo de Karen </Text>
    <Switch
    value = {encendido}
    onValueChange={(valor) => SetEnciendido(valor)}
    />
    <Text style={styles.texto}>
      El switch esta: {encendido ? 'Encendido': 'Apagado'}
    </Text>

    <Pressable
    style={styles.boton}
    onPress={() => setContador(contador + 1)}>

    <Text style = {styles.textoBoton}> Presioname </Text>
    </Pressable>
    <Text style ={styles.texto}>Veces presionado: {contador} </Text>
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
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  texto: {
    fontSize: 18,
    marginVertical: 15,
  },
 boton: {
  backgroundColor: '#117480ee',
  padding: 15,
  borderRadius: 10,
  marginTop: 30,
 },
 textoBoton: {
color:'white',
fontSize: 18,
fontWeight: 'bold',
 }

});
