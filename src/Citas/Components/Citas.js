import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Color from '../../Color/PaletaColor'

const CitaCard = ({ cita }) => {
    const navigation = useNavigation();

    // Funciones para los botones
    const handleActualizar = () => {
        // Redirigir a la pantalla de actualización
        navigation.navigate('ActualizarCita', { citaId: cita.id });
    };

    const handleEliminar = () => {
        // Lógica para eliminar la cita
        console.log(`Eliminar cita: ${cita.id}`);
    };

    return (
        <View>
            <View style={styles.card}>
                <View style={styles.cardLeft}>
                    <Image
                        source={require('../../../assets/../assets/doctor.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.cardRight}>
                    <Text style={styles.name}>{cita.nombre}</Text>
                    <Text style={styles.status}>Estado: {cita.estado}</Text>
                    <Text style={styles.date}>Fecha: {cita.fecha}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.updateButton]}
                            onPress={handleActualizar}
                        >
                            <Text style={styles.buttonText}>Actualizar</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            style={[styles.button, styles.deleteButton]}
                            onPress={handleEliminar}
                        >
                            <Text style={styles.buttonText}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const CitasView = () => {
    // Ejemplo de datos de citas
    const citas = [
        {
            id: '1',
            imagen: 'https://example.com/image1.jpg',
            nombre: 'Cita Médico General',
            estado: 'Pendiente',
            fecha: '2024-10-20'
        },
        {
            id: '2',
            imagen: 'https://example.com/image2.jpg',
            nombre: 'Cita Médico Naturista',
            estado: 'Completada',
            fecha: '2024-10-22'
        },
    ];

    return (
        <View>
            <View style={styles.efectoSuperior}>
                <Text style={styles.indicador}>Citas</Text>
            </View>
            <ScrollView>
                {citas.map(cita => (
                    <CitaCard key={cita.id} cita={cita} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    cardLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    cardRight: {
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 15,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Color.COLOR_NEGRO,
        marginBottom: 5,
    },
    status: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 5,
    },
    date: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    updateButton: {
        backgroundColor: Color.COLOR_PRINCIPAL,
    },
    deleteButton: {
        backgroundColor: '#ff6347',
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
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
});

export default CitasView;
