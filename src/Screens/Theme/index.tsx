import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import RNHeader from '../../Components/RNHeader';
import {View} from 'native-base';
import {constantString} from '../../Constants/constantString';

const Theme: React.FC = React.memo(() => {
  return (
    <RNContainer>
      <RNHeader showBackArrow={true} name={constantString.THEME} />
      <View flex={1} px={5}></View>
    </RNContainer>
  );
});

export default Theme;
