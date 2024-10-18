import { Text } from 'react-native';
import 'react-native-gesture-handler';


import Aplication from './src/ChatBot/components/ChatbotComponent'
import DetalleFarmaciaComponent from './src/DetalleFarmacia/Components/DetalleFarmaciaComponent';
import Prevencion from './src/IA_Plantas/Containers/Inicio_IA_Plantas'
import { RootNavigator } from './stack/Stack';
import { AuthProvider } from './context/AuthProvider';
import Perfil from './src/Perfil/Components/PerfilUserComponents'

export default function App() {
  return (
    // <AuthProvider>
    //     <RootNavigator />
    //   </AuthProvider>

    <Aplication/>
    // <Prevencion/>
  );
}