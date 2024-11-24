import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';
import RNHeader from '../../Components/RNHeader';

const Transactions: React.FC = React.memo(() => {
  return (
    <RNContainer>
      <RNHeader />
      <View flex={1}></View>
    </RNContainer>
  );
});

export default Transactions;
