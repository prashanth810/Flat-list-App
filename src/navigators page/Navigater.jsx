import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landinscreen from '../screens/landing csreen/Landinscreen';
import { NavigationContainer } from '@react-navigation/native';

const Navigater = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='landing' component={Landinscreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigater
