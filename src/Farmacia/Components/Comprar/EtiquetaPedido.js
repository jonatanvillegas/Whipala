import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import Color from './../../../Color/PaletaColor'
import { RadioButton } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const EtiquetaPedido = (props) => {

    const [checked, setChecked] = React.useState('first');
    const { item } = props;

    return (
        <View style={styles.Container}>

            <View style={styles.Card}>

                <View style={styles.Direct}>
                    <Text
                        style={styles.indicador1}
                    >
                        {item.Nombre}
                    </Text>
                    
                </View>
                <View style={styles.Directr}>
                    <Text
                        style={styles.indicador1}
                    >
                        {item.Direccion}
                    </Text>
                    
                </View>
 
                <TouchableOpacity
                    style={styles.Efect}
                >

                    <View style={styles.Direct2}>
                        <View>
                            <View>
                            <Ionicons name="time-outline" size={22} color="white" />
                            </View>
                        </View>

                        <View style={styles.d} />

                        <Text
                            style={styles.indicador2}
                        >
                            Elejir una dirección de entrega
                        </Text>
                        <View style={styles.d} />
                        <View>
                            <View>
                            <AntDesign name="right" size={22} color="white" />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: 170,
        width: '100%',
        //backgroundColor: 'red',
        alignItems:'center'
       // backgroundColor: Color.COLOR_FONDO
    },
    Card: {
        backgroundColor: 'white',
        width: '90%',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        //borderRadius: 10
    },
    Efect: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '30%',
        backgroundColor: Color.COLOR_BLUE,
        borderRadius: 15
    },
    Direct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: '20%',
        //backgroundColor: 'yellow'
    },
    Direct2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '50%',
        //backgroundColor: 'blue'
    },
    Directr: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '25%',
         //backgroundColor: 'red'
    },
    indicador1: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    indicador2: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'justify',
        color: 'white'
    },
    d: {
        width: 10
    },
    dt: {
        height: 10
    },
})

export default EtiquetaPedido;