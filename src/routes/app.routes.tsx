import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { InternArticle } from '../screens/InternArticle';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="InternArticle" component={InternArticle} />
      </Navigator>
    </NavigationContainer>
  );
}
