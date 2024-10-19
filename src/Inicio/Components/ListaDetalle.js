import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Color from './../../Color/PaletaColor'

const ListaDetalle = (props) => {

    const {
        item
    } = props

    return (
        <View style = {styles.Container}>

            <View style={styles.ContenedorImagen}>
                <Image
                    style={styles.EstiloImagen}
                    source={item.Imag}
                />
            </View>
            <Text style = {styles.Texto}>
                {item.Titulo}
            </Text>
            <View style = {styles.Div}/>
            <TouchableOpacity>
                <View style = {styles.Boton}>
                    <Text style = {styles.Text}>Ver mas</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: 140,
        height: 185,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 20
    },
    Texto: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    Text: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'justify',
        color: 'white'
    },
    Div: {
        height: 5
    },
    Boton: {
        width: 100,
        height: 30,
        backgroundColor: Color.COLOR_SECUNDARIO,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ContenedorImagen:{
        //backgroundColor: 'blue',
        height: 110,
        width: 120,
        marginTop: 10
    },
    EstiloImagen:{
        height: 100,
        width: 120
    }
})

export default ListaDetalle;