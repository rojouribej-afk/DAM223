
import {use, useState} from 'react';
import {Stylesheet, Text, Button, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SafeAreaEjemplo(){
    const[mensaje, setMensaje] = useState('Bienvenidos a nuestra practica')
    return(

        
<SafeAreaView style= {Styles.container} edges={['top', 'bottom']}> 
    <Text style = {styles.titulo}>Ejemplo de SafeAreaView </Text>
    <text style = {styles.mensaje}>{mensaje}</text>
    <Button 
    title ="cambiar mensaje"
    onPress={() => (setMensaje === 'Esta es nuestra practica'
          ? 'Hola': 'Esta es nuestra practica'
    )} />
    </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container:{
    backgroundColor: 'blue',
    padding:20,
    alightItems: 'center',
    borderRadius: 10,
    },

    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    mensaje:{
        fontSize: 16,
        marginBottom: 10,

    }


});