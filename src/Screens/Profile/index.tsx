import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import RNHeader from '../../Components/RNHeader';
import {View} from 'native-base';

const Profile: React.FC = () => {
  return (
    <RNContainer>
      <RNHeader showBackArrow={true} />
      <View flex={1} px={5}></View>
    </RNContainer>
  );
};

export default React.memo(Profile);