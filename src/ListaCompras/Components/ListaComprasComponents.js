import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Color from "../../Color/PaletaColor";
import { Checkbox } from 'react-native-paper';
import Octicons from '@expo/vector-icons/Octicons';

const ListaComprasComponents = () => {
    const [cantidad, setCantidad] = useState(1);
    const [isChecked, setIsChecked] = useState(false);
    const [farmaciaChecked, setFarmaciaChecked] = useState(false);

    const incrementarCantidad = () => setCantidad(cantidad + 1);
    const disminuirCantidad = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    const productos = [
        { id: 1, nombre: 'Moringa', precio: 15.99, imagen: require('../../../assets/producto.jpg'), checked: false },
        { id: 2, nombre: 'Producto 2', precio: 120, imagen: require('../../../assets/producto.jpg'), checked: false },
        { id: 3, nombre: 'Producto 3', precio: 180, imagen: require('../../../assets/producto.jpg'), checked: false },
    ];

    const [productosState, setProductosState] = useState(productos);
    // Función que marcará o desmarcará todos los productos de la farmacia
    const toggleFarmaciaCheck = () => {
        setFarmaciaChecked(!farmaciaChecked);
        setIsChecked(!farmaciaChecked);  // Marcar/desmarcar todos los productos
    };

    // Calcular el total de los productos seleccionados
    const calcularTotal = () => {
        return productosState
            .filter((producto) => producto.checked)
            .reduce((acc, producto) => acc + producto.precio, 0)
            .toFixed(2); // Limita a dos decimales
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.efectoSuperior}>
                <Text style={styles.indicador}>Carrito</Text>
            </View>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Tu lista de compras</Text>
                <View style={styles.contenedorDatosFarmacia}>
                    <View style={styles.farmaciaHeader}>
                        <Checkbox
                            status={farmaciaChecked ? 'checked' : 'unchecked'}
                            onPress={toggleFarmaciaCheck}
                            color='#006157' // Cambia el color del checkbox
                            uncheckedColor="#000"
                        />
                        <Text style={styles.nombreFarmacia}>Farmacia KNOP</Text>
                    </View>

                    <View style={styles.contenedorProducto}>
                        <Checkbox
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setIsChecked(!isChecked);
                            }}
                            color='#006157' // Cambia el color del checkbox
                            uncheckedColor="#000"
                        />
                        {/* Imagen del producto */}
                        <Image source={require('../../../assets/producto.jpg')} style={styles.imagenProducto} />

                        {/* Información del producto */}
                        <View style={styles.detallesProducto}>
                            <Text style={styles.nombreProducto}>Moringa</Text>
                            <Text style={styles.infoProducto}>500mg</Text>
                            <Text style={styles.precioProducto}>$15.99</Text>
                        </View>

                        {/* Control de cantidad */}
                        <View style={styles.controlCantidad}>
                            <TouchableOpacity onPress={disminuirCantidad} style={styles.botonControl}>
                                <Text style={styles.textoBotonControl}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.cantidad}>{cantidad}</Text>
                            <TouchableOpacity onPress={incrementarCantidad} style={styles.botonControl}>
                                <Text style={styles.textoBotonControl}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={[styles.contenedorProducto, { marginTop: 30 }]}>
                        <Checkbox
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setIsChecked(!isChecked);
                            }}
                            color='#006157' // Cambia el color del checkbox
                            uncheckedColor="#000"
                        />
                        {/* Imagen del producto */}
                        <Image source={require('../../../assets/producto.jpg')} style={styles.imagenProducto} />

                        {/* Información del producto */}
                        <View style={styles.detallesProducto}>
                            <Text style={styles.nombreProducto}>Moringa</Text>
                            <Text style={styles.infoProducto}>500mg</Text>
                            <Text style={styles.precioProducto}>$15.99</Text>
                        </View>

                        {/* Control de cantidad */}
                        <View style={styles.controlCantidad}>
                            <TouchableOpacity onPress={disminuirCantidad} style={styles.botonControl}>
                                <Text style={styles.textoBotonControl}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.cantidad}>{cantidad}</Text>
                            <TouchableOpacity onPress={incrementarCantidad} style={styles.botonControl}>
                                <Text style={styles.textoBotonControl}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.contenedorDatosFarmacia}>
                    <View style={styles.farmaciaHeader}>
                        <Checkbox
                            theme={'black'}
                            status={farmaciaChecked ? 'checked' : 'unchecked'}
                            onPress={toggleFarmaciaCheck}
                            color='#006157' // Cambia el color del checkbox
                            uncheckedColor="#000"
                        />
                        <Text style={styles.nombreFarmacia}>Farmacia KNOP</Text>
                    </View>

                    <View style={styles.contenedorProducto}>

                        <Checkbox
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setIsChecked(!isChecked);
                            }}
                            color='#006157' // Cambia el color del checkbox
                            uncheckedColor="#000"
                            style={styles.checkboxCustom}
                        />

                        {/* Imagen del producto */}
                        <Image source={require('../../../assets/producto.jpg')} style={styles.imagenProducto} />

                        {/* Información del producto */}
                        <View style={styles.detallesProducto}>
                            <Text style={styles.nombreProducto}>Moringa</Text>
                            <Text style={styles.infoProducto}>500mg</Text>
                            <Text style={styles.precioProducto}>$15.99</Text>
                        </View>

                        {/* Control de cantidad */}
                        <View style={styles.controlCantidad}>
                            <TouchableOpacity onPress={disminuirCantidad} style={styles.botonControl}>
                                <Text style={styles.textoBotonControl}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.cantidad}>{cantidad}</Text>
                            <TouchableOpacity onPress={incrementarCantidad} style={styles.botonControl}>
                                <Text style={styles.textoBotonControl}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.containerProducto}>
                    <Text style={styles.titulo}>Te podria Interessar</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
                        <Producto imagen={require('../../../assets/moringa.jpg')} nombre="Fino Carbo" precio="C$ 120" />
                        <Producto imagen={require('../../../assets/moringa.jpg')} nombre="Producto 2" precio="C$ 150" />
                        <Producto imagen={require('../../../assets/moringa.jpg')} nombre="Producto 3" precio="C$ 180" />
                        {productos.map((producto, index) => (
                            <Producto
                                key={index}
                                // Si 'producto.imagen' es un path a un archivo local
                                nombre={producto.nombre}
                                precio={producto.precio}
                            />
                        ))}
                    </ScrollView>                  
                </View>
                <View style={styles.TabBar}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <Checkbox
                            status={isChecked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setIsChecked(!isChecked);
                            }}
                            color='#006157' // Cambia el color del checkbox
                            uncheckedColor="#000"
                            style={styles.checkboxCustom}
                        />
                        <Text>Todo</Text>
                    </View>
                    <View style={styles.totalBar}>
                        <Text style={styles.totalText}>Total: ${calcularTotal()}</Text>
                    </View>
                    <View>
                    <TouchableOpacity style={styles.boton}>
            <View style={styles.botonContainer}>
                
                <Text style={styles.texto}>Comprar</Text>
            </View>
        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
const Producto = ({ imagen, nombre, precio }) => {
    return (
        <View style={styles.productoContainer}>
            <View style={styles.imagenContainer}>
                <Image source={imagen} style={styles.imagenProducto} />
            </View>
            <View style={styles.detallesContainer}>
                <View>
                    <Text style={styles.nombreProducto}>{nombre}</Text>
                    <Text style={styles.precioProducto}>{precio}</Text>
                </View>
                <View style={styles.iconoContainer}>
                    <Octicons name="credit-card" size={24} color="black" />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f6f8f7',
        paddingBottom: 20,
    },
    titulo: {
        alignSelf: 'flex-start',
        marginTop: 12,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 12,
    },
    efectoSuperior: {
        backgroundColor: Color.COLOR_VERDE,
        height: 110,
        borderRadius: 30,
        marginTop: -35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicador: {
        color: Color.COLOR_PRIMARIO,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
    },
    contenedor: {
        width: '90%',
        marginTop: 10,
        alignSelf: 'center',
    },
    contenedorDatosFarmacia: {
        marginTop: 20,
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        padding: 10,
    },
    farmaciaHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nombreFarmacia: {
        margin: 8,
        fontSize: 20,
        fontWeight: 'bold',
    },
    contenedorProducto: {
        flexDirection: 'row',  // Alineación horizontal
        alignItems: 'center',
    },
    imagenProducto: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 10,
    },
    detallesProducto: {
        flex: 1,  // Ocupa el espacio disponible entre la imagen y los botones
    },
    checkboxCustom: {
        borderRadius: 50, // Esto hace que el checkbox sea redondo
        width: 24, // Ajusta el ancho
        height: 24, // Ajusta la altura
        borderWidth: 2, // Ancho del borde
        borderColor: Color.COLOR_VERDE, // Color del borde
    },
    nombreProducto: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    infoProducto: {
        fontSize: 14,
        color: 'gray',
    },
    precioProducto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.COLOR_VERDE,
    },
    controlCantidad: {
        flexDirection: 'row',  // Botones alineados horizontalmente
        alignItems: 'center',
    },
    botonControl: {
        backgroundColor: Color.COLOR_VERDE,
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    textoBotonControl: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    cantidad: {
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    productoContainer: {
        marginRight: 20, // Espacio entre productos
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        padding: 10,
        width: 150, // Ajusta el ancho del contenedor del producto
    },
    imagenContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    imagenProducto: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    detallesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    nombreProducto: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    precioProducto: {
        fontSize: 14,
        color: 'gray',
    },
    iconoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerProducto: {
        marginTop: 20,
    },
    scrollContainer: {
        paddingHorizontal: 5,
    },
    totalBar: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    TabBar:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    boton: {
        backgroundColor: '#006157', // Cambia el color según lo que prefieras
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    botonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icono: {
        marginRight: 10,
    },
    texto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ListaComprasComponents;
