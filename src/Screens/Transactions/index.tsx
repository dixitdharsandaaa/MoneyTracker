import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';
import RNHeader from '../../Components/RNHeader';

const Transactions: React.FC = () => {
  return (
    <RNContainer>
      <RNHeader />
      <View flex={1}></View>
    </RNContainer>
  );
};

export default React.memo(Transactions);
