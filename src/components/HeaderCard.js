import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HeaderCard({ title, navigation, navTo }) {
    return (
        <View style={style.popularProductHeader}>
            <Text style={{ fontSize: 20, color: "gray", fontWeight: 700 }}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.getParent().navigate(navTo, { data: 'Popular' })} style={{ padding: 5, borderWidth: 1, borderColor: "blue", borderRadius: 12 }}>
                {/* <Text style={{ fontSize: 13, color: 'blue', fontWeight: 700 }}>View More</Text> */}
                <MaterialCommunityIcons name="arrow-right-thick" color='blue' size={20} />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    popularProductHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "gray",
        width: '95%',
        marginBottom: 5,
        marginTop: 5,
        marginBottom: 50,
    }
});