import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { fontsize, iconsizes, spacing } from '../../constants/Dimensions'
import { Colors } from '../../constants/Colors'
import { fontfamily } from '../../constants/Fonts'
import Search from 'react-native-vector-icons/AntDesign'
import Grid from 'react-native-vector-icons/MaterialIcons'
import Categorypage from '../../constants/Categorypage'
import Productcard from '../../components/product data/Productcard'
import { Smartwatches } from '../../data/Smartdata'

const Landinscreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <Text style={styles.heading}> Find your best watch Now. </Text>
                            <View style={styles.maininputwrap}>
                                <View style={styles.inputwrap}>
                                    <Search name='search1' style={styles.searchicon} />
                                    <TextInput keyboardType='text' style={styles.textinput} placeholder='Search Products ...' placeholderTextColor={Colors.placeholder} />
                                </View>
                                <View style={styles.catecontainer}>
                                    <Grid name="category" style={styles.category} />
                                </View>
                            </View>
                            <Categorypage />
                        </>
                    }
                    data={Smartwatches}
                    renderItem={({ item }) => <Productcard item={item} />}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                />

            </View>
        </View>
    )
}

export default Landinscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.md,
        backgroundColor: Colors.backgound,
    },
    heading: {
        fontSize: fontsize.xl,
        color: Colors.black,
        fontFamily: fontfamily.Bold,
    },
    maininputwrap: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: spacing.xl,
    },
    inputwrap: {
        flex: 1,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 44,
        paddingHorizontal: spacing.md,
        borderColor: Colors.placeholder,
    },
    searchicon: {
        fontSize: iconsizes.md,
    },
    category: {
        fontSize: iconsizes.md,
    },
    textinput: {
        flex: 1,
        paddingHorizontal: spacing.md,
        fontsize: fontsize.md,
        color: "black",
        fontFamily: fontfamily.md,
    },
    catecontainer: {
        paddingHorizontal: spacing.sm,
    },
})