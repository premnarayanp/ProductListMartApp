// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
export default function HomeMenuNavigation({ navigation }) {
    return (
        <View style={style.homeMenuNavigation}>
            <TouchableOpacity onPress={() => navigation.getParent().navigate("Arrivals", { data: 'Arrivals' })} style={style.menuButton}>
                <Text style={{ color: 'white', fontWeight: 700 }}>Arrivals</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.getParent().navigate("Popular", { data: 'Popular' })} style={style.menuButton} >
                <Text style={{ color: 'white', fontWeight: 700 }}>Popular</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.getParent().navigate("Recommendations", { data: 'Recommendations' })} style={style.menuButton}>
                <Text style={{ color: 'white', fontWeight: 700 }}>Recommendations</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    homeMenuNavigation: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: "center",
        flexDirection: 'row',
        width: '100%',
        // paddingHorizontal: 10,
        padding: 10,
        backgroundColor: 'white',
    },

    menuButton: {
        backgroundColor: 'lightblue',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "gray",
        padding: 5,
    },


});

//git commit -m"HomeMenuNavigator added inside home page  "