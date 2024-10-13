import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from "react-native";

import Color from '../../Color/PaletaColor'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const PerfilMedico = () => {
    return (
        <ScrollView>

 
        <View style={styles.Container}>

            <View style={[styles.item, { zIndex: 0 }]} >
                <View
                    style={[styles.item, {
                        height: 110,
                        borderRadius: 30,
                        marginTop: -30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        backgroundColor: Color.COLOR_VERDE,
                        zIndex: 2
                    }]}
                >

                    <Text style={styles.Indicador}>
                        Medico
                    </Text>

                </View>

                <View style={[styles.item, { zIndex: 1 }]} >
                    <View
                        style={[styles.item, {
                            height: 290,
                            borderRadius: 60,
                            marginTop: -35,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            backgroundColor: 'blue',
                        }]}
                    >
                        <Image
                            style={styles.PruebaImagen}
                            source={require('../../../assets/doctor.png')}
                        />
                    </View>

                </View>
            </View>

            <View style={styles.ContenedorInformacion}>
                <View style={styles.Content}>
                    <Text style={styles.FuenteDoctor}>
                        Dr. Joel Martinez Alvarado
                    </Text>
                    <Text style={styles.FuenteTipoDoctor}>
                        Cardiologo
                    </Text>

                    <View style={styles.EstiloBotonDos}>
                        <View style={styles.Icono2}>
                            <Entypo name="location-pin" size={22} color={Color.COLOR_BLUE} style={styles.posicionF} />
                        </View>

                        <View style={styles.orientacion}>
                            <Text style={styles.InfoBotonDos}>Juigalpa - Chontales</Text>
                        </View>
                    </View>

                    <View style={styles.EstiloBoton}>
                        <View style={styles.Icono2}>
                            <FontAwesome5 name="clinic-medical" size={15} color={Color.COLOR_BLUE} />
                        </View>

                        <View style={styles.orientacion}>
                            <Text style={styles.InfoBotonDos}>Clinica Jesus Maria</Text>
                        </View>
                    </View>

                    <Text style={styles.FuenteSub}>
                        Acerca de:
                    </Text>

                    <Text style={styles.FuenteParrafo}>
                        Especialista Cirujano en el marco de la medicina Natual con dos maestrías en doctorados, atiende en su clínica equipada con todos los instumentos necesarios para brindarles la mejor atención.
                    </Text>

                    <View style = {styles.FondoList}>
                        
                    </View>

                    <View style = {styles.FondoList}>

                    </View>

                    <View style = {styles.FondoList}>

                    </View>

                    <View style = {styles.FondoList}>

                    </View>

                    <View style = {styles.BottonFondo}>
                        <TouchableOpacity>
                            <View style = {styles.BotonEstilo}>
                                <View>
                                    <FontAwesome5 name="calendar-check" size={22} color="white" />
                                </View>

                                <View style = {styles.Separador}/>

                                <View>
                                    <Text style ={styles.InfoBoton}>
                                        Agendar Cita
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.Div}/>
                </View>
            </View>

        </View>

        </ScrollView>

    );
}

export default PerfilMedico;

const styles = StyleSheet.create({

    Container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'red'
    },
    PruebaImagen: {
        height: '100%',
        width: '100%',
        marginTop: 10
    },
    Indicador: {
        color: Color.COLOR_PRIMARIO,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    ContenedorInformacion: {
        backgroundColor: Color.COLOR_FONDO,
        height: '100%',
        width: '100%',
        borderRadius: 40,
        marginTop: -30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    FuenteDoctor: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25
    },
    FuenteSub: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15
    },
    FuenteTipoDoctor: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 2
    },
    Content: {
        // backgroundColor: 'red',
        width: '85%',
        height: '100%'
    },
    EstiloBoton: {
        width: '100%',
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: -8
    },
    EstiloBotonDos: {
        width: '100%',
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Icono2: {
        width: '5%',
        height: 25,
        justifyContent: 'center',
    },

    orientacion: {
        width: '95%',
    },

    InfoBotonDos: {
        fontWeight: 'normal',
        fontSize: 15,
        color: 'black',
        marginLeft: 5
    },
    posicionF: {
        marginLeft: -3
    },
    FuenteParrafo: {
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'justify',
        marginTop: 5
    },
    FondoList: {
        backgroundColor: 'white',
        width: '100%',
        height: 60,
        borderRadius: 15,
        marginTop: 10
    },
    BottonFondo:{
        width: '100%',
        height: 60,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Div:{
        height: 15
    },
    BotonEstilo: {
        height: 50,
        width: 180,
        backgroundColor : Color.COLOR_SECUNDARIO,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Separador:{
        width: 10
    },
    InfoBoton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})