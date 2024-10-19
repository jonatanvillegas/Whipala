import { Text } from 'react-native';
import 'react-native-gesture-handler';

import DetalleFarmaciaComponent from './src/DetalleFarmacia/Components/DetalleFarmaciaComponent';
import Prevencion from './src/IA_Plantas/Containers/Inicio_IA_Plantas'
import { RootNavigator } from './stack/Stack';



import Aplication  from './src/Farmacia/Containers/FarmaciaContainer';
// import Aplication  from './src/Sintomas/Containers/SintomasContainer'
import { AuthProvider } from './context/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
        <RootNavigator />
      </AuthProvider>

    // <Aplication/>
    // <Prevencion/>
  );
}