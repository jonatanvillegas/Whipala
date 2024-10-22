import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native'; 

import Color from './../../../Color/PaletaColor'
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const ComprarProducto = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        // Aquí puedes pasar el `item` a la vista de destino
        navigation.navigate('ListaProductos');
    };
    return (
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
                            Agregar Dirección
                        </Text>
                    </View>

                    <View style={styles.Contenedor}>
                        <View style={styles.Content2}>

                            <View style={styles.Separador} />

                            <View>
                                <Text style={styles.Texto}>
                                    Nombre de la Dirección
                                </Text>

                                <View style={styles.FondoCaja}>
                                    <View style={styles.CajaTexto}>
                                        <TextInput
                                            placeholder="Ingrese el texto"
                                            placeholderTextColor="#aaa"
                                        />
                                    </View>
                                </View>

                            </View>


                            <View style={styles.Separador} />

                            <View>
                                <Text style={styles.Texto}>
                                    Cuidad
                                </Text>

                                <View style={styles.FondoCaja}>
                                    <View style={styles.CajaTexto}>
                                        <TextInput
                                            placeholder="Ingrese el texto"
                                            placeholderTextColor="#aaa"
                                        />
                                    </View>
                                </View>

                            </View>

                            <View style={styles.Separador} />

                            <View>
                                <Text style={styles.Texto}>
                                    Telefono
                                </Text>

                                <View style={styles.FondoCaja}>
                                    <View style={styles.CajaTexto}>
                                        <TextInput
                                            placeholder="Ingrese el texto"
                                            placeholderTextColor="#aaa"
                                        />
                                    </View>
                                </View>

                            </View>

                            <View style={styles.Separador} />

                            <View>
                                <Text style={styles.Texto}>
                                    Dirección
                                </Text>

                                <View style={styles.FondoCaja}>
                                    <View style={styles.CajaTexto}>
                                        <TextInput
                                            placeholder="Ingrese el texto"
                                            placeholderTextColor="#aaa"
                                        />
                                    </View>
                                </View>

                            </View>

                            <View style={styles.BottonFondo}>
                                <TouchableOpacity>
                                    <View style={styles.BotonEstilo}>
                                        <View>
                                        <Entypo name="newsletter" size={22} color="white" />
                                        </View>

                                        <View style={styles.Separador2} />

                                        <View>
                                            <Text style={styles.InfoBoton}>
                                                Agregar
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                </View>


            </View>
        </ScrollView>
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
        width: '100%',
        height: 200,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    Separador2: {
        width: 10
    },
    BotonEstilo: {
        height: 50,
        width: 180,
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
})

export default ComprarProducto;