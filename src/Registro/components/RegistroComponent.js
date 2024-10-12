import React, { Component } from 'react'
import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export class RegistroComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../../assets/ImagenRegister.jpg")}
                    style={styles.restante} // Cambiamos Image por ImageBackground
                    resizeMode="cover" // Para que la imagen se ajuste correctamente
                >
                </ImageBackground>
                <View style={styles.Bg}>
                    <Text style={styles.loginText}>Registro</Text>

                    <ScrollView
                    style={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    >

                        <View style={{ width: "95%", display: "flex" }}>
                            <Text style={{ color: COLOR_WHITE }}>Nombre de Usuario</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nombre"
                                placeholderTextColor="#aaa"

                            />
                        </View>

                        <View style={{ width: "95%", display: "flex" }}>
                            <Text style={{ color: COLOR_WHITE }}>Correo Electronico</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#aaa"

                            />
                        </View>
                        <View style={{ width: "95%", display: "flex" }}>
                            <Text style={{ color: COLOR_WHITE }}>Contrasena</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry

                            />
                        </View>
                        <View style={{ width: "95%", display: "flex" }}>
                            <Text style={{ color: COLOR_WHITE }}>Repite la contrasena</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                            />
                        </View>
                    </ScrollView>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Crear Cuenta</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: COLOR_WHITE,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    Bg: {
        flex: 2,
        width: '100%',
        backgroundColor: COLOR_PRIMARIO,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 7,
        marginTop: -10,
    },
    restante: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
    },
    loginText: {
        fontSize: 24,
        color: COLOR_WHITE,
        marginBottom: 20,
        fontWeight: "bold"
    },
    scrollContainer: {
        width: '95%',
        alignContent: ''

    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: COLOR_INPUT,
        borderRadius: 12,
        paddingHorizontal: 15,
        marginVertical: 10,
        color: '#000',
    },
    button: {
        backgroundColor: COLOR_SECUNDARIO,
        borderRadius: 12,
        width: '60%',
        padding: 10,
        marginBottom: 30,
    },
    buttonText: {
        color: COLOR_PRIMARIO,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 10,
        fontFamily: 'Roboto'
    },
    googleButton: {
        flexDirection: "row",
        backgroundColor: '#DB4437',
        borderRadius: 20,
        width: '100%',
        paddingVertical: 12,
        marginVertical: 10,
        marginTop: 30,
        justifyContent: "center",
    },
    linkText: {
        color: '#fff',
        fontSize: 14,
        marginVertical: 5,
        textAlign: "justify"
    },
    imagen: {},
});


export default RegistroComponent
