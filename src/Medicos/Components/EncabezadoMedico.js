import React from 'react';

import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import Color from '../../Color/PaletaColor'

const EncabezadoMedico = () => {
    return(
        
        <View style = {styles.efectoSuperior}>
            <Text
                style = {styles.indicador}
            >
                Medico
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  
    indicador:{
        color: Color.COLOR_PRIMARIO,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    efectoSuperior:{
        backgroundColor: Color.COLOR_VERDE,
        height: 110,
        borderRadius: 30,
        marginTop: -35,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default EncabezadoMedico;