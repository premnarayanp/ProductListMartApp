import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Arrivals, Popular, Recommendations, } from '../screens/HomeSectionsScreen/index'

const Stack = createNativeStackNavigator();
const myProfilePic = require('../assets/my_photos.png');
const brandLogo = require('../assets/brandLogo.png');

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{
                    headerShown: true,
                    title: "",//() => null,//It give Warning Components not a valid child
                    headerLeft: (props) => (
                        <View style={style.header}>
                            <TouchableOpacity style={{ marginRight: 5 }}>
                                <Image alt='pro-pic' style={style.brandLogo}
                                    source={brandLogo}
                                />
                            </TouchableOpacity>

                            <View>
                                <Text style={{ fontSize: 15, }}>Address Goes Here...</Text>
                                <Text style={{ fontSize: 12, color: 'gray' }}>23 km away</Text>
                            </View>
                        </View>
                    ),

                    headerRight: (props) => (
                        <View style={style.header}>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <MaterialCommunityIcons name="magnify" color="gray" size={30} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginRight: 10 }}>
                                <MaterialCommunityIcons name="qrcode-scan" color="gray" size={30} />
                            </TouchableOpacity>

                            <TouchableOpacity >
                                <Image alt='pro-pic' style={style.avatarImg}
                                    source={myProfilePic}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />

            <Stack.Screen
                name='Arrivals'
                component={Arrivals}
            />

            <Stack.Screen
                name="Popular"
                component={Popular}
            />
            <Stack.Screen
                name="Recommendations"
                component={Recommendations}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;

const style = StyleSheet.create({
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
    },

    avatarImg: {
        height: 40,
        width: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "gray",
        resizeMode: 'cover',
    },
    brandLogo: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
    }

});