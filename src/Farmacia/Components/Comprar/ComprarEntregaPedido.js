import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList
} from 'react-native';

import Color from './../../../Color/PaletaColor'
import Entypo from '@expo/vector-icons/Entypo';
import { RadioButton } from 'react-native-paper';
import Elemento from '../Comprar/EtiquetaPedido'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const ComprarEntregaPedido = (props) => {

    const { data } = props;

    const [checked, setChecked] = React.useState('first');

    return (
        <View style={{
            backgroundColor: Color.COLOR_FONDO,
            height: '100%',
            width: '100%'
        }}>
            <ScrollView>
                <View style={styles.Container}>
                    <View style={styles.efectoSuperior}>
                        <Text
                            style={styles.indicador}
                        >
                            Comprar
                        </Text>
                    </View>

                    <View style={styles.Fondo}>
                        <View style={styles.Content}>
                            <Text style={styles.Texto}>
                                Entega de Pedido
                            </Text>
                        </View>

                        <View style={styles.Contenedor}>

                            <View style={styles.Card}>

                                <View style={styles.Direct}>
                                    <Text
                                        style={styles.indicador1}
                                    >
                                        A Domicilio
                                    </Text>
                                    <View>
                                        <View>
                                            <RadioButton
                                                value="first"
                                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                                color={Color.COLOR_SECUNDARIO}
                                                onPress={() => setChecked('first')}
                                            />
                                        </View>
                                    </View>
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

                                    <View style={styles.dt} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.d} />

                            <View style={styles.FondoLista}>

                                <View style={styles.FondoListaDos}>
                                <View style = {{width: '100%', marginTop: 15, alignItems: 'center',}}>
                                    <View style={styles.Direct0}>
                                        
                                        <Text
                                            style={styles.indicador1}
                                            
                                        >
                                            Recoger en Farmacia
                                        </Text>
                                        <View>
                                            <View>
                                                <RadioButton
                                                    value="first"
                                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                                    color={Color.COLOR_SECUNDARIO}
                                                    onPress={() => setChecked('first')}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    </View>
                                    <FlatList
                                        data={data}
                                        horizontal={false}
                                        showsHorizontalScrollIndicator={false}
                                        ListEmptyComponent={() => <Text>Texto de componente</Text>}
                                        renderItem={
                                            ({ item }) => <Elemento item={item} />

                                        }
                                        ItemSeparatorComponent={() => <View style={styles.Separadora} />}
                                    />
                                </View>

                            </View>

                            <View style={{ height: 200 }} />
                        </View>

                    </View>


                </View>
            </ScrollView>


            <View style={styles.BottonFondo}>
                <TouchableOpacity>
                    <View style={styles.BotonEstilo}>
                        <View>
                            <Entypo name="newsletter" size={22} color="white" />
                        </View>

                        <View style={styles.Separador2} />

                        <View>
                            <Text style={styles.InfoBoton}>
                                Selecciona el Pago
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: Color.COLOR_FONDO
    },
    indicador: {
        color: Color.COLOR_PRIMARIO,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    efectoSuperior: {
        backgroundColor: Color.COLOR_VERDE,
        height: 110,
        borderRadius: 30,
        marginTop: -35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Contenedor: {
        //backgroundColor: 'red',
        width: '100%',
        height: '90%',
        borderRadius: 50,
        alignItems: 'center'
    },
    Content: {
        //backgroundColor: 'red',
        width: '90%',
        height: '10%',
        justifyContent: 'center'
    },
    Content2: {
        //backgroundColor: 'red',
        width: '90%',
        height: '100%',
    },
    Fondo: {
        //backgroundColor: 'yellow',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    Texto: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    CajaTexto: {
        justifyContent: 'center',
        height: 35,
        width: '75%',
        marginLeft: 20
    },
    FondoCaja: {
        backgroundColor: Color.COLOR_FONDO,
        borderRadius: 25,
        height: 35,
        marginTop: 10
    },
    Separador: {
        height: 30
    },
    BottonFondo: {
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red'
        backgroundColor: Color.COLOR_FONDO,
        // marginTop: 20,
        position: 'absolute',
        bottom: 20,
        right: 90
    },
    Separador2: {
        width: 10
    },
    BotonEstilo: {
        height: 50,
        width: 220,
        backgroundColor: Color.COLOR_SECUNDARIO,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    InfoBoton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
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
    Card: {
        backgroundColor: 'white',
        width: '90%',
        height: 120,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Direct: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: '40%',
        //backgroundColor: 'red'
    },
    Direct0: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: 40,
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20
    },
    Direct2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '50%',
        // backgroundColor: 'red'
    },
    d: {
        width: 10
    },
    dt: {
        height: 10
    },
    Efect: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '40%',
        backgroundColor: Color.COLOR_BLUE,
        borderRadius: 15
    },
    FondoLista: {
        //backgroundColor: 'blue',
        width: '100%',
        height: 'auto',
        alignItems: 'center'
    },
    FondoListaDos: {
        //backgroundColor: 'green',
        width: '100%',
        height: 'auto',
    },

})

export default ComprarEntregaPedido;