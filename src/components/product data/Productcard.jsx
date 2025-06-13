import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { fontsize, spacing } from '../../constants/Dimensions'
import { fontfamily } from '../../constants/Fonts'
import { Smartwatches } from '../../data/Smartdata'
import { useNavigation } from '@react-navigation/native'

const Productcard = ({ item }) => {
    const navigation = useNavigation();

    const handleproductdetails = () => {
        navigation.navigate("productdetails", { product: item });
    }


    return (
        <TouchableOpacity style={styles.container} onPress={handleproductdetails}>
            <View style={styles.imgwrapper}>
                <Image source={{ uri: item.image }} style={styles.img} />
            </View>

            <View style={styles.contentcontainer}>
                <Text style={styles.name} numberOfLines={1}> {item.name}  </Text>
                <Text style={styles.brand}> {item.brand}  </Text>
                <Text style={styles.price}> ${item.price}  </Text>
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


// <FlatList
//     data={Smartwatches}
//     keyExtractor={(item) => item.id}
//     renderItem={renderwatschesdata}
//     horizontal
// /> 