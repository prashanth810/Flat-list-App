import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Addtocart from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../constants/Colors';
import { spacing } from '../../constants/Dimensions';

const Addcard = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <LinearGradient
                colors={["#8743FF", "#4136F1"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <Text style={styles.buttonText}>
                    <Addtocart name='cart-outline' size={20} />
                </Text>
                <Text style={styles.buttonText}> ADD TO CART </Text>
                <Text style={styles.buttonText}> | $54.21  </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default Addcard;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: spacing.md,
    },
    gradient: {
        flexDirection: "row",
        width: "90%",
        paddingVertical: spacing.md,
        paddingHorizontal: 24,
        borderRadius: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: Colors.backgound,
        fontWeight: 700,
        fontSize: 14,
    }
});
