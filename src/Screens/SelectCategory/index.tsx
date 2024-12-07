import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import RNHeader from '../../Components/RNHeader';
import {constantString} from '../../Constants/constantString';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {routes} from '../../Constants/routes';
import {colors} from '../../Constants/theme';
import ExpenseCategory from '../ExpenseCategory';
import IncomeCategory from '../IncomeCategory';
import {staticString} from '../../Constants/staticString';

const SelectCategory: React.FC = React.memo(() => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <RNContainer>
      <RNHeader showBackArrow={true} name={constantString.SELECT_CATEGORY} />
      <Tab.Navigator
        initialRouteName={routes.EXPENSE_CATEGORY}
        // lazy={true}
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
          initialParams={{addCategory: false}}
        />
        <Tab.Screen
          name={routes.INCOME_CATEGORY}
          component={IncomeCategory}
          initialParams={{addCategory: false}}
        />
      </Tab.Navigator>
    </RNContainer>
  );
});

export default SelectCategory;
