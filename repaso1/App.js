import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Switch, Button, Alert } from 'react-native';
import {useState} from 'react';


export default function App() {
const[nombre, setNombre] = useState('');
const[carrera, setCarrera] = useState('');
const[semestre, setSemestre] = useState('');
const[asistira, setAsistira] = useState(false);
const[constancia, setConstancia] = useState(false);
const[deportes, setDeportes] = useState(false);


  const registrar = () =>{
      const faltantes = [];
      if(nombre.trim() === '') faltantes.push('Nombre');
      if(carrera.trim() === '') faltantes.push('Carrera');
      if(semestre.trim() === '') faltantes.push('Semestre');

      if(faltantes.length > 0){
        Alert.alert('Faltan datos', 'Completa: ' + faltantes.join(', '));
        return;
      }

      Alert.alert(
        'Datos registrados',
        `Nombre: ${nombre}\nCarrera: ${carrera}\nSemestre: ${semestre}\nAsistirá: ${asistira ? 'Sí' : 'No'}\nConstancia: ${constancia ? 'Sí' : 'No'}\nDeportes: ${deportes ? 'Sí' : 'No'}`
      );
  setNombre('');
  setCarrera('');
  setSemestre('');
  setAsistira(false);
  setConstancia(false);
  setDeportes(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario  </Text>
      <TextInput style={styles.input} 
      placeholder="Nombre" 
      value = {nombre}
      onChangeText={setNombre}/>
      <TextInput style={styles.input} 
      placeholder="Carrera" 
      value ={carrera}
      onChangeText={setCarrera}/>
      <TextInput style={styles.input} 
      placeholder="Semestre"
      keyboardType='numeric'
      value ={semestre}
      onChangeText={setSemestre}/>
      <Text style={styles.subtitulo}> Opciones </Text>
      <Text> ¿Asistira al taller? </Text>
      <Switch value={asistira} 
      onValueChange={setAsistira}/>
      <Text> ¿Requiere constancia? </Text>
      <Switch value={constancia}
       onValueChange={setConstancia}/>
      <Text> ¿Participa en actividades deportivas? </Text>
      <Switch
      value ={deportes}
      onValueChange={setDeportes}/>
      <Button style={styles.boton}
      title = "Registrar"
      onPress={registrar}/>
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    padding: 85,
    textAlign: 'center',
  },
      input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
    subtitulo:{
    fontSize: 22,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    },
    boton:{
      borderRadius: 48,
      padding: 10,
      marginBottom: 12,
      backgroundColor: '#9fa4a8',
    }
});
