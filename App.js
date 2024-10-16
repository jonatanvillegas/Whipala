import { Text } from 'react-native';
import 'react-native-gesture-handler';
/*import { AuthProvider } from './context/AuthProvider';
import { RootNavigator } from './stack/Stack';
*/


//import Aplication  from './src/Farmacia/Containers/Producto/ProductoContainer';
import Aplication  from './src/Farmacia/Containers/Comprar/ComprarProductoContainer';

export default function App() {
  return (
   /* <AuthProvider>
      <RootNavigator />
    </AuthProvider>
    */
    <Aplication/>
  );
}