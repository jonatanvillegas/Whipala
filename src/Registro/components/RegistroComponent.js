import React, { Component, useState } from 'react';
import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'; // Asegúrate de importar Firebase Auth correctamente
import { doc, setDoc } from 'firebase/firestore'; // Asegúrate de importar Firestore correctamente
import { auth, db } from '../../../firebaseConfig'
import color from '../../Color/PaletaColor'
import { useNavigation } from '@react-navigation/native';

export const RegisterScreen = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation(); // Hook para la navegación

    const handleRegister = async () => {
        if (email.trim() === "" || password === "") {
            Alert.alert('Error', 'Por favor, introduce un correo electrónico y una contraseña válidos.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.trim())) {
            Alert.alert('Error', 'El formato del correo electrónico no es válido.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Las contraseñas no coinciden.');
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
            const user = userCredential.user;
            console.log('Usuario registrado:', user);

            await updateProfile(user, { displayName: nombre });

            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                displayName: nombre,
                createdAt: new Date(),
            });

            Alert.alert('Registro exitoso', 'El usuario se ha registrado exitosamente.');

            // Redirigir a la pantalla de inicio de sesión
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error en el registro:', error.message);
            Alert.alert('Error en el registro', error.message);
        }
    };


    return (
        <View style={styles.container}>
        <ImageBackground
            source={require("../../../assets/ImagenRegister.jpg")}
            style={styles.restante}
            resizeMode="cover"
        />
        <View style={styles.Bg}>
            <Text style={styles.loginText}>Registro</Text>
            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ width: "95%", display: "flex" }}>
                    <Text style={{ color: 'white' }}>Nombre de Usuario</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        placeholderTextColor="#aaa"
                        value={nombre}
                        onChangeText={setNombre} // Corregido
                    />
                </View>
                <View style={{ width: "95%", display: "flex" }}>
                    <Text style={{ color: 'white' }}>Correo Electrónico</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#aaa"
                        value={email}
                        onChangeText={setEmail} // Corregido
                    />
                </View>
                <View style={{ width: "95%", display: "flex" }}>
                    <Text style={{ color: 'white' }}>Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword} // Corregido
                    />
                </View>
                <View style={{ width: "95%", display: "flex" }}>
                    <Text style={{ color: 'white' }}>Repite la Contraseña</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Password"
                        placeholderTextColor="#aaa"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword} // Corregido
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Crear Cuenta</Text>
            </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
    </View>
    );

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

