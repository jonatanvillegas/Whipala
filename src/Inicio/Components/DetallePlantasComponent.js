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
import Elemento from './../Components/CaracteristicasPlantaComponent'

const DetallePlantaComponent = (props) => {

    const { data } = props;

    return (
        <ScrollView>
            <View style={styles.Container}>

                <View style={styles.ContenedorImagen}>
                    <Image
                        style={styles.EstiloImagen}
                        source={data.ImagenFondo}
                    />
                </View>

                <View style={styles.Panel}/>

                <View style={styles.ContenedorTexto}>
                    <View style={styles.TextoCom}>
                        <View style={styles.TextoCom2}>
                            <Text style={styles.titulo}>{data.Nombre}</Text>

                            <View style={styles.Dev} />

                            <View style={styles.Borde}>
                                <Text style={styles.Tipo}>
                                    {data.Tipo}
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.Efecto}>
                        <Image
                            style={styles.ImagenF}
                            source={data.ImagenFrente}
                        />
                    </View>

                    <View style={styles.ContenidoD}>
                        <View style={styles.Contenido}>
                            <Text style={styles.DescripcionTexto}>
                                {data.Descripcion}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.Dev} />
                    
                    <View style = {styles.C}>
                        <View style={styles.ContenidoIconos}>
                            <View style={styles.Fondo}>
                                <Entypo name="location-pin" size={50} color= {Color.COLOR_SECUNDARIO}/>
                                <Text style={styles.TextoCard}>{data.TituloIcon1}</Text>
                            </View>
                            <View style={styles.Fondo}>
                                <Entypo name="location-pin" size={50} color= {Color.COLOR_SECUNDARIO} />
                                <Text style={styles.TextoCard}>{data.TituloIcon2}</Text>
                            </View>
                            <View style={styles.Fondo}>
                                <Entypo name="location-pin" size={50} color= {Color.COLOR_SECUNDARIO} />
                                <Text style={styles.TextoCard}>{data.TituloIcon3}</Text>
                            </View>
                        </View>
                    </View>
                
                    <View style={styles.Dev} />
                </View>

                <SafeAreaView style={styles.ContenedorLista}>

                    <View style={styles.tituloCaract}>
                        <Text style={styles.titulo}>Características Naturales</Text>
                    </View>

                    <View style={styles.Dev1} />

                    <View style={styles.FondoLista}>
                        <FlatList
                            data={data.Caracteristicas}
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
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        //backgroundColor: 'red',
        height: '100%',
        width: '100%',
    },
    FondoLista: {
        backgroundColor: Color.COLOR_FONDO,
        width: '90%'
    },
    ContenedorLista: {
        width: '100%',
        backgroundColor: Color.COLOR_FONDO,
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',

    },
    ContenedorImagen: {
        //backgroundColor: 'blue',
        width: '100%',
        height: 320
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
    ImagenF: {
        height: 180,
        width: 180
    },
    Efecto: {
        marginTop: -210,
        width: '100%',
        alignItems: 'flex-end',
    },
    ContenedorTexto: {
        //backgroundColor: 'red',
        marginTop: -130
    },
    Panel: {
        backgroundColor: Color.COLOR_FONDO,
        width: '100%',
        height: 130,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: -25
    },
    TextoCom: {
        //backgroundColor: 'blue',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 130,
        marginTop: -10,
    },
    TextoCom2: {
        //backgroundColor: 'violet',
        width: '90%',
    },
    Dev: {
        height: 20,
        backgroundColor: Color.COLOR_FONDO,
    },
    Dev1: {
        height: 10,
        backgroundColor: Color.COLOR_FONDO,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    Tipo: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    Borde: {
        backgroundColor: Color.COLOR_BLUE,
        borderRadius: 15,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    DescripcionTexto: {
        fontSize: 15,
        fontWeight: 'normal',
        color: 'black',
        lineHeight: 25
    },
    ContenidoD: {
        width: '100%',
        backgroundColor: Color.COLOR_FONDO,
        height: 'auto',
        alignItems: 'center',
        marginTop: 20
    },
    Contenido: {
        width: '90%',
        //backgroundColor: 'red',
        height: 'auto'
    },
    tituloCaract:{
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //backgroundColor: 'red',
        width: '90%'
    },
    Fondo: {
        height: 90,
        width: 110,
        backgroundColor: '#e6fff5',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    C:{
        width: '100%',
        backgroundColor: Color.COLOR_FONDO,
        alignItems: 'center'
    },
    ContenidoIconos: {
        backgroundColor: Color.COLOR_FONDO,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    TextoCard: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    },
})

export default DetallePlantaComponent;