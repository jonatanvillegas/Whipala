import { View, Text, StyleSheet, Image, StatusBar, FlatList, Dimensions } from 'react-native';
import React from 'react';
import color from '../../../color';
import AntDesign from '@expo/vector-icons/AntDesign';
import { contactInfo } from '../../../Data/DetalleFarmacia';
import MapView from 'react-native-maps';

const Item = ({ title, info }) => (
    <View style={styles.item}>
        <View>
            <Image style={styles.imagenSintoma} source={{
                uri: "https://placehold.co/600x400/png",
            }} />
        </View>
        <View style={{ width: "60%" }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={{ fontSize: 10 }}>{info}</Text>
        </View>
        <View>
            <AntDesign name="right" size={24} color="black" />
        </View>
    </View>
);

export default function DetalleFarmacia() {
    return (
        <View style={styles.container}>
            <View style={styles.restante}>
                <Image
                    source={require("../../../assets/favicon.png")}
                    style={styles.imagen}
                />
            </View>
            <View style={styles.Bg}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>
                        Farmacia Natural
                    </Text>
                    <Text style={styles.headerDescription}>
                        Prevenir el cáncer es vital para nuestra salud. Mediante hábitos saludables, podemos reducir el riesgo de padecerlo.
                    </Text>
                </View>
                <View style={styles.containerMap}>
                    <View style={styles.mapWrapper}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            provider='google'
                        />
                    </View>
                </View>
                <View>
                    <Item title={"Correo Electrónico"} info={contactInfo.correoElectronico} />
                    <Item title={"Teléfono"} info={contactInfo.telefonoFijo} />
                    <Item title={"WhatsApp"} info={contactInfo.numeroWhatsApp} />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: color.COLOR_WHITE,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    Bg: {
        flex: 3,
        width: '105%',
        backgroundColor: color.COLOR_PRIMARIO,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 7
    },
    restante: {
        flex: 1,
        width: '100%',
        backgroundColor: color.COLOR_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        width: "90%",
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    headerTitle: {
        color: color.COLOR_WHITE,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 10,
    },
    headerDescription: {
        color: color.COLOR_WHITE,
        textAlign: 'center',
        lineHeight: 15,
    },
    containerMap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20, // Espacio alrededor del mapa
    },
    mapWrapper: {
        width: Dimensions.get("window").width - 60, // Ancho del mapa
        height: 180, // Altura del mapa
        borderRadius: 15,
        overflow: 'hidden', // Para redondear las esquinas
        marginVertical: 40, // Margen vertical
    },
    map: {
        width: '100%',
        height: '100%',
    },
    item: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: color.COLOR_WHITE,
        padding: 8,
        marginVertical: 6,
        borderRadius: 12,
        gap: 30,
    },
    imagenSintoma: {
        width: 40,
        height: 40,
        borderRadius: 5
    },
    title: {
        fontSize: 11,
        fontWeight: "bold"
    },
    list: {
        flex: 1,
        width: "105%"
    },
    botonComponent: {
        padding: 6,
        backgroundColor: color.COLOR_PRIMARIO,
        display: "flex",
        alignSelf: "center",
        borderRadius: 8
    }
});
