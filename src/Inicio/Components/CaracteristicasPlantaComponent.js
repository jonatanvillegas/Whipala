import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Color from './../../Color/PaletaColor'

const FarmaciasListaComponent = (props) => {

    const {
        item
    } = props

    return (
        <View style = {styles.Container}>
            <Text style = {styles.Texto}>
                {item.Texto}
            </Text>
            <View style = {styles.Div}/>
        </View>


    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 'auto',
        backgroundColor: Color.COLOR_FONDO,
        justifyContent: 'center'
    },
    Texto: {
        fontSize: 15,
        fontWeight: 'normal',
        lineHeight: 25,
        textAlign: 'justify'
    },
    Div: {
        height: 15
    }
})

export default FarmaciasListaComponent;