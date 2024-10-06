import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import Color from './../../Color/PaletaColor'
const DepartamentosFiltroComponent = (props) => {

    const { item } = props;

    return(
        <View>
            <TouchableOpacity>
            <View style = {styles.efectoSuperior}>
                <Text
                    style = {styles.indicador}
                >
                    {item.Nombre}
                </Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  
    indicador:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    efectoSuperior:{
        backgroundColor: 'white',
        height: 40,
        width: 150,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2
    },
})

export default DepartamentosFiltroComponent;