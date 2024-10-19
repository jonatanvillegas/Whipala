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

const EtiquetaDireccion = (props) => {

    const [checked, setChecked] = React.useState('first');
    const { item } = props;

    return (
        <View style={styles.Container}>

            <View style={styles.efectoSuperior}>
                <View style={styles.Direct}>
                    <Text
                        style={styles.indicador1}
                    >
                        {item.Lugar}
                    </Text>
                    <View>
                        <View>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                color = {Color.COLOR_SECUNDARIO}
                                onPress={() => setChecked('first')}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.Directs}>
                    <View style = {styles.Uno}>
                        <Entypo name="location-pin" size={50} color= {Color.COLOR_BLUE}/>
                    </View>

                    <View style = {styles.Dos}>
                        <Text
                            style={styles.indicador}
                        >
                            Dirección:  {item.Direccion}
                        </Text>
                    </View>
                    
                </View>


                <View style={styles.Directz}>
                    <TouchableOpacity>
                        <MaterialIcons name="delete" size={24} color="red" />
                    </TouchableOpacity>
                </View>



            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: 'auto',
        width: '100%',
        //backgroundColor: 'red',
        backgroundColor: Color.COLOR_FONDO
    },
    indicador1: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    indicador: {
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'justify'
    },
    efectoSuperior: {
        //backgroundColor: 'blue',
        height: 130,
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    Direct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: '30%',
        //backgroundColor: 'red'
    },
    Directs: {
        width: '90%',
        height: '40%',
        //backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Directz: {
        width: '90%',
        height: '30%',
        //backgroundColor: 'green',
        alignItems: 'flex-end'
    },
    Uno: {
        width: '15%',
        //backgroundColor: 'green'
    },
    Dos:{
        width: '85%',
        height: 40
    }
})

export default EtiquetaDireccion;