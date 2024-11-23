import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import {routes} from '../Constants/routes';
import Settings from '../Screens/Settings';
import Graph from '../Screens/Graph';
import Transactions from '../Screens/Transactions';
import Category from '../Screens/Category';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, sizes} from '../Constants/theme';

const MainTabNavigation: React.FC = () => {
  const Tab = createBottomTabNavigator<any>();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName: string = '';
          if (route?.name == routes.HOME) {
            iconName = 'home-outline';
          } else if (route?.name == routes.GRAPH) {
            iconName = 'pie-chart-outline';
          } else if (route?.name == routes.TRANSACTIONS) {
            iconName = 'swap-horizontal-outline';
          } else if (route?.name == routes.CATEGORY) {
            iconName = 'list';
          } else if (route?.name == routes.SETTINGS) {
            iconName = 'settings-outline';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? colors.primary : colors.black}
              size={sizes.f20}
            />
          );
        },
        tabBarInactiveTintColor: colors.black,
        tabBarActiveTintColor: colors.primary,
      })}>
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.GRAPH} component={Graph} />
      <Tab.Screen name={routes.TRANSACTIONS} component={Transactions} />
      <Tab.Screen name={routes.CATEGORY} component={Category} />
      <Tab.Screen name={routes.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
