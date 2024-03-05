import { View, Text, StyleSheet } from 'react-native';
import HomeMenuNavigation from '../navigation/HomeMenuNavigation';
export default function Home({ navigation }) {
    return (
        <View>
            <HomeMenuNavigation navigation={navigation} />
        </View>
    )
}


const style = StyleSheet.create({
    homeContainer: {
    }
});