import { Text } from 'react-native';
import 'react-native-gesture-handler';
/*import { AuthProvider } from './context/AuthProvider';
import { RootNavigator } from './stack/Stack';
*/


import Aplication  from './src/Farmacia/Components/FarmaciaComponent'

export default function App() {
  return (
   /* <AuthProvider>
      <RootNavigator />
    </AuthProvider>
    */
    <Aplication/>
  );
}