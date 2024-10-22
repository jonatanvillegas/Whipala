import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';

import Color from './../../../Color/PaletaColor'
import Entypo from '@expo/vector-icons/Entypo';
import Elemento from './../Comprar/EtiquetaDireccion'

const ComprarEntregaPedido = (props) => {

    const { data } = props;

    return (
        <View>
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
                                Seleccionar Dirección
                            </Text>
                        </View>
                    </View>


                    <View style={styles.Div} />
                    <View style={styles.FondoLista}>
                        <View style={styles.FondoListaDos}>
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
                    <View style = {styles.Pie}></View>
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
                                Agregar Dirección
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
        backgroundColor: 'white',
        width: '100%',
        height: 250,
        borderRadius: 50,
        alignItems: 'center'
    },
    Content: {
        // backgroundColor: 'red',
        width: '90%',
        height: 50,
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
        height: 50,
        alignItems: 'center',
        marginTop: 10
    },
    Texto: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    FondoLista: {
        //backgroundColor: 'blue',
        width: '100%',
        height: 680,
        alignItems: 'center'
    },
    FondoListaDos: {
        // backgroundColor: 'green',
        width: '90%',
        height: 'auto',
    },
    Div: {
        height: 15
    },
    Separadora: {
        height: 10
    },
    BottonFondo: {
        marginTop: 15,
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
    Pie:{
        height: 80
    }
})

export default ComprarEntregaPedido;