import 'react-native-gesture-handler';
import { AuthProvider } from './context/AuthProvider';
import { RootNavigator } from './stack/Stack';

import Aplication from './src/pages/farmacia/Lista-Farmacia'

export default function App() {
  return (/*
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>*/
    <Aplication/>
  );
}

