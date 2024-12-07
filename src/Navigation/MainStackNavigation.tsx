import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '../Constants/routes';
import {navigationRef} from './NavigationServices';
import SplashScreen from '../Screens/SplashScreen';
import MainTabNavigation from './MainTabNavigation';
import AddUpdateIncomeExpense from '../Screens/AddUpdateIncomeExpense';
import Theme from '../Screens/Theme';
import Profile from '../Screens/Profile';
import SelectCategory from '../Screens/SelectCategory';
import AddUpdateCategory from '../Screens/AddUpdateCategory';

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
        <Stack.Screen
          name={routes.ADD_UPDATE_CATEGORY}
          component={AddUpdateCategory}
        />
        <Stack.Screen
          name={routes.ADD_UPDATE_INCOME_EXPENSE}
          component={AddUpdateIncomeExpense}
        />
        <Stack.Screen name={routes.PROFILE} component={Profile} />
        <Stack.Screen name={routes.THEME} component={Theme} />
        <Stack.Screen
          name={routes.SELECT_CATEGORY}
          component={SelectCategory}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
