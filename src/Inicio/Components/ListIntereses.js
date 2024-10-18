import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Color from './../../Color/PaletaColor'

const ListaComponent = (props) => {

    const {
        item
    } = props

    return (
        <View style = {styles.Container}>
            <Text style = {styles.Texto}>
                {item.TextoP}
            </Text>
            <View style = {styles.Div}/>
        </View>


    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 'auto',
        //backgroundColor: 'red',
        justifyContent: 'center'
    },
    Texto: {
        fontSize: 15,
        fontWeight: 'normal',
        lineHeight: 25,
        textAlign: 'justify'
    },
    Div: {
        height: 5
    }
})

export default ListaComponent;