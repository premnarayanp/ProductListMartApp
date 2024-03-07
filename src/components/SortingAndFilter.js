import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import DropDownSheet from './DropDownSheet';

export default function SortingAndFilter({ productList, updateProductsState }) {
    const [showSortingList, setShowSortingList] = useState(false);
    const [showFilteringList, setShoFilteringList] = useState(false);

    const onClickFilter = () => {
        setShoFilteringList(!showFilteringList);
    }

    const onClickSorting = () => {
        setShowSortingList(!showSortingList);
    }
    return (
        <>
            <View style={style.sortingAndFilter}>
                <TouchableOpacity onPress={onClickSorting} style={{ padding: 5, borderWidth: 1, borderColor: "blue", borderRadius: 12 }}>
                    <MaterialCommunityIcons name="sort" color='blue' size={20} />
                </TouchableOpacity>

                <TouchableOpacity onPress={onClickFilter} style={{ padding: 5, borderWidth: 1, borderColor: "blue", borderRadius: 12 }}>
                    <MaterialCommunityIcons name="filter-menu-outline" color='blue' size={20} />
                </TouchableOpacity>
            </View>
            {
                showSortingList && <View style={{ position: 'absolute', top: 40, left: 20, zIndex: 500 }}>
                    <DropDownSheet sheetData={sortingData} sheetType="sortingData" onCloseSheet={onClickSorting} productList={productList} updateProductsState={updateProductsState} />
                </View>
            }
            {
                showFilteringList && <View style={{ position: 'absolute', top: 40, right: 20, zIndex: 500 }}>
                    <DropDownSheet sheetData={filteringData} sheetType="filteringData" onCloseSheet={onClickFilter} productList={productList} updateProductsState={updateProductsState} />
                </View>
            }

        </>




    )
}

//----------------------Custom Sort function--------------------------
const customSort = (arr, key, order, isNumberSorting) => {
    // A compare fun that compares on Number val property of two objects
    function compareByNumberValue(a, b) {
        return a[key] - b[key];
    }

    // A compare fun that compares on Number val property of two objects
    function compareByNumberValDescending(a, b) {
        return b[key] - a[key];
    }

    // A compare fun that compares on String val property of two objects
    function compareByStringVal(a, b) {
        return a[key].localeCompare(b[key]);
    }

    if (isNumberSorting) {
        if (order < 0) {
            arr.sort(compareByNumberValDescending);
        } else {
            arr.sort(compareByNumberValue);
        }

    } else {
        arr.sort(compareByStringVal);
    }
}

const sortingData = [
    {
        title: "Relevance",
        key: "relevance",
        customSort: (arr) => { },
    },
    {
        title: "By Rating",
        customSort: customSort,
        key: "rating",
        isNumberSorting: true,
        order: 1
    },
    {
        title: "Price--Low to High",
        customSort: customSort,
        key: "price",
        isNumberSorting: true,
        order: 1
    },
    {
        title: "Price--High to Low",
        customSort: customSort,
        key: "price",
        isNumberSorting: true,
        order: -1
    },
    {
        title: "Newest First",
        customSort: customSort,
        isNumberSorting: false,
        key: "date",
        order: 1
    },

    {
        title: "Calory",
        customSort: customSort,
        isNumberSorting: true,
        key: "calory",
        order: 1
    }
];

const filteringData = [
    {
        title: "Price 100  and Blow",
        action: () => { },
    },
    {
        title: "Price 1000 and Blow",
        action: () => { },
    },
    {
        title: "Dry Food",
        action: () => { },
    },
    {
        title: "Sweets",
        action: () => { },
    },
    {
        title: "Rating 4",
        action: () => { },
    }
]

const style = StyleSheet.create({
    sortingAndFilter: {
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
    },
});