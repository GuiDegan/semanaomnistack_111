import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStacknavigator();

import Incidents from './pages/Incidents';
import Details from './pages/Detail';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Nabigator screenOptions={{ headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Nabigator>

        </NavigationContainer>
    );
}