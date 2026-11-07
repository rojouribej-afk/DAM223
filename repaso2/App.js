import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Pressable, Alert, ActivityIndicator, Image, FlatList} from 'react-native';

export default function App() {
 
  const [libro, setLibro] = useState('');
  const[autor, setAutor] = useState('');
  const[genero, setGenero]= useState('');
  const[pantallainicio, setPantallainicio] = useState(true);
  const[libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);
  
  const renderLibro = ({ item }) => (
  <View style={styles.tarjeta}>
    <Text style={styles.tarjetaTitulo}>{item.titulo}</Text>
    <Text style={styles.tarjetaTexto}>Autor: {item.autor}</Text>
    <Text style={styles.tarjetaTexto}>Género: {item.genero}</Text>
  </View>
);

  const inicio = <Image source={require('./assets/portada.jpg')} style={{width: '10%', height: '10%'}} resizeMode="cover" />
  const libroImage = <Image source={require('./assets/Libros.jpg')} style={{width: '100%', height: '100%'}} />

  const guardarLibro = () => {
    const faltantes =[];
    if(libro.trim() === '') faltantes.push('Titulo del Libro');
    if(autor.trim() === '') faltantes.push('Autor');
    if(genero.trim() === '') faltantes.push('Genero');

    if(faltantes.length > 0){
      Alert.alert('Faltan datos', 'Completa: ' + faltantes.join(', '));
      return;
    }

    setCargando(true);

    setTimeout(() => {
      const nuevoLibro ={
      id: Date.now().toString(),
      titulo: libro.trim(),
      autor: autor.trim(),
      genero: genero.trim(),

      };
      setLibros([...libros, nuevoLibro]);
        setLibro('');
        setAutor('');
        setGenero('');
        setCargando(false);

      Alert.alert(
      'Datos registrados',
      `Titulo del Libro: ${libro}\nAutor: ${autor}\nGenero: ${genero}`
  );
    },4000);

  }

 useEffect(() => {
  const tiempo = setTimeout(() =>{
    setPantallainicio(false);
    
  }, 2000)
 }, []);

 if(pantallainicio){
  return(
    <View style={styles.container}>
     <Image source={require('./assets/portada.jpg')} style={{width: '100%', height: '100%'}} />
    </View>
  )
 }
 


  return (
    <ImageBackground
    source={require('./assets/Libros.jpg')}
    style={styles.mainContainer}
    resizeMode="cover"
    >
    <View style={styles.container}>
      <Text style={styles.titulo}>Catalogo de Libros</Text>
      <TextInput
      style={styles.input}
      placeholder="Titulo del Libro"
      value={libro}
      onChangeText={setLibro}
      />
      <TextInput
      style={styles.input}
      placeholder="Autor"
      value={autor}
      onChangeText={setAutor}
      />
      <TextInput
      style={styles.input}
      placeholder="Genero"
      value={genero}
      onChangeText={setGenero}
      />

   <Pressable 
   style={styles.boton}
   onPress={guardarLibro}
   disabled ={cargando}>
    {cargando ? (
      <ActivityIndicator size="small" color="#790000" />
    )  : (
   <Text style={styles.textoBoton}
   >Guardar Libro</Text>
    )}
   </Pressable>

   <Text style={styles.contar}>Cantidad de libros: {libros.length} </Text>

   <FlatList
   style={styles.lista}
   data={libros}
   keyExtractor={(item) => item.id}
   renderItem={renderLibro}
   />



      <StatusBar style="auto" />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#e6e6e6e5',
    width: '100%',
  },
  titulo:{
    fontSize: 30,
    padding: 60,
    fontWeight: 'bold',
    textAlign: 'center',
   color: '#7d6d1a',
  },
  boton:{
    borderRadius: 8,
    backgroundColor: '#af8d3d',
    padding: 50,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  textoBoton: {
  color: '#fff',
  fontWeight: 'bold',
},
  mainContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  contar:{
    fontSize: 18,
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
},

lista:{
  flex: 1,
},
tarjetaTitulo:{
  fondWeight: 'bold',
  fontSize: 22,
  textAlign: 'center',
},
tarjeta:{
    backgroundColor: 'rgba(255, 255, 255, 0.76)', 
  borderRadius: 16,                           
  paddingVertical: 18,
  paddingHorizontal: 20,
  marginBottom: 14,   
}

}
);
