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

const TopMedicoComponent = (props) => {

    const { item } = props;

    return(
        
        <View style={styles.container}>

            <View style = {styles.EstiloImagen}>
                <Image
                    style={styles.PruebaImagen}
                    source={item.Imagen}
                />
            </View>

            <View style = {styles.ContenedorSecundario}>
                <View style = {styles.Alinear}>
                    <Text style = {styles.Nombre}>Dr. {item.NombreDoctor}</Text>
                    <Text style = {styles.Direccion} >{item.Especialidad}</Text>
                </View>

                <View style = {styles.Separador}/>

                <View style = {styles.Contenido}>
                    <View style = {styles.EstiloBotonDos}>
                        <View style = {styles.Icono2}>
                            <AntDesign name="right" size={24} color="black" />
                        </View>

                         <View style ={styles.orientacion}>
                            <Text style = {styles.InfoBotonDos}>{item.Cuidad} - {item.Departamento}</Text>
                        </View>
                    </View>

                </View>
      
                <View style = {styles.ContenedorBotones}>
                    <TouchableOpacity>
                        <View style = {styles.EstiloBoton}>
                            <View style = {styles.Texto}>
                                <Text style = {styles.InfoBoton}>Ver Perfil</Text>
                            </View>

                        </View>

                    </TouchableOpacity>
                </View>

            </View>
            
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        width: 150,
        backgroundColor: Color.COLOR_PRIMARIO,
        height: 250,
        borderRadius: 20,
    },
    PruebaImagen: {
        height: '100%',
        width: '90%',
        borderRadius: 15,
        marginTop: 15
    },

    EstiloImagen:{
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ContenedorSecundario: {
        //backgroundColor :'red',
        width: '100%',
        height: '65%',
    },
    Nombre: {
        fontWeight: 'bold',
        fontSize: 13
    },
    Direccion: {
        fontWeight: 'normal',
        fontSize: 13
    },
    Alinear: {
        marginRight: 8,
        marginLeft: 8,
        marginTop: 10
        //backgroundColor: 'green'
    },
    ContenedorBotones: {
        height: '34%',
        marginLeft: 8,
        marginRight: 8,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: -9
    },
    EstiloBoton: {
        backgroundColor : Color.COLOR_SECUNDARIO,
        height: 30,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    EstiloBotonDos: {
        //backgroundColor: 'red',
        height: 35,
        width: 150,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Icono:{
 //       backgroundColor: 'yellow',
        width: '35%',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Icono2:{
 //       backgroundColor: 'yellow',
        width: '18%',
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Texto:{
    //    backgroundColor: 'red',
        width: '65%',
        height: 25,
        justifyContent: 'center'
    },
    InfoBoton: {
        fontWeight: 'bold',
        fontSize: 13,
        color: 'white'
    },
    InfoBotonDos: {
        fontWeight: 'normal',
        fontSize: 13,
        color: 'black'
    },
    Separador: {
        height: 5
    },
    orientacion: {
     //  backgroundColor: 'blue',
        width: '80%',
        marginRight: 4
    },
    Divisor: {
        width: 5
    },
    Contenido:{
       //backgroundColor: 'green',
        marginTop: -4,
    }
})

export default TopMedicoComponent;