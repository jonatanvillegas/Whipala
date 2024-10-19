import React from 'react'
import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import CardInicio from './CardInicio';
import CardPlanta from './CardPlantas';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const InicioComponents = () => {
    const navigation = useNavigation()
    
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <ImageBackground style={styles.imageContainer}
                source={require("../../../assets/ImageHome.jpg")}
                resizeMode="cover"
            >
                <View style={styles.user}>
                    <View style={styles.icon}>
                        <Button  textColor='white' onPress={()=>navigation.navigate('chatbot')} >E</Button>
                    </View>
                    <Text style={styles.userText}>¿Qué sientes hoy?</Text>
                </View>
                <View style={styles.quoteContainer}>
                    <Text style={styles.quoteText}>
                        "Si sirves a la Naturaleza,
                        {"\n"} ella te servirá a ti"
                    </Text>
                    <Text style={styles.quoteAuthor}>Confucio</Text>
                </View>
            </ImageBackground>

            <View style={styles.contentContainer}>
                <Section title="Te puede interesar" />
                {/* <SectionPlanta title="Plantas Medicinales" /> */}
                <SectionPlanta title="Te puede interesar"/>
            </View>
            <StatusBar style="auto" hidden={false} />
        </ScrollView>
    )
}

const Section = ({ title }) => (
    <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
            <CardInicio />
        </ScrollView>
    </View>
);

const SectionPlanta = ({ title }) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        <CardPlanta />
      </ScrollView>
    </View>
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE,
      },
      imageContainer: {
        width: '100%',
        height: 200,
      },
      user: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLOR_PRIMARIO,
        width: '50%',
        borderRadius: 20,
        padding: 5,
        marginBottom: 20,
        marginTop: 20,
        marginLeft:20
      },
      icon: {
        width: 30,
        height: 30,
        backgroundColor: COLOR_VERDE,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      },
      iconText: {
        color:COLOR_PRIMARIO,
        fontWeight: 'bold',
      },
      userText: {
        color: COLOR_WHITE,
        fontWeight: 'bold',
      },
      quoteContainer: {
        alignItems: 'flex-start',
        marginLeft: 20,
      },
      quoteText: {
        fontStyle: 'italic',
        color: COLOR_PRIMARIO,
      },
      quoteAuthor: {
        color: COLOR_PRIMARIO,
        fontSize: 12,
        marginTop: 5,
      },
      contentContainer: {
        flex: 2,
        backgroundColor: COLOR_PRIMARIO,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingHorizontal: 20,
        marginTop: -25,
        padding: 20,
      },
      sectionContainer: {
        marginBottom: 10,
      },
      sectionTitle: {
        fontSize: 22,
        marginBottom: 10,
        color: COLOR_WHITE,
        textAlign: 'center',
      },
      scrollView: {
        marginBottom: 20,
      },
});


export default InicioComponents
