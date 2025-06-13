import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landinscreen from '../screens/landing csreen/Landinscreen';
import { NavigationContainer } from '@react-navigation/native';
import Productdetails from '../screens/single product/Productdetails';

const Navigater = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='landing' component={Landinscreen} />
                <Stack.Screen name='productdetails' component={Productdetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigater
