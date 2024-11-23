import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';

const ExpenseCategory: React.FC = () => {
  return (
    <RNContainer>
      <View flex={1} px={5}></View>
    </RNContainer>
  );
};

export default ExpenseCategory;
