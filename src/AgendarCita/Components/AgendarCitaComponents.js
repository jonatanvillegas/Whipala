import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, ScrollView, Button } from 'react-native';
import Color from '../../Color/PaletaColor';
import MapView from 'react-native-maps';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialIcons } from '@expo/vector-icons';

const AgendarCitaComponents = () => {
    const [fechas, setFechas] = useState([]);
    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
    const [horas, setHoras] = useState([]);

    useEffect(() => {
        setFechas(generarFechas());
        setHoras(generarHoras());
    }, []);

    const manejarSeleccionFecha = (fecha) => {
        setFechaSeleccionada(fecha);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.efectoSuperior}>
                <Text style={styles.indicador}>Farmacia</Text>
            </View>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Datos del medico</Text>
                <View style={styles.contenedorDatosMedico}>
                    <Text style={styles.nombreMedico}>Nombre Dr. Edwar Blandon</Text>
                    <View style={styles.contenedorDatos}>
                        <View style={styles.datosFila}>
                            <Text>Icono</Text>
                            <Text>Especialidad: Ortopedia</Text>
                        </View>
                        <View style={styles.datosFila}>
                            <Text>Icono</Text>
                            <Text>Ubicacion: Juigalpa Chontale</Text>
                        </View>
                        <View style={styles.datosFila}>
                            <Text>Icono</Text>
                            <Text>Consultorio: Clinica Jesus Maria</Text>
                        </View>
                    </View>
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
                        <TouchableOpacity style={styles.botonMap}>
                            <Text style={styles.botonMapText}>Abrir en Maps</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.titulo}>Seleccione el Dia</Text>
                <View style={styles.seleccionDia}>
                    <TouchableOpacity>
                        <Text><AntDesign name="left" size={14} color="black" /></Text>
                    </TouchableOpacity>
                    <Text>septiembre</Text>
                    <TouchableOpacity>
                        <Text><AntDesign name="right" size={14} color="black" /></Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    data={fechas}
                    keyExtractor={(item) => item.fecha}
                    renderItem={({ item }) => (
                        <ContenedorFecha
                            dia={item.dia}
                            fecha={item.fecha}
                            seleccionado={fechaSeleccionada === item.fecha}
                            onPress={() => manejarSeleccionFecha(item.fecha)}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.fechaScroll}
                />
                <Text style={styles.titulo}>Seleccione la hora</Text>
                <FlatList
                    data={horas}
                    numColumns={3}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <ContenedorHora hora={item} />
                    )}
                    contentContainerStyle={styles.horaScroll}
                />
                <View style={styles.botonContainer}>
                    <TouchableOpacity style={styles.botonAgendar}>
                        <View style={{flexDirection:'row',gap:8}}>
                        <MaterialIcons name="edit-calendar" size={24} color="white" />
                        <Text style={styles.botonText}>
                        
                            Agendar Cita
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Agregando un margen en la parte inferior para el scroll */}
            <View style={{ height: 20 }} />
        </ScrollView>
    );
};

const ContenedorFecha = ({ dia, fecha, seleccionado, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.fechaCard, { backgroundColor: seleccionado ? '#006157' : 'white' }]}
            onPress={onPress}
        >
            <View style={styles.fechaContent}>
                <Text style={[styles.fechaTexto, { color: seleccionado ? 'white' : '#006157' }]}>{dia}</Text>
                <Text style={[styles.fechaTexto, { color: seleccionado ? 'white' : '#006157', fontSize: 24 }]}>{fecha}</Text>
            </View>
        </TouchableOpacity>
    );
};

const ContenedorHora = ({ hora }) => {
    return (
        <TouchableOpacity style={styles.botonHora}>
            <Text style={styles.horaTexto}>{hora}</Text>
        </TouchableOpacity>
    );
};

const generarFechas = () => {
    const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const fechasArray = [];
    const hoy = new Date();

    for (let i = 0; i < 7; i++) {
        const nuevaFecha = new Date(hoy);
        nuevaFecha.setDate(hoy.getDate() + i);
        const diaSemana = diasSemana[nuevaFecha.getDay()];
        const diaMes = nuevaFecha.getDate();

        fechasArray.push({
            dia: diaSemana,
            fecha: diaMes,
        });
    }
    return fechasArray;
};

const generarHoras = () => {
    return ['08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f6f8f7',
        paddingBottom: 20, // Agregado para un poco de margen
    },
    indicador: {
        color: Color.COLOR_PRIMARIO,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
    },
    efectoSuperior: {
        backgroundColor: Color.COLOR_VERDE,
        height: 110,
        borderRadius: 30,
        marginTop: -35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contenedor: {
        width: '90%',
        marginTop: 20,
        alignSelf: 'center',
    },
    contenedorDatosMedico: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    contenedorDatos: {
        marginLeft: 20,
    },
    mapWrapper: {
        width: Dimensions.get('window').width - 60,
        height: 120,
        borderRadius: 15,
        overflow: 'hidden',
        marginVertical: 10,
        borderColor: Color.COLOR_BLUE,
        borderStyle: 'solid',
        borderWidth: 2,
        alignSelf: 'center',
        position: 'relative',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    botonMap: {
        position: 'absolute',
        backgroundColor: '#0083BE',
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 6,
        top: '70%',
        left: '50%',
        transform: [{ translateX: -60 }, { translateY: -10 }],
    },
    botonMapText: {
        textAlign: 'center',
        color: 'white',
    },
    titulo: {
        alignSelf: 'flex-start',
        marginTop: 12,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom:12
    },
    seleccionDia: {
        flexDirection: 'row',
        gap: 10,
    },
    fechaScroll: {
        marginTop: 10,
    },
    fechaCard: {
        backgroundColor: '#006157',
        padding: 12,
        borderRadius: 12,
        marginRight: 10,
        width: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fechaContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fechaTexto: {
        fontSize: 15,
    },
    botonHora: {
        backgroundColor: 'white',
        margin: 5,
        padding: 8,
        width: 100,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    horaScroll: {
        marginTop: 10,
        alignItems: 'center',
    },
    botonContainer: {
        display:'flex',
        justifyContent:'center',
        alignSelf:'center',
        width:150,
        marginTop: 20,
        alignItems: 'center',
    },
    botonAgendar: {
        backgroundColor: Color.COLOR_VERDE,
        padding: 12,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    botonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    nombreMedico: {
        margin:8,
        fontSize: 20,
        fontWeight: 'bold',
    },
    datosFila: {
        flexDirection: 'row',
        marginVertical: 5,
    },
});

export default AgendarCitaComponents;
