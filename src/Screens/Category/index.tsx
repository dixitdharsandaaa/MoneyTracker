import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import RNHeader from '../../Components/RNHeader';
import {routes} from '../../Constants/routes';
import {colors} from '../../Constants/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import IncomeCategory from '../IncomeCategory';
import ExpenseCategory from '../ExpenseCategory';

const Category: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <RNContainer>
      <RNHeader />
      <Tab.Navigator
        initialRouteName={routes.INCOME_CATEGORY}
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colors.primary,
          },
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: colors.black,
          tabBarIndicatorStyle: {
            backgroundColor: colors.white,
            height: 2,
          },
          // tabBarPressColor: colors.secondary, // Change the ripple color on tab press
        }}>
        <Tab.Screen
          name={routes.EXPENSE_CATEGORY}
          component={ExpenseCategory}
          initialParams={{disabled: true}}
        />
        <Tab.Screen
          name={routes.INCOME_CATEGORY}
          component={IncomeCategory}
          initialParams={{disabled: true}}
        />
      </Tab.Navigator>
    </RNContainer>
  );
};

export default React.memo(Category);
