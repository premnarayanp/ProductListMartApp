import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import DropDownSheet from './DropDownSheet';

export default function SortingAndFilter({ dataList, updateProducts }) {
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
                showSortingList && <View style={{ position: 'absolute', top: 40, left: 20, zIndex: 500 }}><DropDownSheet sheetData={sortingData} sheetType="sortingData" /></View>
            }
            {
                showFilteringList && <View style={{ position: 'absolute', top: 40, right: 20, zIndex: 500 }}><DropDownSheet sheetData={filteringData} sheetType="filteringData" /></View>
            }

        </>




    )
}

const sortingData = [
    {
        title: "Relevance",
        action: () => { },
    },
    {
        title: "By Rating",
        action: () => { },
    },
    {
        title: "Price--Low to High",
        action: () => { },
    },
    {
        title: "Price--High to Low",
        action: () => { },
    },
    {
        title: "Newest First",
        action: () => { },
    },

    {
        title: "Calory",
        action: () => { },
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