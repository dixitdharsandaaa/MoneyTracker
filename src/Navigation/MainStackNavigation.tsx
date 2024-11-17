import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../Constants/routes';
import {navigationRef} from './NavigationServices';
import SplashScreen from '../Screens/SplashScreen';
import MainTabNavigation from './MainTabNavigation';

const MainStackNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator<any>();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={routes.SPLASH_SCREEN}>
        <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen
          name={routes.MAIN_TAB_NAVIGATION}
          component={MainTabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
