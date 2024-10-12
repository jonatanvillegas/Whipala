import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    StatusBar,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import color from '../../Color/PaletaColor'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
const ListaFarmacia = () => { 

    return(
            <SafeAreaView style={styles.container}>

            <View style = {styles.efectoSuperior}>
                <Text
                    style = {styles.indicador}
                >
                    Farmaciauiru
                </Text>
            </View>
        
              <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}
              />
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
  
    indicador:{
      color: '#fff',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 20
  },
  efectoSuperior:{
      backgroundColor: COLOR_PRIMARIO,
      height: 110,
      borderRadius: 20,
      marginTop: -60,
      alignItems: 'center',
      justifyContent: 'center'
  },
  
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  
  });

export default ListaFarmacia;