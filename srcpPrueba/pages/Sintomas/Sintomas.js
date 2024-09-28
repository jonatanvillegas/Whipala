import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import COLOR from './../../../color';
import color from './../../../color';
import { CANCER_SYMPTOMS } from '../../../Data/SintomasCancer';
import AntDesign from '@expo/vector-icons/AntDesign';

const Item = ({ title, description }) => (
  <View style={styles.item}>
    <View>
      <Image style={styles.imagenSintoma} source={{
        uri: "https://placehold.co/600x400/png",
      }} />
    </View>
    <View style={{ width: "60%" }}>
      <Text style={[styles.title, { marginVertical: 5 }]}>{title}</Text>
      <Text style={{ fontSize: 12 }}>{description}</Text>
    </View>
    <View>
      <AntDesign name="right" size={30} color="black" style={{ fontWeight: "bold" }} />
    </View>
  </View>
);

const Sintomas = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.efectoSuperior}>
        <Text style={styles.indicador}>Sintomas</Text>
      </View>

      <View style={styles.textContainer}>
        <View style={styles.styleText}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 20 }}>
            Sintomas del Cancer
          </Text>
          <Text>
            Prevenir el cancer es vital para nuestra salud.
            Mediante hábitos saludables, podemos reducir el riesgo de padecerlo.
          </Text>
        </View>
      </View>

      {/* Asegura que la FlatList ocupe el espacio adecuado y permita el scroll */}
      <FlatList
        data={CANCER_SYMPTOMS}
        renderItem={({ item }) => <Item title={item.title} description={item.description} />}
        keyExtractor={item => item.id}
        style={styles.list}  // Agregar estilo para ajustar la lista
        contentContainerStyle={{ paddingBottom: 20 }}  // Espacio adicional al final
      />

      {/* Boton para agendar la cita  */}
      <View style={styles.containerButton}>
      <TouchableOpacity style={styles.botonAgendar}>
        <Text style={{ color:color.COLOR_WHITE,}}>Agenda tu Cita</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  textContainer: {
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  styleText: {
    alignItems: "center",
    justifyContent: "center"
  },
  indicador: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20
  },
  efectoSuperior: {
    backgroundColor: COLOR.COLOR_PRIMARIO,
    height: 110,
    borderRadius: 20,
    marginTop: -60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: color.COLOR_WHITE,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    gap: 15
  },
  imagenSintoma: {
    width: 80,
    height: 80
  },
  title: {
    fontSize: 15,
    fontWeight: "bold"
  },
  list: {
    flex: 1, // Asegura que la lista ocupe todo el espacio disponible
  },
  containerButton:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  botonAgendar:{
    padding:10,
    backgroundColor:color.COLOR_PRIMARIO,
    borderRadius:5,
    width:"60%",
    margin:12,
    alignItems:"center"
  }
});

export default Sintomas;
