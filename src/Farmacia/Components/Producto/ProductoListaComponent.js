import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import Color from './../../../Color/PaletaColor'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

const ProductoListaComponent = (props) => {

    const {
        item
    } = props

    return (

        <TouchableOpacity>

            <View style={styles.container}>
                <View style={styles.EstiloImagen}>
                    <Image
                        style={styles.PruebaImagen}
                        source={item.Imagen}
                    />
                </View>


                <View style={styles.EstiloTexto}>
                    <View style={styles.ContenedorTitulo}>
                        <Text style={styles.TextoTitulo}>Moringa</Text>
                    </View>

                    <View style={styles.ContenedrDescripcion}>
                        <Text style = {styles.TextoDescripcion}>Suplemento alimenticio contiene vitaminas A y C, Antioxidante Natural.</Text>
                    </View>

                    <View style={styles.ContenedrPrecio}>
                        <Text style = {styles.TextoPrecio}>Precio:</Text>
                    </View>

                    <View style={styles.ContenedorDireccion}>
                        <View style = {styles.FondoUno}> 
                            <Text style = {styles.PrecioSub}>
                                C$ 500
                            </Text>
                        </View>

                        <View style = {styles.FondoDos}> 
                            <TouchableOpacity>
                                <View style = {styles.EstiloBoton}>
                                    <Entypo name="shopping-cart" size={20} color="white" />
                                </View>
                            </TouchableOpacity>

                            <View style = {styles.Separador}/>

                            <TouchableOpacity>
                                <View style = {styles.EstiloBoton}>
                                    <AntDesign name="heart" size={20} color="white" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                    </View>


                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Color.COLOR_PRIMARIO,
        height: 170,
        borderRadius: 15,
        flexDirection: 'row',
        shadowColor: '#dcdcdc',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 2,
    },
    PruebaImagen: {
        height: '100%',
        width: 140,
        borderRadius: 10
    },

    EstiloImagen: {
        width: '40%',
        height: '90%',
        marginLeft: 10,
        marginTop: 8,
        justifyContent: 'center',
    },
    EstiloTexto: {
        width: '55%',
        height: '90%',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 45,
        marginLeft: 5,
        //backgroundColor: 'red'
    },
    TextoTitulo: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    TextoDescripcion: {
        fontSize: 14,
        fontWeight: 'nromal',
        textAlign: 'justify',
        marginRight: 5,
        lineHeight: 20
    },
    TextoPrecio: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    PrecioSub: {
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: Color.COLOR_BLUE,
        borderRadius: 10,
        textAlign: 'center',
        color: 'white'
    },

    ContenedorTitulo: {
       //backgroundColor: 'green',
        with: '100%',
        height: '15%',
        justifyContent: 'center',
    },
    ContenedrDescripcion: {
       //backgroundColor: 'yellow',
        with: '100%',
        height: '50%',
        justifyContent: 'center',
    },
    ContenedrPrecio:{
        //backgroundColor: 'Blue',
        with: '100%',
        height: '15%',
        justifyContent: 'center'
    },
    ContenedorDireccion:{
       // backgroundColor: 'blue',
        with: '100%',
        height: '20%',
        justifyContent: 'center',
        marginTop: -1,
        flexDirection: 'row'
    },
    Bordeo:{
    backgroundColor: 'green',
    height: 35,
    //alignItems: 'center',
    justifyContent: 'center',
    },

    FondoUno:{    
        //backgroundColor: 'red',
        height: '100%',
        width: '40%',
        justifyContent: 'center',
    },

    FondoDos:{    
        //backgroundColor: 'red',
        height: '100%',
        width: '58%',
        justifyContent:'flex-end',
        alignItems: 'flex-end',
        marginRight: 5,
        flexDirection: 'row'
    },
    EstiloBoton: {
        backgroundColor: Color.COLOR_SECUNDARIO,
        height: 35,
        width: 35,
        borderRadius: 25,
        justifyContent:'center',
        alignItems: 'center'
    },
    Separador:{
        width: 5
    }
})

export default ProductoListaComponent;