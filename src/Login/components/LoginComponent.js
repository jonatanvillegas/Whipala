import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView,
    StatusBar
} from 'react-native';
import { COLOR_WHITE, COLOR_INPUT } from '../../Color/PaletaColor';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/ImageLogin.jpg")}
                style={styles.restante}
                resizeMode="cover"
            >
            </ImageBackground>

            <View style={styles.Bg}>
                <Text style={styles.loginText}>Ingresa</Text>
                <ScrollView
                    style={styles.scrollContainer}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={{display:'flex',justifyContent:'center',
                        alignItems:'center'
                    }}>

                        <View style={styles.inputWrapper}>
                            <Text style={{ color: COLOR_WHITE }}>Correo Electrónico</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#aaa"
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={{ color: COLOR_WHITE }}>Contraseña</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                            />
                        </View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.googleButton, { gap: 12 }]}
                            onPress={() => console.log("Google Login")}
                        >
                            <FontAwesome name="google" size={24} color="white" />
                            <Text style={styles.buttonText}>Ingresa con Google</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}>
                    ¿No tienes cuenta aún? Crea una
                </Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

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
        marginTop: -25,
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
        fontWeight: "bold",
    },
    scrollContainer: {
        width: '95%',
        alignContent: ''

    },
    inputWrapper: {
        width: "100%",
        marginVertical: 12,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#E0E0E0',
        borderRadius: 12,
        paddingHorizontal: 15,
        color: "#000",
        marginTop:5
    },
    button: {
        backgroundColor: COLOR_SECUNDARIO,
        borderRadius: 12,
        width: '60%',
        padding: 15,
        marginTop: 40,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    googleButton: {
        flexDirection: "row",
        backgroundColor: COLOR_BLUE,
        borderRadius: 12,
        width: '60%',
        paddingVertical: 15,
        marginVertical: 10,
        marginTop: 30,
        justifyContent: "center",
    },
    linkText: {
        color: COLOR_WHITE,
        fontSize: 14,
        marginBottom:30,
        textAlign: "center",
    },
});

export default Login;
