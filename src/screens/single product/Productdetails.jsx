import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Headercompo from './Headercompo';
import Prodcarosel from './Prodcarosel';
import { fontsize, iconsizes, spacing } from '../../constants/Dimensions';
import { Colors } from '../../constants/Colors';
import Star from 'react-native-vector-icons/AntDesign';
import { fontfamily } from '../../constants/Fonts';
import Addcard from './Addcard';

const colordata = [
    { colorname: "silver", code: "#F0F2F2" },
    { colorname: "Bright Orange", code: "#F25745" },
    { colorname: "Starlight", code: "#FAF6F2" },
];


const Productdetails = () => {
    const [selectedcolor, setSelectedcolor] = useState("");
    const [selectedtab, setSelectedtab] = useState("Details")
    const route = useRoute();
    const { product } = route.params;


    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollcont}>
                <Headercompo />
                <Prodcarosel images={product.images} />

                <View style={styles.titlecontainer}>
                    <View style={styles.title}>
                        <Text style={styles.prodtitle}> {product.name} </Text>
                        <Text style={styles.brand}> {product.brand} </Text>
                    </View>

                    <View style={styles.rating}>
                        <Star name="star" size={iconsizes.sm} color={Colors.yellow} />
                        <Text style={styles.rats}>{product.rating || 4.6}</Text>
                    </View>

                </View>

                <View style={styles.colorcontainer}>
                    <Text style={styles.colorcont}> Colors </Text>

                    <View style={styles.selectcolor}>
                        <FlatList data={colordata}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={[styles.selctedcolors, item.colorname === selectedcolor && {
                                    borderColor: Colors.purple,
                                }]}
                                    onPress={() => setSelectedcolor(item.colorname)}
                                >
                                    <View style={styles.allcolors}>
                                        <View style={[styles.cricle, {
                                            backgroundColor: item.code
                                        }]} />
                                        <Text style={styles.textcolor}> {item.colorname} </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            horizontal
                            ItemSeparatorComponent={() => {
                                <View style={{ width: spacing.sm }} />
                            }}
                        />

                    </View>
                </View>


                <View style={styles.detailsreview}>
                    <TouchableOpacity onPress={() => setSelectedtab("Details")}>
                        <Text style={[styles.detteaxt, selectedtab === "Details" && {
                            color: Colors.purple,
                        }]}> Details </Text>

                        {selectedtab === "Details" && <View style={styles.underline} />}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setSelectedtab("Review")}>
                        <Text style={[styles.detteaxt, selectedtab === "Review" && { color: Colors.purple }]}> Review </Text>
                        {selectedtab === "Review" && <View style={styles.underline} />}
                    </TouchableOpacity>
                </View>

                <Text style={styles.detailsdata}>{selectedtab === "Details" ? product.details : product.reviews}</Text>

            </ScrollView>

            <Addcard />
        </View>
    )
}

export default Productdetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgound,
    },
    scrollcont: {
        padding: spacing.md,
    },
    titlecontainer: {
        flexDirection: "row",
    },
    title: {
        flex: 1,
    },
    prodtitle: {
        fontFamily: fontfamily.Bold,
        fontWeight: 800,
        fontSize: fontsize.lg,
    },
    brand: {
        fontFamily: fontfamily.Medium,
        fontWeight: 500,
        color: Colors.gray,
        fontSize: fontsize.sm,
        paddingVertical: spacing.sm,
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.sm,
        backgroundColor: Colors.lavendar,
        borderRadius: spacing.md,
        padding: spacing.sm,
        height: 40,
        marginTop: spacing.md,
    },
    rats: {
        color: Colors.gray,
        fontFamily: fontfamily.Medium,
        fontWeight: 500,
        fontSize: fontsize.md,
    },
    colorcontainer: {
        paddingTop: spacing.md,
    },
    colorcont: {
        fontSize: fontsize.md,
        fontFamily: fontfamily.SemiBold,
        fontWeight: 600,
        paddingBottom: spacing.md,
    },
    selectcolor: {

    },
    selctedcolors: {
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 5,
        padding: spacing.sm,
        flexDirection: "row",
        gap: spacing.sm,
        alignItems: "center",
        justifyContent: "center",
    },
    cricle: {
        height: spacing.md,
        width: spacing.md,
        backgroundColor: Colors.purple,
        borderRadius: spacing.md,
    },
    textcolor: {
        fontsize: fontsize.sm,
        fontFamily: fontfamily.Medium,
        fontWeight: 600,
    },
    allcolors: {
        flexDirection: "row",
        alignItems: "center",
    },
    detailsreview: {
        flexDirection: "row",
        paddingTop: spacing.lg,
        gap: spacing.lg,
    },
    detteaxt: {
        fontSize: 16,
        fontWeight: 700,
        color: Colors.gray,
    },
    underline: {
        width: "50%",
        marginTop: spacing.xs,
        borderBottomWidth: 2,
        borderBottomColor: Colors.purple,
    },
    detailsdata: {
        color: Colors.gray,
        fontWeight: 400,
        fontSize: fontsize.md,
        paddingVertical: spacing.sm,
        paddingBottom: 30,
    },
})