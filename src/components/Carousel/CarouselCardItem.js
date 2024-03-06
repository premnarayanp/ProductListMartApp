import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { ArrivalsItemCard } from '../index';

export const SLIDER_WIDTH = Dimensions.get('window').width + 150
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
    return (
        <View style={styles.CardItemContainer} key={index}  >
            {
                item.map((item, itemIndex) => <ArrivalsItemCard item={item} key={"ArrivalsItemCard" + index + itemIndex} />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    CardItemContainer: {
        width: ITEM_WIDTH,
        paddingBottom: 10,
        display: "flex",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        backgroundColor: "white",
    },
})

export default CarouselCardItem;

// shadowColor: "#000",
// shadowOffset: {
//     width: 0,
//     height: 3,
// },
// shadowOpacity: 0.29,
// shadowRadius: 4.65,
// elevation: 7,