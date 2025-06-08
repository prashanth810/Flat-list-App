import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { fontsize, spacing } from '../../constants/Dimensions'
import { fontfamily } from '../../constants/Fonts'

const Productcard = () => {
    const imgurl = "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694713212/Croma%20Assets/Communication/Wearable%20Devices/Images/300965_0_bask7w.png";
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.imgwrapper}>
                <Image source={{ uri: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694713212/Croma%20Assets/Communication/Wearable%20Devices/Images/300965_0_bask7w.png" }} style={styles.img} />
            </View>

            <View style={styles.contentcontainer}>
                <Text style={styles.name} numberOfLines={1}> Apple Watch Series 9  </Text>
                <Text style={styles.brand}> Apple  </Text>
                <Text style={styles.price}> $104  </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Productcard

const styles = StyleSheet.create({
    container: {
        width: "48%",
        elevation: 5,
        backgroundColor: Colors.backgound,
        borderRadius: 12,
        marginVertical: spacing.md,
    },
    imgwrapper: {
        borderRadius: 12,
        backgroundColor: "#FFC8B7",
        margin: spacing.sm,
    },
    img: {
        width: "100%",
        height: 100,
        resizeMode: "center"
    },
    contentcontainer: {
        paddingHorizontal: spacing.sm,
        paddingBottom: spacing.md,
    },
    name: {
        color: Colors.black,
        fontSize: fontsize.md,
        fontFamily: fontfamily.SemiBold,
    },
    brand: {
        color: Colors.gray,
        fontSize: fontsize.sm,
        fontFamily: fontfamily.md,
        paddingVertical: spacing.xs,
    },
    price: {
        color: Colors.purple,
        fontSize: fontsize.md,
        fontWeight: 600,
    }
})