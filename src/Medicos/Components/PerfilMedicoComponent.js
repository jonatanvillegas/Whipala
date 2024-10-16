import React from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    TouchableOpacity,
    Linking
} from "react-native";

import Color from '../../Color/PaletaColor'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from "@expo/vector-icons";

const PerfilMedico = () => {

    const handleWhat = async ()=> {

        const L = 'https://wa.me/' + '57974858' + '?text=Hola!!!';
        
        Linking.openURL(L);
    }

    const handleTele = async ()=> {

        const L = 'tel:' + '57975848';
        
        Linking.openURL(L);
    }

    const handleCorre = async ()=> {

        const L = 'mailto:' + 'edwardblast81@gmail.com' + '?subject=Asunto Predefinido&body= Hola!!!' ;
        
        Linking.openURL(L);
    }

    const IconsRectangulos = (props) => {
        return (
            <View style={styles.configuracionContainer}>
                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                    {props.icon}

                    <View>
                        <Text style={styles.title}>{props.Titulo}</Text>
                        <Text style={styles.description}>{props.preferencia}</Text>
                    </View>

                </View>
                <View style={{ backgroundColor: COLOR_BLUE, padding: 3, borderRadius: 50 }}>
                    <AntDesign name="right" size={24} color="white" />
                </View>
            </View>
        );
    };
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

                        <TouchableOpacity
                            onPress={handleCorre}                        
                        >
                            <IconsRectangulos 
                                Titulo='Correo Electronico' 
                                preferencia='Naturalan@gmail.com' 
                                icon={<Ionicons name="document-text" size={24} 
                                color={Color.COLOR_SECUNDARIO} />}
                            />
                        </TouchableOpacity>
                        
                        <View style={styles.DivisorList} />

                        <TouchableOpacity
                            onPress={handleTele}                        
                        >
                            <IconsRectangulos 
                                Titulo='Telefono' 
                                preferencia='25128512' 
                                icon={<Ionicons name="document-text" size={24} 
                                color={Color.COLOR_SECUNDARIO} />}
                            />
                        </TouchableOpacity>

                        <View style={styles.DivisorList} />

                        <TouchableOpacity
                            onPress={handleWhat}                        
                        >
                            <IconsRectangulos 
                                Titulo='Whatsapp' 
                                preferencia='25128512' 
                                icon={<Ionicons name="document-text" size={24} 
                                color={Color.COLOR_SECUNDARIO} />}
                            />
                        </TouchableOpacity>

                        <View style={styles.BottonFondo}>
                            <TouchableOpacity>
                                <View style={styles.BotonEstilo}>
                                    <View>
                                        <FontAwesome5 name="calendar-check" size={22} color="white" />
                                    </View>

                                    <View style={styles.Separador} />

                                    <View>
                                        <Text style={styles.InfoBoton}>
                                            Agendar Cita
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.Div} />
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
    BottonFondo: {
        width: '100%',
        height: 60,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Div: {
        height: 15
    },
    BotonEstilo: {
        height: 50,
        width: 180,
        backgroundColor: Color.COLOR_SECUNDARIO,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Separador: {
        width: 10
    },
    InfoBoton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    configuracionContainer: {
        width: '100%',
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Color.COLOR_PRIMARIO,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        fontWeight: 'normal'
    },
    DivisorList: {
        height: 10
    }
})