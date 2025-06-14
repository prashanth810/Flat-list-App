import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Back from 'react-native-vector-icons/Ionicons';
import Heart from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

const Headercompo = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text> <Back name='arrow-back' size={20} /> </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text> <Heart name='heart' size={20} /> </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Headercompo

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    }
})