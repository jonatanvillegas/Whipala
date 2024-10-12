import React, { Component } from 'react';
import InicioComponents_IA_Plantas from '../Components/InicioComponents_IA_Plantas';
import { View, Text, Button, Image, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            loading: false,
            plantInfo: null,
        };
        this.pickImage = this.pickImage.bind(this);
        this.takePhoto = this.takePhoto.bind(this);
    }


    pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }
    
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (!result.canceled) {
            this.setState({ loading: true, image: result.assets[0].uri }); // Cambiar a result.assets[0].uri
    
            setTimeout(() => {
                this.setState({
                    loading: false,
                    plantInfo: {
                        name: "Aloe Vera",
                        description: "Aloe Vera is a medicinal plant known for its soothing and healing properties."
                    }
                });
            }, 2000);
        }
    };

    takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Sorry, we need camera permissions to make this work!');
            return;
        }
    
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (!result.canceled) {
            this.setState({ loading: true, image: result.assets[0].uri }); // Cambiar a result.assets[0].uri
    
            setTimeout(() => {
                this.setState({
                    loading: false,
                    plantInfo: {
                        name: "Lavender",
                        description: "Lavender is known for its calming and relaxing properties."
                    }
                });
            }, 2000);
        }
    };

    render() {
        const { image, loading, plantInfo } = this.state;
        return (
            <InicioComponents_IA_Plantas
                pickImage={this.pickImage}
                takePhoto={this.takePhoto}
                image={image}
                loading={loading}
                plantInfo={plantInfo}
            />
        );
    }
}

export default componentName;
