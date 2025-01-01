// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { SpotDetailsScreen } from './screens/SpotDetailsScreen';
import { AddSpotScreen } from './screens/AddSpotScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accessible Spots' }} />
        <Stack.Screen name="Details" component={SpotDetailsScreen} options={{ title: 'Spot Details' }} />
        <Stack.Screen name="AddSpot" component={AddSpotScreen} options={{ title: 'Add a Spot' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
