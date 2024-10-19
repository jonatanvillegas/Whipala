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

import EmcabezadoFarmacia from './EncabezadoMedico'
import Color from '../../Color/PaletaColor'
import Element from './TopMedicoComponent'
import Elemento from './DepartamentosFiltroComponent'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import ElementoFarmacia from './MedicoListaComponent'
import { useNavigation } from '@react-navigation/native'

const ListaMedico = (props) => {
    const navigation = useNavigation();
    const handlePress = (item) => {
        // Aquí puedes pasar el `item` a la vista de destino
        navigation.navigate('PerfilDelMedico', { farmacia: item });
    };
    
    const {
        data,
        dataFiltro,
        dataFarmacia
    } = props;

    return (
        <ScrollView style={styles.Fondo}>

            <EmcabezadoFarmacia />

            <Text style={styles.TopFarmacia}>Top de Medicos</Text>

            <View style={styles.FondoListaUno}>
                <FlatList
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={() => <Text>Texto de componente</Text>}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handlePress(item, 'PerfilDelMedico')}>
                            <Element item={item} />
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() => <View style={styles.Separadora} />}
                />
            </View>

            <View style={styles.DireccionBuscador}>
                <View style={styles.ContenedorUno}>
                    <Text style={styles.TopFarmaciaTres}>Medicos</Text>
                </View>
                
                <View style={styles.ContenedorDos}>
                    <View style={styles.DireccionDos}>
                        <View style={styles.Iconos}>
                        <FontAwesome name="search" size={24} color={Color.COLOR_ICONOS} />
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
                    <FontAwesome6 name="filter" size={24} color={Color.COLOR_ICONOS} />
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

            <View style={styles.Separador} />

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

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 2,
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

export default ListaMedico;