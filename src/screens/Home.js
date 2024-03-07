import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import HomeMenuNavigation from '../navigation/HomeMenuNavigation';
import CarouselCards from '../components/Carousel/CarouselCards';
import { ProductCard, HeaderCard, SortingAndFilter } from "../components/index";
import { topPopularProducts, topRecommendedProducts } from '../constants/index'
import { useEffect, useState } from 'react';

export default function Home({ navigation }) {
    const [productList, updateProductsState] = useState([]);
    useEffect(() => {
        function fetchData() {
            updateProductsState(topPopularProducts);
        }
        fetchData();
    }, []);

    return (
        <ScrollView >
            <HomeMenuNavigation navigation={navigation} />

            {/*------------------- Arrival section-----------------  */}
            <View style={style.arrivalsContainer}>
                <CarouselCards />
            </View>


            {/*------------------- Popular section-----------------  */}

            <View style={style.popularProductsSection}>
                <SortingAndFilter productList={productList} updateProductsState={updateProductsState} />
                {
                    productList.map((item, itemIndex) => < ProductCard item={item} key={"popularItemCard" + itemIndex} />)
                }
                <HeaderCard title={" All Popular Items"} />
            </View>

            {/*------------------- Recommended section-----------------  */}
            <View style={style.RecommendedProductsSection}>
                {
                    topRecommendedProducts.map((item, itemIndex) => < ProductCard item={item} key={"popularItemCard" + itemIndex} />)
                }

                <HeaderCard title={" All RecommendedProducts.."} />
            </View>

        </ScrollView>
    )
}


const style = StyleSheet.create({
    homeContainer: {
        backgroundColor: "white"
    },
    arrivalsContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    popularProductsSection: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        position: 'relative'
    },
    RecommendedProductsSection: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    }
});