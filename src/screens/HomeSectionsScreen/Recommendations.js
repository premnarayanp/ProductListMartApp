import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { ProductCard, SortingAndFilter } from "../../components/index";
import { topRecommendedProducts } from '../../constants/index'
import { useEffect, useState } from 'react';

export default function Recommended({ navigation }) {
    const [recommendedList, setRecommendedList] = useState([]);
    useEffect(() => {
        function fetchData() {
            setRecommendedList(topRecommendedProducts);
        }
        fetchData();
    }, []);

    return (
        <ScrollView >
            <View style={style.RecommendedProductsSection}>
                <SortingAndFilter productList={recommendedList} originalProductList={topRecommendedProducts} updateProductsState={setRecommendedList} />
                {
                    recommendedList.map((item, itemIndex) => < ProductCard item={item} key={"recommendedListItemCard" + itemIndex} />)
                }
                {
                    recommendedList.length < 1 && <Text style={{ color: "red", fontSize: 30, fontWeight: 700, }}>Nothing Any Products</Text>
                }
            </View>

        </ScrollView>
    )
}


const style = StyleSheet.create({
    homeContainer: {
        backgroundColor: "white"
    },
    RecommendedProductsSection: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    }
});