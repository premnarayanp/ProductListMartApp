import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import HomeMenuNavigation from '../navigation/HomeMenuNavigation';
import CarouselCards from '../components/Carousel/CarouselCards';
import { ProductCard, HeaderCard, SortingAndFilter } from "../components/index";
import { topPopularProducts, topRecommendedProducts } from '../constants/index'
import { useEffect, useState } from 'react';

export default function Home({ navigation }) {
    const [productList, updateProductsState] = useState([]);
    const [recommendedList, setRecommendedList] = useState([]);
    useEffect(() => {
        function fetchData() {
            updateProductsState(topPopularProducts);
            setRecommendedList(topRecommendedProducts);
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
                <SortingAndFilter productList={productList} originalProductList={topPopularProducts} updateProductsState={updateProductsState} />
                {
                    productList.map((item, itemIndex) => < ProductCard item={item} key={"popularItemCard" + itemIndex} />)
                }
                {
                    productList.length < 1 && <Text style={{ color: "red", fontSize: 30, fontWeight: 700, height: 200 }}>Nothing Any Products</Text>
                }
                <HeaderCard title={"All Popular Items"} navigation={navigation} navTo="Popular" />
            </View>

            {/*------------------- Recommended section-----------------  */}
            <View style={style.RecommendedProductsSection}>
                <SortingAndFilter productList={recommendedList} originalProductList={topRecommendedProducts} updateProductsState={setRecommendedList} />
                {
                    recommendedList.map((item, itemIndex) => < ProductCard item={item} key={"recommendedListItemCard" + itemIndex} />)
                }
                {
                    recommendedList.length < 1 && <Text style={{ color: "red", fontSize: 30, fontWeight: 700, }}>Nothing Any Products</Text>
                }

                <HeaderCard title={" All RecommendedProducts.."} navigation={navigation} navTo="Recommendations" />
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