import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { fontsize, spacing } from './Dimensions'
import { fontfamily } from './Fonts'
import { Colors } from './Colors'
import { Category } from '../data/Category'

const Categorypage = () => {
    const [selectedcat, setSelectedcat] = useState("Smart watch")

    const handleselecetcat = (category) => {
        setSelectedcat(category);
    }


    const rendercategorynames = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => handleselecetcat(item.name)}>
                    <Text style={[styles.categorytxt, selectedcat === item.name && { color: Colors.purple }]}> {item.name} </Text>

                    {selectedcat === item.name && <View style={styles.underline} />}
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={Category}
                keyExtractor={(item) => item.id}
                renderItem={rendercategorynames}
                horizontal
                contentContainerStyle={styles.listcontainer}
                ItemSeparatorComponent={
                    <View style={{ paddingHorizontal: spacing.sm }} />
                }
            />
        </View>
    )
}

export default Categorypage

const styles = StyleSheet.create({
    categorytxt: {
        fontSize: fontsize.md,
        fontFamily: fontfamily.SemiBold,
        color: Colors.gray,
    },
    underline: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.purple,
        width: "50%",
        marginTop: spacing.sm,
    },
    listcontainer: {},
})