import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//import { topPopularProducts } from '../constants/index'
export default function DropDownSheet({ productList, updateProductsState, sheetData, sheetType, onCloseSheet }) {
    const sortAndUpdateProducts = (sortingData) => {
        // if (sortingData.key === 'relevance') {
        //     updateProductsState(topPopularProducts);
        // } else {
        //     sortingData.customSort(productList, sortingData.key, sortingData.order, sortingData.isNumberSorting);
        //     updateProductsState([...productList]);
        // }
        sortingData.customSort(productList, sortingData.key, sortingData.order, sortingData.isNumberSorting);
        updateProductsState([...productList]);
        onCloseSheet();
    }

    return (
        <View style={style.dropDownSheet}>
            {
                sheetData.map((item, index) => {
                    return (<TouchableOpacity style={{ padding: 5, borderWidth: 1, borderColor: "blue", borderRadius: 8, marginTop: 5, width: 170, backgroundColor: 'green' }} key={sheetType + index}
                        onPress={() => sortAndUpdateProducts(item)}
                    >
                        <Text style={{ textAlign: 'center', color: 'white' }}>{item.title}</Text>
                    </TouchableOpacity>)
                })
            }

        </View>
    )
}

const style = StyleSheet.create({
    dropDownSheet: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'pink',
        padding: 20,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "gray",
        width: 200,
    }
});