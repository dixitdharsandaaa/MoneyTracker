import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';
import RNText from '../../Components/RNText';
import {constantString} from '../../Constants/constantString';

const Transactions: React.FC = () => {
  return (
    <RNContainer>
      <View flex={1} justifyContent={'center'} alignItems={'center'}>
        <RNText text={constantString.TREANSACTIONS} />
      </View>
    </RNContainer>
  );
};

export default Transactions;
