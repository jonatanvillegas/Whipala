import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    SectionList
} from 'react-native'

import EmcabezadoFarmacia from './EncabezadoFarmacia'
import Color from './../../Color/PaletaColor'
import Element from './../Components/TopFarmaciaComponent'
import Elemento from './../Components/DepartamentosFiltroComponent'
import { AntDesign } from '@expo/vector-icons';
import ElementoFarmacia from './../Components/FarmaciasListaComponent'

const ListaFarmacia = (props) => {

    const {
        data,
        dataFiltro,
        dataFarmacia
    } = props;

    return (
        <ScrollView style={styles.Fondo}>

            <EmcabezadoFarmacia />

            <Text style={styles.TopFarmacia}>Top de Farmacias</Text>

            <View style={styles.FondoListaUno}>
                <FlatList
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={() => <Text>Texto de componente</Text>}
                    renderItem={
                        ({ item }) => <Element item={item} />

                    }
                    ItemSeparatorComponent={() => <View style={styles.Separadora} />}
                />
            </View>

            <View style={styles.DireccionBuscador}>
                <View style={styles.ContenedorUno}>
                    <Text style={styles.TopFarmaciaTres}>Farmacias</Text>
                </View>
                
                <View style={styles.ContenedorDos}>
                    <View style={styles.DireccionDos}>
                        <View style={styles.Iconos}>
                            <AntDesign name="right" size={24} color="black" />
                        </View>
                        <View style={styles.CajaTexto}>
                            <TextInput
                                placeholder="Buscar"
                                placeholderTextColor="#aaa"
                            />
                        </View>
                    </View>
                </View>

            </View>

            <View style={styles.Separador} />

            <View style={styles.direccion}>
                <View>
                    <AntDesign name="right" size={24} color="black" />
                </View>

                <View style={styles.FondoListaDos}>
                    <FlatList
                        data={dataFiltro}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ListEmptyComponent={() => <Text>Texto de componente</Text>}
                        renderItem={
                            ({ item }) => <Elemento item={item} />

                        }
                        ItemSeparatorComponent={() => <View style={styles.Separadora} />}
                    />
                </View>
            </View>

            <Text style={styles.TopFarmacia}>Top de Farmacias</Text>

            <View style={styles.FondoListaUno}>
                <FlatList
                    data={dataFarmacia}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={() => <Text>Texto de componente</Text>}
                    renderItem={
                        ({ item }) => <ElementoFarmacia item={item} />

                    }
                    ItemSeparatorComponent={() => <View style={styles.Separador} />}
                />
            </View>

            <View style={styles.Separador} />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    TopFarmacia: {
        marginLeft: 15,
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.COLOR_NEGRO
    },
    TopFarmaciaTres: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.COLOR_NEGRO
    },
    Separadora: {
        width: 10
    },
    Separador: {
        height: 10
    },
    Fondo: {
        backgroundColor: Color.COLOR_FONDO
    },
    FondoListaUno: {
        backgroundColor: Color.COLOR_FONDO,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    FondoListaDos: {
        backgroundColor: Color.COLOR_FONDO,
        marginLeft: 10,
        marginRight: 20,
    },
    direccion: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10
    },
    DireccionBuscador:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    ContenedorUno: {
        width: '30%',
    },
    ContenedorDos: {
        backgroundColor: 'white',
        width: '65%',
        borderRadius: 25,
        height: 35,
    },
    DireccionDos: {
        flexDirection: 'row'
    },
    Iconos:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        width: 35,
        marginLeft: 10
    },
    CajaTexto:{
        justifyContent: 'center',
        height: 35,
        width: '75%'
    }
})

export default ListaFarmacia;