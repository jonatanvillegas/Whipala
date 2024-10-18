import React, { useState } from 'react';
import { Alert, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native'; // Para la navegación
import { auth, db } from '../../../firebaseConfig'; // Asegúrate de que la configuración de Firebase esté correcta
import { useAuth } from '../../../context/AuthProvider';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useAuth(); // Obtén la función setUser de tu contexto de autenticación
    const navigation = useNavigation(); // Para navegar entre pantallas

    const handleLogin = async () => {
        const cleanedEmail = email.trim(); // Eliminamos los espacios en blanco al inicio y al final del email
        if (cleanedEmail === '' || password === '') {
            Alert.alert('Error', 'Por favor, introduce un correo electrónico y una contraseña válidos.');
            return;
        }

        try {
            // Iniciar sesión con email y contraseña
            const userCredential = await signInWithEmailAndPassword(auth, cleanedEmail, password);
            const user = userCredential.user;

            // Obtener el documento del usuario desde Firestore
            const userDocRef = doc(db, 'users', user.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const userData = userDoc.data();
                setUser({ uid: user.uid, ...userData }); // Actualiza los datos del usuario en el estado global
                console.log('Usuario logueado y datos obtenidos:', userData);

                Alert.alert('Inicio de sesión exitoso', 'El usuario ha iniciado sesión exitosamente.');

                // Redirige al usuario a la pantalla principal (ajusta el nombre de la ruta según tu aplicación)
                navigation.navigate('Home');
            } else {
                console.error('No se encontraron datos del usuario en Firestore');
                Alert.alert('Error', 'No se encontraron datos del usuario en Firestore.');
            }
        } catch (error) {
            console.error('Error en el inicio de sesión:', error.message);
            Alert.alert('Error en el inicio de sesión', error.message);
        }
    };

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
                    <View style={{
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <View style={styles.inputWrapper}>
                            <Text style={{ color: COLOR_WHITE }}>Correo Electrónico</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#aaa"
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <Text style={{ color: COLOR_WHITE }}>Contraseña</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}

                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
        marginTop: 5
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
        marginBottom: 30,
        textAlign: "center",
    },
});


export default LoginScreen;
