import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';
import RNHeader from '../../Components/RNHeader';
import {constantString} from '../../Constants/constantString';

const Transactions: React.FC = React.memo(() => {
  return (
    <RNContainer>
      <RNHeader name={constantString.TRANSACTIONS} />
      <View flex={1}></View>
    </RNContainer>
  );
});

export default Transactions;
