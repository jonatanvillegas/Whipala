import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import CardCurso from '../components/CardCurso';
import color from '../../color';
import { Link } from '@react-navigation/native';
import CardPlanta from '../components/CardPlantas';
import Sintomas from './Sintomas/Sintomas';
import { StatusBar } from 'expo-status-bar';
const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ImageBackground style={styles.imageContainer}
      source={require("../../assets/ImageHome.jpg")} 
      resizeMode="cover" 
      >
        <View style={styles.user}>
          <View style={styles.icon}>
            <Text style={styles.iconText}>E</Text>
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
        <Link style={{color:'white'}} to={"/Sintomas"}>
          sintomas
        </Link>
        <Link style={{color:'white'}} to={"/DetalleFarmacia"}>
          detalle farmacia
        </Link>
        <Link style={{color:'white'}} to={"/PrevencionEnfermedades"}>
          prenvion
        </Link>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <Section title="Te puede interesar" />
        <SectionPlanta title="Plantas Medicinales" />
      </View>
      <StatusBar style="auto" hidden={false} />
    </ScrollView>
  );
};

const Section = ({ title }) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      <CardCurso />
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
    backgroundColor: color.COLOR_WHITE,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.COLOR_PRIMARIO,
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
    backgroundColor: color.COLOR_VERDE,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    color: color.COLOR_PRIMARIO,
    fontWeight: 'bold',
  },
  userText: {
    color: color.COLOR_WHITE,
    fontWeight: 'bold',
  },
  quoteContainer: {
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  quoteText: {
    fontStyle: 'italic',
    color: color.COLOR_PRIMARIO,
  },
  quoteAuthor: {
    color: color.COLOR_PRIMARIO,
    fontSize: 12,
    marginTop: 5,
  },
  contentContainer: {
    flex: 2,
    backgroundColor: color.COLOR_PRIMARIO,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  sectionContainer: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: color.COLOR_WHITE,
    textAlign: 'center',
  },
  scrollView: {
    marginBottom: 20,
  },
});

export default Home;
