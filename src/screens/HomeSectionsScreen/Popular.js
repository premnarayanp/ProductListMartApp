import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { ProductCard, SortingAndFilter } from "../../components/index";
import { topPopularProducts } from '../../constants/index'
import { useEffect, useState } from 'react';

export default function Popular({ navigation }) {
    const [productList, updateProductsState] = useState([]);
    useEffect(() => {
        function fetchData() {
            updateProductsState(topPopularProducts);
        }
        fetchData();
    }, []);

    return (
        <ScrollView >
            <View style={style.popularProductsSection}>
                <SortingAndFilter productList={productList} originalProductList={topPopularProducts} updateProductsState={updateProductsState} />
                {
                    productList.map((item, itemIndex) => < ProductCard item={item} key={"popularItemCard" + itemIndex} />)
                }
                {
                    productList.length < 1 && <Text style={{ color: "red", fontSize: 30, fontWeight: 700, height: 200 }}>Nothing Any Products</Text>
                }
            </View>
        </ScrollView>
    )
}


const style = StyleSheet.create({
    homeContainer: {
        backgroundColor: "white"
    },
    popularProductsSection: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        position: 'relative'
    },
});