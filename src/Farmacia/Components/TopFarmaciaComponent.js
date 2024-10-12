import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Color from './../../Color/PaletaColor'
import { AntDesign } from '@expo/vector-icons';

const TopFarmaciaComponent = (props) => {

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
                    <Text style = {styles.Nombre}>{item.NombreFarmacia}</Text>
                    <Text style = {styles.Direccion} >{item.Direccion}</Text>
                </View>

                <View style = {styles.ContenedorBotones}>
                    <TouchableOpacity>
                        <View style = {styles.EstiloBoton}>
                            <View style = {styles.Icono}>
                                <AntDesign name="right" size={24} color="white" />
                            </View>

                            <View style = {styles.Texto}>
                                <Text style = {styles.InfoBoton}>Detalles</Text>
                            </View>

                        </View>

                    </TouchableOpacity>

                    <View style = {styles.Separador}></View>

                    <TouchableOpacity>
                        <View style = {styles.EstiloBotonDos}>
                            <View style = {styles.Icono}>
                                <AntDesign name="right" size={24} color="white" />
                            </View>

                            <View style = {styles.Texto}>
                                <Text style = {styles.InfoBoton}>Unicación</Text>
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
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ContenedorSecundario: {
       // backgroundColor :'red',
        width: '100%',
        height: '65%',
    },
    Nombre: {
        fontWeight: 'bold',
        fontSize: 13
    },
    Direccion: {
        fontWeight: 'normal',
        fontSize: 11
    },
    Alinear: {
        marginRight: 8,
        marginLeft: 8,
        marginTop: 10
        //backgroundColor: 'green'
    },
    ContenedorBotones: {
        height: '50%',
        marginLeft: 8,
        marginRight: 8,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 3
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
        backgroundColor : Color.COLOR_BLUE,
        height: 30,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    Icono:{
 //       backgroundColor: 'yellow',
        width: '35%',
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
    Separador: {
        height: 5
    }
})

export default TopFarmaciaComponent;