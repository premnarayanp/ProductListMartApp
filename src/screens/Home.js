import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HomeMenuNavigation from '../navigation/HomeMenuNavigation';
import CarouselCards from '../components/Carousel/CarouselCards';

export default function Home({ navigation }) {
    return (
        <View >
            <HomeMenuNavigation navigation={navigation} />

            {/*------------------- Arrival section-----------------  */}
            <View style={style.arrivalsContainer}>
                <CarouselCards />
            </View>

        </View>
    )
}


const style = StyleSheet.create({
    homeContainer: {
    },
    arrivalsContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});