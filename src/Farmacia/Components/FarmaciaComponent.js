import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native'

import EmcabezadoFarmacia from './EncabezadoFarmacia'
import Color from './../../Color/PaletaColor'
import { cordovaPopupRedirectResolver } from 'firebase/auth/cordova'
const ListaFarmacia = (props) => {

    const {
        data
    } = props;

    return (
        <SafeAreaView style={styles.Fondo}>

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
        </SafeAreaView>

    );
}


const Element = (props) => {

    const { item } = props;

    return (
        <View>
            <View style={styles.container}>

                <View style = {styles.EstiloImagen}>
                    <Image
                        style={styles.PruebaImagen}
                        source={item.Imagen}
                    />
                </View>
                
                <View style = {styles.EstiloTexto}>
                     <Text style = {styles.Titulo}> {item.NombreFarmacia} </Text>
                     <Text style = {styles.Direccion}> {item.Direccion} </Text>
                </View>

                <View style = {styles.EstiloBoton}>

                    <View style = {styles.ParticionUno}>

                    <TouchableOpacity>
                                    <View style = {styles.FondoBoton}>
                                        <View  style = {styles.FondoUnoBoton}>
                                            <Image
                                                style={styles.IconoBotton}
                                                source={require('../../../assets/ImagenCard.jpg')}
                                            />
                                        </View>

                                        <View style = {styles.FondoDosBoton}>
                                            <Text>
                                                Detalles
                                            </Text>
                                        </View>

                                    </View>

                            </TouchableOpacity>
                    </View>

                    <View style = {styles.ParticionUno}>

                    <TouchableOpacity>
                                    <View style = {styles.FondoBoton}>
                                        <View  style = {styles.FondoUnoBoton}>
                                            <Image
                                                style={styles.IconoBotton}
                                                source={require('../../../assets/ImagenCard.jpg')}
                                            />
                                        </View>

                                        <View style = {styles.FondoDosBoton}>
                                            <Text>
                                                Detalles
                                            </Text>
                                        </View>

                                    </View>

                            </TouchableOpacity>
                    </View>

                </View>
                
            </View>
        </View>

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
    container: {
        width: 150,
        backgroundColor: Color.COLOR_PRIMARIO,
        height: 250,
        borderRadius: 20
    },
    PruebaImagen: {
        height: '100%',
        width: '90%',
        borderRadius: 15,
        marginTop: 15
    },
    Separadora: {
        width: 10
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
    EstiloImagen:{
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    EstiloTexto: {
        backgroundColor: 'green,',

        marginLeft: 10,
        marginRight: 10,
        marginTop: 15
    },
    EstiloBoton:{
        //backgroundColor: 'blue',
        height: '35%',
    },
    Titulo:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    Direccion:{
        fontSize: 13,
        fontWeight: 'normal',
    },
    FondoBoton:{
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90%',
        backgroundColor: Color.COLOR_SECUNDARIO,
        padding: 2,
        height: '85%',
        borderRadius: 10,
    },
    FondoUnoBoton:{
        //backgroundColor: 'yellow',
        width: '20%',
    },
    FondoDosBoton:{
       // backgroundColor: 'red',
        width: '80%',
    },
    ParticionUno:{
        //backgroundColor: 'green',
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconoBotton: {
        height: '80%',
        width:'80%'
    },
})

export default ListaFarmacia;