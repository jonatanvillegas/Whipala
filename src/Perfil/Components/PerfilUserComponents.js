import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import EncabezadoPerfil from './EncabezadoPerfil';
import color from '../../Color/PaletaColor';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de instalar esta librería
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CardPerfil = () => {
  return (
    <View style={styles.CardPerfil}>
      <View style={styles.ContenCard}>
        <View>

          <FontAwesome name="user-circle" size={32} color={color.COLOR_SECUNDARIO} />
        </View>
        <View style={styles.infoContainer}>
          {/* Información en el centro */}
          <Text style={styles.infoText}>Edwar Blandon</Text>
          <Text style={styles.subText}>EdwarBlandon@gmail.com</Text>
        </View>
        <View>

          <FontAwesome name="user-circle" size={32} color={color.COLOR_SECUNDARIO} />
        </View>
      </View>
    </View>
  );
};

const IconsPerfil = (props) => {
  return (
    <View style={styles.iconContainer}>
      {props.icon}
      <Text>{props.actividad}</Text>
    </View>
  );
};

const IconsRectangulos = (props) => {
  return (
    <View style={styles.configuracionContainer}>
      <View style={{ flexDirection: 'row', gap: 15 }}>
        {props.icon}
        <Text>{props.preferencia}</Text>
      </View>
      <View style={{ backgroundColor: COLOR_BLUE, padding: 3, borderRadius: 50 }}>
        <AntDesign name="right" size={24} color="white" />
      </View>
    </View>
  );
};

export default function PerfilUserComponents() {
  return (
    <ScrollView style={styles.Fondo}>
      <EncabezadoPerfil />
      <View style={styles.contenedorCard}>
        <CardPerfil />
      </View>
      <View style={styles.Actividad}>
        <Text style={styles.actividadTitle}>Tu Actividad</Text>
        <View style={styles.iconRow}>
          <IconsPerfil
            actividad='Tus compras'
            icon={<FontAwesome name="shopping-cart" size={34} color={color.COLOR_SECUNDARIO} />}
          />
          <IconsPerfil
            actividad='Tus citas'
            icon={<FontAwesome name="calendar-check-o" size={34} color={color.COLOR_SECUNDARIO} />}
          />
          <IconsPerfil
            actividad='Favoritos'
            icon={<FontAwesome name="heart" size={34} color={color.COLOR_SECUNDARIO} />}
          />
        </View>
      </View>
      <View style={styles.contenedorPreferencia}>
        <Text style={{ marginVertical: 14 }}>
          Preferencias
        </Text>
        <View style={styles.PreferenciaContainer}>
          <IconsRectangulos 
          icon={<Fontisto name="world-o" size={24} color={color.COLOR_SECUNDARIO} />}
          preferencia='Lenguaje'
          />
          <IconsRectangulos 
          icon={<Ionicons name="moon" size={24} color={color.COLOR_SECUNDARIO} />}
          preferencia='Modo Nocturno'
          />
        </View>
      </View>
      <View style={styles.contenedorPreferencia}>
        <Text style={{ marginVertical: 14 }}>
          Asistencia e informacion
        </Text>
        <View style={styles.PreferenciaContainer}>
          <IconsRectangulos 
          icon={<Ionicons name="help-buoy-outline" size={24} color={color.COLOR_SECUNDARIO} />}
          preferencia='Obtener Ayuda'
          />
          <IconsRectangulos 
            icon={<Entypo name="help-with-circle" size={24} color={color.COLOR_SECUNDARIO} />}
            preferencia='Quienes Somos'
          />
          <IconsRectangulos
          icon={<Ionicons name="document-text" size={24} color={color.COLOR_SECUNDARIO} />}
            preferencia='Terminos y Condiciones'
          />
          <IconsRectangulos 
          icon={<MaterialIcons name="security" size={24} color={color.COLOR_SECUNDARIO} />}
            preferencia='Politicas de Privacidad'
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Fondo: {
    backgroundColor: color.COLOR_FONDO,
  },
  contenedorCard: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  CardPerfil: {
    backgroundColor: color.COLOR_PRIMARIO,
    width: '90%',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  ContenCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 14,
    color: '#ddd',
  },
  Actividad: {
    width: '90%',
    padding: 16,
    backgroundColor: color.COLOR_PRIMARIO,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: 'center',
  },
  actividadTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    alignItems: 'center',
    gap:8
  },
  PreferenciaContainer: {
    flexDirection: 'column',
    gap: 15
  },
  configuracionContainer: {
    width: '100%',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.COLOR_PRIMARIO,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,

  },
  contenedorPreferencia: {
    width: '90%',
    alignSelf: 'center',
  }
});
