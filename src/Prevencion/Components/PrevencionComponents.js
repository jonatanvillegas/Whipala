import { View, Text, FlatList, StyleSheet,Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { CANCER_INFO } from '../../Data/PrevencionCancer';

export default function PrevencionComponents() {
  return (
    <View style={styles.container}>
    <View style={styles.restante}>
        <Image
            source={require("../../../assets/favicon.png")}
            style={styles.imagen}
        />
    </View>
    <View style={styles.Bg}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>
                Prevención del cáncer
            </Text>
            <Text style={styles.headerDescription}>
                Prevenir el cáncer es vital para nuestra salud. Mediante hábitos saludables, podemos reducir el riesgo de padecerlo.
            </Text>
        </View>
        <FlatList
            data={CANCER_INFO}
            renderItem={({ item }) => <Item title={item.title} description={item.description} />}
            keyExtractor={item => item.id}
            style={styles.list}
            contentContainerStyle={{ paddingBottom: 20 }}
        />
    </View>
    <StatusBar style="auto" />
</View>
  )
}
const Item = ({ title, description }) => (
    <View style={styles.item}>
        <View>
            <Image style={styles.imagenSintoma} source={{
                uri: "https://placehold.co/600x400/png",
            }} />
        </View>
        <View style={{ width: "60%" }}>
            <Text style={[styles.title]}>{title}</Text>
            <Text style={{ fontSize: 12, marginVertical: 8 }}>{description}</Text>
            <View style={styles.botonComponent}>
                <TouchableOpacity>
                    <Text style={{ color: COLOR_WHITE }}>Leer más...</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: COLOR_WHITE,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    Bg: {
        flex: 3,
        width: '105%',
        backgroundColor: COLOR_PRIMARIO,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 7
    },
    restante: {
        flex: 1,
        width: '100%',
        backgroundColor: COLOR_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        width: "90%",
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    headerTitle: {
        color: COLOR_WHITE,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 10,
    },
    headerDescription: {
        color: COLOR_WHITE,
        textAlign: 'center',
        lineHeight: 20,
    },
    item: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: COLOR_WHITE,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        gap: 20
    },
    imagenSintoma: {
        width: 100,
        height: 100,
        borderRadius: 5
    },
    title: {
        fontSize: 15,
        fontWeight: "bold"
    },
    list: {
        flex: 1,
        width: "105%"
    },
    botonComponent: {
        padding: 6,
        backgroundColor: COLOR_PRIMARIO,
        display: "flex",
        alignSelf: "center",
        borderRadius: 8
    }
});