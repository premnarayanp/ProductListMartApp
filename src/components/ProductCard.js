import React from 'react'
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProductCard = ({ item }) => {
    return (
        <View style={styles.productCard}>
            <View style={styles.mainContainer}>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: 'flex-start', paddingBottom: 5, paddingTop: 5, alignItems: 'center' }}>
                    <MaterialCommunityIcons name="circle-box-outline" color='green' size={30} />
                    <Text style={{ fontSize: 12, backgroundColor: "blue", color: "white", borderRadius: 5, padding: 3, marginLeft: 15 }}>Just Launches</Text>
                </View>

                <Image
                    source={item.imgUrl}
                    style={styles.image}
                />

                <TouchableOpacity style={styles.addBtn}>
                    <MaterialCommunityIcons name="plus" color='blue' size={40} />
                </TouchableOpacity>

            </View>

            <View style={{ marginTop: 15 }}>
                <Text style={{ color: 'gray', fontSize: 14, fontWeight: 500 }}>{item.title}</Text>
                <Text style={{ color: 'blue', fontSize: 15, fontWeight: 900 }}> R {item.price} </Text>
            </View>
        </View>
    )
}
export default ProductCard;


const styles = StyleSheet.create({
    productCard: {
        backgroundColor: 'white',
        width: "45%",
        paddingBottom: 5,
        // marginLeft: 5
    },

    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "lightblue",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        resizeMode: 'cover'
    },

    addBtn: {
        marginTop: 5,
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: -15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    // productName: {
    //     color: "blue",
    //     fontSize: 14,
    //     fontWeight: 600,
    // },

})