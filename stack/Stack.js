import React, { useRef, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import Login from '../src/Login/containers/LoginContainer';
import Home from '../src/Inicio/Containers/InicioContainer';
import Perfil from '../src/Perfil/Containers/PerfilUserContainer';
import Register from '../src/Registro/containers/RegistroContainer';
import { useAuth } from '../context/AuthProvider';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { animate1, animate2, circle1, circle2 } from '../Animated/animated';
import Color from '../src/Color/PaletaColor'
import Medicos from '../src/Medicos/Containers/MedicosContainer'
import PrevencionEnfermedades from '../src/Prevencion/Containers/PrevencionContainer';
import DetalleFarmacia from '../src/DetalleFarmacia/Containers/DetalleFarmaciaContainer';
import ProductoList from '../src/Farmacia/Containers/Producto/ProductoContainer'
import ComprarProductos from '../src/Farmacia/Containers/Comprar/ComprarProductoContainer'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import PerfilDelMedico from '../src/Medicos/Containers/PerfilMedicoContainer'
import Ia from '../src/IA_Plantas/Containers/Inicio_IA_Plantas'
import Farmacias from '../src/Farmacia/Containers/FarmaciaContainer'

import Citas from '../src/Citas/Containers/CitasContainer'
import Chatbot from '../src/ChatBot/container/ChatbotContainer'
import AgendarCita from '../src/AgendarCita/Containers/AgendarCitaContainer'


const AuthStack = createStackNavigator();

const AppStack = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

//stack admin
const AdminStack = createStackNavigator();

const RootStack = createStackNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;

  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={1}>
      <Animatable.View ref={viewRef} duration={600} style={styles.container}>
        <View style={[styles.btn, { borderColor: focused ? Color.COLOR_PRIMARIO : Color.COLOR_SECUNDARIO }]}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          {/* Directamente usa el ícono que ya está en el objeto */}
          {item.icon}
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

const userScreen = [
  {
    routes: 'Medicos',
    label: 'Medico',
    icon: <FontAwesome6 name="user-doctor" size={16} color="white" />, // Ícono con componente instanciado
    component: Medicos,
  },
  {
    routes: "Citas",
    label: "Citas",
    icon: <FontAwesome6 name="file-medical" size={16} color="white" />, // Ícono con componente instanciado
    component: Citas,
  },
  {
    routes: "Home",
    label: "Home",
    icon: <AntDesign name="home" size={16} color="white" />, // Ícono con componente instanciado
    component: Home,
  },
  {
    routes: "Farmacia",
    label: "Farmacias",
    icon: <MaterialIcons name="local-pharmacy" size={16} color="white" />, // Ícono con componente instanciado
    component: Farmacias,
  },
  {
    routes: "Perfil",
    label: "Perfil",
    icon: <AntDesign name="user" size={16} color="white" />, // Ícono con componente instanciado
    component: Perfil,
  }
];// AntDesign Icon

const AdminNavigator = () => (
  <AdminStack.Navigator>
    <AdminStack.Screen name="AdminHome" component={AdminHome} options={{ headerShown: false }} />
  </AdminStack.Navigator>
);



const AuthNavigator = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <AuthStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
  </AuthStack.Navigator>
);

const AppNavigator = () => (
  <AppStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        height: 65,
        width:400,
        left:6,
        bottom:18,
        borderRadius: 10,
        backgroundColor: Color.COLOR_SECUNDARIO,
        borderTopWidth: 1
      }
    }}
  >
    {
      userScreen.map((item, index) => {
        return (
          <AppStack.Screen key={index} name={item.routes} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })
    }
  </AppStack.Navigator>
);
export const RootNavigator = () => {
  const { user } = useAuth();
  console.log(user?.admin);

  const isAdmin = user?.admin;

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          isAdmin === "admin" ? (
            <RootStack.Screen name="Admin" component={AdminNavigator} />
          ) : (
            <>
              <RootStack.Screen name="App" component={AppNavigator} />
              <RootStack.Screen name="chatbot" component={Chatbot} />
              <RootStack.Screen name="PrevencionEnfermedades" component={PrevencionEnfermedades} />
              <RootStack.Screen name="DetalleFarmacia" component={DetalleFarmacia} />
              <RootStack.Screen name="ListaProductos" component={ProductoList} />
              <RootStack.Screen name="ComprarProducto" component={ComprarProductos} />
              <RootStack.Screen name="PerfilDelMedico" component={PerfilDelMedico} />
              <RootStack.Screen name="AgendarCita" component={AgendarCita} />
              <RootStack.Screen name="Citas" component={Citas} />
              <RootStack.Screen name="Plantas" component={Ia} />
            </>
          )
        ) : (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  btn: {
    width: 35,
    height: 35,
    borderWidth: 4,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,

  },
  text: {
    fontSize: 10,
    textAlign: "center",
    color: "white",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.COLOR_SECUNDARIO,
    borderRadius: 25
  }
})
