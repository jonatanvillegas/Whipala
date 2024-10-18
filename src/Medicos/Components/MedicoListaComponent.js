import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Color from '../../Color/PaletaColor'
import { AntDesign } from '@expo/vector-icons';
const MedicoListaComponent = (props) => {

    const {
        item
    } = props

    return(

        <TouchableOpacity>

            <View style = {styles.container}>
                <View style = {styles.EstiloImagen}>
                    <Image
                        style={styles.PruebaImagen}
                        source={item.Imagen}
                    />
                </View>

                <View style = {styles.EstiloTexto}>

                    <Text style = {styles.Nombre}>Dr. {item.NombreDoctor}</Text>

                    <View style = {styles.Divisor}/>

                    <Text style = {styles.Direccion}>{item.Especialidad}</Text>

                    <View style = {styles.Divisor}/>

                    <View style = {styles.Orientacion}>
                        <Text style = {styles.Horario}>{item.Cuidad} - {item.Departamento}</Text>
                    </View>
                    
                </View>

                <View style = {styles.EstiloIcono}>
                    <View style = {styles.FondoIcono}>
                        <AntDesign name="right" size={24} color="white" />
                    </View> 
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Color.COLOR_PRIMARIO,
        height: 130,
        borderRadius: 15,
        flexDirection: 'row'
    },
    PruebaImagen: {
        height: '100%',
        width: 100,
        borderRadius: 10,
    },
    
    EstiloImagen:{
        width: '30%',
        height: '85%',
        marginLeft: 10,
        marginTop: 10,
        justifyContent: 'center',
    },
    EstiloTexto:{
        width: '52%',
        height: '85%',
        justifyContent: 'center',
        marginTop: 10,
    },
    EstiloIcono:{
        width: '15%',
        height: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    Nombre: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    Direccion: {
        fontWeight: 'normal',
        fontSize: 13
    },
    Horario: {
        fontWeight: 'normal',
        fontSize: 13,
        color:'white',
        marginLeft: 5
    },

    Orientacion: {
        flexDirection: 'row',
        backgroundColor : Color.COLOR_SECUNDARIO,
        borderRadius: 15,
        height: 22,
        alignItems :'center'
    },
    Divisor:{
        height:10
    },
    FondoIcono:{
        backgroundColor : Color.COLOR_BLUE,
        height: 35,
        width: 35,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MedicoListaComponent;