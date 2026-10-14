
/* Importamos el componente de texto */
import { View, Button,Text, Image } from 'react-native';


export const Saludo2 = () => {
    return(
        <View>
        <Text>Hola RN: Componente propio</Text>
        <Image source={require('../assets/mano.png')}></Image>
        <Button title ="Presiona para saludar" ></Button>
        </View>
    );  
};