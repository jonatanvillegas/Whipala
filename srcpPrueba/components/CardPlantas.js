import { View, Text, ScrollView, Image, StyleSheet,TouchableOpacity } from 'react-native'
import {segundo} from '../../Data/HomeData'
import color from '../../color';

export default function CardPlanta() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
            {segundo.map((planta, index) => (
                <View key={index} style={styles.courseCard}>
                    <Image source={planta.imageUrl} style={styles.image} />
                    <View style={styles.info}>
                            <View style={styles.infoCentrar}>
                            <Text style={{color:color.COLOR_PRIMARIO,fontWeight:'bold',marginBottom:2}}>{planta.nombre}</Text>
                            <View style={styles.infoBoton}>
                                <TouchableOpacity>
                                    <Text style={{color: color.COLOR_PRIMARIO,textAlign:'center',fontSize:8}}>Ver Articulo</Text>
                                </TouchableOpacity>
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
        width: 180,
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
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    content: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        marginBottom: 5,
    },
    level: {
        fontSize: 12,
        color: '#666',
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
        width:80
    },
    infoCentrar:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
});