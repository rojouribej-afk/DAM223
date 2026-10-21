import { View, Button,Text, Image, StyleSheet} from 'react-native';
import { useState } from 'react';
/* Aqui dentro de () van las propiedades que se pasan al componente */
export const Perfil = ({nombre,carrera,materia,cuatrimestre,style}) => {

    const[mostrar,setMostrar] = useState(false);/* Aqui añadimos un estado para mostrar/ocultar la información, hay que importar useState para poder ocupar esto*/

    return(

/* Agregamos propiedades para que este componente propio pase de ser 
estatico y pase a ser dinamico, esto para que las propiedades puedan 
adquirir diferentes valores en el Main y reutilizarse este componente */
<View style={[estilos.tarjeta, style]}>

<Text   style={estilos.nombres}>{nombre} </Text>
{ mostrar &&  /* Aqui se hace la validación para mostrar/ocultar la información */
<>
<Text style={estilos.carrera}>{carrera}</Text>

<Text style={estilos.otrotexto}>{materia}</Text>
<Text style={estilos.otrotexto}>{cuatrimestre}</Text>
</>
}
<Button title="Ver perfil" onPress={ ()=>setMostrar(!mostrar) }></Button>
</View>
    );

};

const estilos = StyleSheet.create({
    nombres:{
        fontSize:24,
        fontWeight:800,
        textTransform: 'uppercase',
    },

    carrera:{
        fontSize:20,
        fontFamily:'Roboto',
        color:'blue'
    },

    otrotexto:{
        fontSize:18,
        fontFamily:'Courier',
        color:'red',
        fontStyle:'italic'
    },
    
    tarjeta:{
        borderWidth:2,
        borderRadius:12,
        padding:15,
        margin:10,
        backgroundColor:'',
    },



})