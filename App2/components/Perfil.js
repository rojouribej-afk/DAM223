import { View, Button,Text, Image } from 'react-native';
import { useState } from 'react';
/* Aqui dentro de () van las propiedades que se pasan al componente */
export const Perfil = ({nombre,carrera,materia,cuatrimestre}) => {

    const[mostrar,setMostrar] = useState(false);/* Aqui añadimos un estado para mostrar/ocultar la información, hay que importar useState para poder ocupar esto*/

    return(

/* Agregamos propiedades para que este componente propio pase de ser 
estatico y pase a ser dinamico, esto para que las propiedades puedan 
adquirir diferentes valores en el Main y reutilizarse este componente */
<View>

<Text>{nombre} </Text>
{ mostrar &&  /* Aqui se hace la validación para mostrar/ocultar la información */
<>
<Text>{carrera}</Text>
<Text>{materia}</Text>
<Text>{cuatrimestre}</Text>
</>
}
<Button title="Ver perfil" onPress={ ()=>setMostrar(!mostrar) }></Button>
</View>
    );

};