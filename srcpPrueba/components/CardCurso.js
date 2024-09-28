import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import {Intereses} from '../../Data/HomeData'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import color from '../../color';

export default function CardCurso() {
    const { width: screenWidth } = Dimensions.get('window');
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
            {Intereses.map((course, index) => (
                <View key={index} style={styles.courseCard}>
                    <View style={styles.imageContainer}>
                        {/* Componente de usuario en la esquina superior izquierda */}
                        <View style={styles.user}>
                            <View style={styles.icon}>
                                <Text style={styles.iconText}>E</Text>
                            </View>
                            <Text style={styles.userText}>Necesidades </Text>
                        </View>

                        {/* Imagen del curso */}
                        <Image source={course.imageUrl} style={styles.image} />
                        <View style={styles.overlay} />
                        {/* Ícono del corazón en la esquina superior derecha */}
                        <FontAwesome name="heart" size={24} color="white" style={styles.heartIcon} />

                        <View style={styles.info}>
                            <View style={styles.infoCentrar}>
                            <Text style={{color:color.COLOR_PRIMARIO,fontWeight:'bold'}}>Prevencion del Cancer</Text>
                            <View style={styles.infoBoton}>
                                <TouchableOpacity>
                                    <Text style={{color: color.COLOR_PRIMARIO,textAlign:'center'}}>Ver Articulo</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    courseCard: {
        width: 360,
        height:190,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginRight: 10,
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
        shadowOpacity: 0.25, // Opacidad de la sombra
        shadowRadius: 4, // Radio de desenfoque
        elevation: 5, // Elevación para Android
    },
    imageContainer: {
        position: 'relative',
        
    },
    image: {
        width: '100%',
        height: 190,
        resizeMode: 'cover',
        shadowColor: '#000', 
        elevation: 5,
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    user: {
        position: 'absolute',
        top: 10,
        left: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: color.COLOR_PRIMARIO,
        borderRadius: 20,
        padding: 2,
        zIndex:6
    },
    icon: {
        width: 15,
        height: 15,
        backgroundColor: color.COLOR_VERDE,
        borderRadius: 15, // Para hacer que el ícono sea más pequeño
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5, // Reducido para que sea más compacto
    },
    iconText: {
        color: color.COLOR_PRIMARIO,
        fontWeight: 'bold',
        fontSize:8
    },
    userText: {
        color: color.COLOR_WHITE,
        fontWeight: 'bold',
        fontSize: 8, // Reducido para hacerlo más pequeño
    },
    info:{
        position: 'absolute',
        bottom:10,
        right:10,
        left:5
    },
    infoBoton:{
        backgroundColor:color.COLOR_SECUNDARIO,
        borderRadius:8,
        padding:4,
        width:120
    },
    infoCentrar:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.30)', // Cambia la opacidad aquí
        borderRadius: 10,
    },

});