import { View, Text, StyleSheet } from 'react-native';
export default function Home({ navigation }) {
    return (
        <View>
            <Text style={style.container}>Home</Text>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        textAlign: 'center',
    }
});