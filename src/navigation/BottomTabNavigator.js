import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Home, Food, QRCodeScanner, Packs, Mart } from '../screens/index';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

//----------------------Root Bottom Tab-----------------------------
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen name="Food" component={Food}
                options={{
                    tabBarLabel: 'Food',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="food" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen name="QRCodeScanner" component={QRCodeScanner}
                options={{
                    tabBarShowLabel: false,
                    tabBarLabel: '',
                    tabBarIcon: ({ color = 'white', size }) => (
                        <View style={style.QRCode}>
                            <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
                        </View>
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen name="Mart" component={Mart}
                options={{
                    tabBarLabel: 'Mart',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="basket-outline" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen name="Packs" component={Packs}
                options={{
                    tabBarLabel: 'Packs',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="cupboard-outline" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;


const style = StyleSheet.create({
    QRCode: {
        backgroundColor: '#00008b',
        marginTop: -10,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        height: 60,
        width: 60,
    }
});