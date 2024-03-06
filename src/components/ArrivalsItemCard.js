import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native";

const ArrivalsItemCard = ({ item }) => {
    return (
        <View style={styles.popularItemCard} >
            <Image alt='hi' style={styles.image}
                source={item.imgUrl}
            />

            <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
    )
}

export default ArrivalsItemCard;


const styles = StyleSheet.create({
    popularItemCard: {
        display: "flex",
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 100,
    },
    itemTitle: {
        color: 'blue',
        fontSize: 14,
        fontWeight: "bold",
    }
})