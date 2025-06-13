import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { spacing } from '../../constants/Dimensions'
import { Colors } from '../../constants/Colors'

const Prodcarosel = ({ images }) => {
    const [active, setActive] = useState(0);

    const onViewRef = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActive(viewableItems[0].index);
        }
    });

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

    return (
        <>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <View style={styles.prodcarosel}>
                        <Image source={{ uri: item }} style={styles.image} />
                    </View>
                )}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment='center'
                decelerationRate="fast"
                keyExtractor={(item, i) => i.toString()}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />

            <View style={styles.pagenatation}>
                {images.map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.dots,
                            i === active && { width: 15, borderRadius: 20, backgroundColor: Colors.purple },
                        ]}
                    />
                ))}
            </View>
        </>
    )
}

export default Prodcarosel

const styles = StyleSheet.create({
    prodcarosel: {
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width,
    },
    image: {
        width: 200,
        height: 300,
        resizeMode: "center"
    },
    pagenatation: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: spacing.ms,
    },
    dots: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: spacing.xs,
        backgroundColor: Colors.gray,
    },
});
