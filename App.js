import { Text } from 'react-native';
import 'react-native-gesture-handler';


import Aplication  from './src/Farmacia/Components/FarmaciaComponent'

import Prevencion from './src/IA_Plantas/Containers/Inicio_IA_Plantas'
import { RootNavigator } from './stack/Stack';
import { AuthProvider } from './context/AuthProvider';
export default function App() {
  return (
  <AuthProvider>
      <RootNavigator />
    </AuthProvider>
 

  );
}