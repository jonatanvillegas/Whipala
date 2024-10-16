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
        marginLeft: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation: 3,
        marginBottom: 5
    },
})

export default DepartamentosFiltroComponent;