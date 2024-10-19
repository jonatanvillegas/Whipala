import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    FlatList,
    ScrollView,
    SafeAreaView
} from 'react-native';

import Color from './../../Color/PaletaColor'
import Entypo from '@expo/vector-icons/Entypo';
import Elemento from './../Components/ListIntereses'
import Element from './../Components/ListaDetalle'

const InteresesComponent = (props) => {

    const { data, dataList } = props;

    return (
        <ScrollView>
            <View style={styles.Container}>

                <View style={styles.ContenedorImagen}>
                    <Image
                        style={styles.EstiloImagen}
                        source={data.ImagenFondo}
                    />
                </View>

                <View style={styles.Panel}>
                    <View style={styles.ContenidoD}>
                        <View style={styles.Contenido}>
                            <Text style={styles.titulo}>
                                {data.Titulo}
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.Content}>
                    <View style={styles.Contentp}>

                        <View style={styles.Uno}>
                            <Text style={styles.Info}>Novedades</Text>
                        </View>

                        <View style={styles.dec} />

                        <View style={styles.Dos}>
                            <Text style={styles.Info}>{data.FechaPublicacion}</Text>
                        </View>
                    </View>

                </View>

                <SafeAreaView style={styles.ContenedorLista}>

                    <View style={styles.FondoLista}>
                        <FlatList
                            data={data.Datos}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            ListEmptyComponent={() => <Text>Texto de componente</Text>}
                            renderItem={
                                ({ item }) => <Elemento item={item} />

                            }
                            ItemSeparatorComponent={() => <View style={styles.Separadora} />}
                        />
                    </View>

                    <View style={styles.Sep} />
                </SafeAreaView>

                <View style={styles.ContenidoA}>
                    <View style={styles.Contenido}>
                        <Text style={styles.titulo}>
                            {data.Titulo}
                        </Text>
                        <View style={styles.Dev1} />
                        <Text style={styles.DescripcionTexto}>
                            {data.Text1}
                        </Text>
                    </View>
                </View>

                <SafeAreaView style={styles.ContenedorLista}>

                    <View style={styles.FondoLista}>
                        <FlatList
                            data={dataList}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            ListEmptyComponent={() => <Text>Texto de componente</Text>}
                            renderItem={
                                ({ item }) => <Element item={item} />

                            }
                            ItemSeparatorComponent={() => <View style={{width: 10}} />}
                        />
                    </View>

                    <View style={styles.Separadora}/>
                    <View style={styles.Separadora}/>

                    <View style={styles.Contenido}>
                        <Text style={styles.DescripcionTexto}>
                            {data.Texto2}
                        </Text>
                    </View>

                </SafeAreaView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: Color.COLOR_FONDO,
        height: '100%',
        width: '100%',
    },
    FondoLista: {
        //backgroundColor: 'red',
        width: '90%',
    },
    ContenedorLista: {
        width: '100%',
        backgroundColor: Color.COLOR_FONDO,
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        marginTop: 15
    },
    ContenedorImagen: {
        backgroundColor: Color.COLOR_FONDO,
        width: '100%',
        height: 325
    },

    Separadora: {
        height: 5
    },
    Sep: {
        height: 10
    },
    EstiloImagen: {
        height: '100%',
        width: '100%',
    },

    Panel: {
        backgroundColor: Color.COLOR_FONDO,
        width: '100%',
        height: 90,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: -25
    },

    Dev1: {
        height: 10,
        //backgroundColor: 'blue',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    DescripcionTexto: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'black',
        lineHeight: 25,
        textAlign: 'justify'
    },
    ContenidoD: {
        width: '100%',
        backgroundColor: Color.COLOR_FONDO,
        height: 'auto',
        alignItems: 'center',
        marginTop: 20
    },
    ContenidoA: {
        width: '100%',
        backgroundColor: Color.COLOR_FONDO,
        height: 'auto',
        alignItems: 'center',
    },
    ContenidoC: {
        width: '100%',
        backgroundColor: 'red',
        height: 120,
        alignItems: 'center',
    },
    Contenido: {
        width: '90%',
        //backgroundColor: 'red',
        height: 'auto'
    },
    tituloCaract: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //backgroundColor: 'red',
        width: '90%'
    },
    Content: {
        //backgroundColor: 'red',
        width: '100%',
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Contentp: {
        flexDirection: 'row',
        //backgroundColor: 'red',
        width: '90%'
    },
    Uno: {
        backgroundColor: Color.COLOR_BLUE,
        width: 100,
        height: 25,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Dos: {
        backgroundColor: 'black',
        width: 180,
        height: 25,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dec: {
        width: 10
    },
    Info: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default InteresesComponent;