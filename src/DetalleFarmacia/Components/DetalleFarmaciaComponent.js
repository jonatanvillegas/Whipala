import React from 'react'
import { Dimensions, StyleSheet, View, Image, Text, StatusBar, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps';
import { contactInfo } from '../../Data/DetalleFarmacia';
import AntDesign from '@expo/vector-icons/AntDesign';
import color from '../../Color/PaletaColor'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const DetalleFarmaciaComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.restante}>
                <Image
                    source={require("../../../assets/uno.png")}
                    style={styles.imagen}
                />
            </View>
            <View style={styles.Bg}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>
                        Farmacia Natural
                    </Text>
                    <Text>Juigalpa</Text>
                    <Text style={{ backgroundColor: COLOR_SECUNDARIO, marginTop: 9, padding: 5, color: 'white', borderRadius: 8, fontSize: 9, width: 140, textAlign: 'center', marginBottom: 4 }}>
                        Horario 08:00 AM - 09:00 PM
                    </Text>
                    <Text style={{ backgroundColor: COLOR_BLUE, padding: 5, color: 'white', borderRadius: 8, fontSize: 9, width: 50, textAlign: 'center' }}>
                        Abierto
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
                    <Item title={"Correo Electrónico"} info={contactInfo.correoElectronico} icon={<MaterialCommunityIcons name="email" size={24} color='#00B17D' />}/>
                    <Item title={"Teléfono"} info={contactInfo.telefonoFijo} icon={<FontAwesome5 name="phone" size={24} color="#00B17D" />}/>
                    <Item title={"WhatsApp"} info={contactInfo.numeroWhatsApp} icon={<FontAwesome5 name="whatsapp" size={24} color="#00B17D" />}/>
                </View>

                <View style={{ marginVertical: 12 }}>
                    <TouchableOpacity style={{
                        backgroundColor: COLOR_SECUNDARIO, padding: 7, borderRadius: 6
                    }}>
                        <View style={{flexDirection:'row', gap:10,alignItems:'center'}}>
                            <FontAwesome5 name="store" size={15} color="white" />
                            <Text style={{ color: 'white' }}>
                                Catalogo de Productos
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const Item = ({ title, info,icon }) => (
    <View style={styles.item}>
        <View>
           {icon}
        </View>
        <View style={{ width: "60%" }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={{ fontSize: 10 }}>{info}</Text>
        </View>
        <View style={{ backgroundColor: COLOR_BLUE, padding: 3, borderRadius: 50 }}>

            <AntDesign name="right" size={24} color="white" />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: COLOR_WHITE,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    Bg: {
        flex: 3,
        width: '105%',
        backgroundColor: '#F0F0F0',
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
        backgroundColor: COLOR_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        width: "90%",

    },
    headerTitle: {
        color: COLOR_WHITE,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 10,
    },
    headerDescription: {
        color: COLOR_WHITE,
        lineHeight: 15,
        marginTop: 9
    },
    containerMap: {

    },
    mapWrapper: {
        width: Dimensions.get("window").width - 60, // Ancho del mapa
        height: 120, // Altura del mapa
        borderRadius: 15,
        overflow: 'hidden', // Para redondear las esquinas
        marginVertical: 10, // Reducido a 10 para minimizar el espacio
        borderColor: COLOR_BLUE,
        borderStyle: 'solid',
        borderWidth: 2
    },
    map: {
        width: '100%',
        height: '100%',
    },
    item: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: COLOR_PRIMARIO,
        padding: 8,
        marginVertical: 6,
        borderRadius: 12,
        gap: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
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
        backgroundColor: COLOR_PRIMARIO,
        display: "flex",
        alignSelf: "center",
        borderRadius: 8
    }
});
export default DetalleFarmaciaComponent
