import React, { Component } from 'react';
import {
    ImageBackground,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from '../../../firebaseConfig'; // Asegúrate de importar tu configuración de Firebase
import { setDoc, doc } from 'firebase/firestore'; 
import color from '../../../color';

export class RegistroComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            email: '',
            password: '',
        };
    }

    handleRegister = async () => {
        const { nombre, email, password } = this.state;
        const cleanedEmail = email.trim(); // Elimina los espacios en blanco
        
        if (cleanedEmail === '' || password === '') {
            Alert.alert('Error', 'Por favor, introduce un correo electrónico y una contraseña válidos.');
            return;
        }

        // Validar el formato del correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(cleanedEmail)) {
            Alert.alert('Error', 'El formato del correo electrónico no es válido.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, cleanedEmail, password);
            const user = userCredential.user;
            console.log('Usuario registrado:', user);

            // Actualizar el perfil del usuario con el nombre
            await updateProfile(user, { displayName: nombre });

            // Crear un documento en Firestore con el uid del usuario
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                displayName: nombre,
                createdAt: new Date(),
            });

            Alert.alert('Registro exitoso', 'El usuario se ha registrado exitosamente.');

            // Redirigir a la vista de inicio de sesión
            this.props.navigation.navigate('Login');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error en el registro:', errorCode, errorMessage);
            Alert.alert('Error en el registro', errorMessage);
        }

        // Limpiar campos de entrada
        this.setState({
            nombre: '',
            email: '',
            password: '',
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require("../../../assets/ImagenRegister.jpg")}
                    style={styles.restante}
                    resizeMode="cover"
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
                            <Text>Nombre de Usuario</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nombre"
                                placeholderTextColor="#aaa"
                                value={this.state.nombre}
                                onChangeText={(nombre) => this.setState({ nombre })}
                            />
                        </View>

                        <View style={{ width: "95%", display: "flex" }}>
                            <Text  >Correo Electrónico</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#aaa"
                                value={this.state.email}
                                onChangeText={(email) => this.setState({ email })}
                            />
                        </View>

                        <View style={{ width: "95%", display: "flex" }}>
                            <Text >Contraseña</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })}
                            />
                        </View>

                        <View style={{ width: "95%", display: "flex" }}>
                            <Text >Repite la contraseña</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                            />
                        </View>
                    </ScrollView>

                    <TouchableOpacity style={styles.button} onPress={this.handleRegister}>
                        <Text style={styles.buttonText}>Crear Cuenta</Text>
                    </TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    Bg: {
        flex: 2,
        width: '100%',
        backgroundColor: color.COLOR_PRIMARIO,
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
        color: '#fff',
        marginBottom: 20,
        fontWeight: "bold"
    },
    scrollContainer: {
        width: '95%',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#ccc',
        borderRadius: 12,
        paddingHorizontal: 15,
        marginVertical: 10,
        color: '#000',
    },
    button: {
        backgroundColor: '#34A853',
        borderRadius: 12,
        width: '60%',
        padding: 10,
        marginBottom: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default RegistroComponent;
