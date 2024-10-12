import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

export default function InicioComponents_IA_Plantas({ plantInfo, loading, image, takePhoto, pickImage }) {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Selecciona o toma una foto de la planta medicinal</Text>
        
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Seleccionar desde la galería</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={takePhoto}>
          <Text style={styles.buttonText}>Tomar una foto</Text>
        </TouchableOpacity>

        {console.log('probando imagen',image)}
        {/* Indicador de carga */}
        {loading && <ActivityIndicator size="large" color="#00ff00" />}

        {/* Mostrar imagen y la información de la planta si existen */}
        {image && !loading && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.image} />
            {plantInfo && (
              <View style={styles.plantInfo}>
                <Text style={styles.plantName}>{plantInfo.name}</Text>
                <Text style={styles.plantDescription}>{plantInfo.description}</Text>
              </View>
            )}
          </View>
        )}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    imageContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    plantInfo: {
        alignItems: 'center',
    },
    plantName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    plantDescription: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
});
