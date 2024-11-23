import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import RNHeader from '../../Components/RNHeader';
import {View} from 'native-base';

const AddUpdateIncomeExpense: React.FC = () => {
  return (
    <RNContainer>
      <RNHeader showBackArrow={true} />
      <View flex={1}></View>
    </RNContainer>
  );
};

export default AddUpdateIncomeExpense;
