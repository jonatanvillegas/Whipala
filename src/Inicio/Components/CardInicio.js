import React from 'react'
import { ScrollView, View,Image,StyleSheet, Text, TouchableOpacity } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Intereses } from '../../Data/HomeData'

const CardInicio = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      
            {Intereses.map((interes, index) => (
                <View key={index} style={styles.courseCard}>
                    <View style={styles.imageContainer}>
                       
                        <View style={styles.overlay} />
                        {/* Ícono del corazón en la esquina superior derecha */}
                        <FontAwesome name="heart" size={24} color="white" style={styles.heartIcon} />

                        <View style={styles.info}>
                            <View style={styles.infoCentrar}>
                            <Text style={{color:COLOR_PRIMARIO,fontWeight:'bold'}}>Prevencion del Cancer</Text>
                            <View style={styles.infoBoton}>
                                <TouchableOpacity>
                                    <Text style={{color: COLOR_PRIMARIO,textAlign:'center'}}>Ver Articulo</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
  )
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
        backgroundColor: COLOR_PRIMARIO,
        borderRadius: 20,
        padding: 2,
        zIndex:6
    },
    icon: {
        width: 15,
        height: 15,
        backgroundColor: COLOR_VERDE,
        borderRadius: 15, // Para hacer que el ícono sea más pequeño
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5, // Reducido para que sea más compacto
    },
    iconText: {
        color: COLOR_PRIMARIO,
        fontWeight: 'bold',
        fontSize:8
    },
    userText: {
        color: COLOR_WHITE,
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
        backgroundColor:COLOR_SECUNDARIO,
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
        borderRadius: 10,
    },
})

export default CardInicio
