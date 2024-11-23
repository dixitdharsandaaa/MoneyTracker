import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';
import RNText from '../../Components/RNText';
import {constantString} from '../../Constants/constantString';
import RNHeader from '../../Components/RNHeader';

const Transactions: React.FC = () => {
  return (
    <RNContainer>
      <RNHeader showText={true} value={constantString.TRANSACTIONS} />
      <View flex={1} justifyContent={'center'} alignItems={'center'}>
        <RNText text={constantString.TRANSACTIONS} />
      </View>
    </RNContainer>
  );
};

export default Transactions;
