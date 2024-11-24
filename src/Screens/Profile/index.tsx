import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import RNHeader from '../../Components/RNHeader';
import {View} from 'native-base';
import {constantString} from '../../Constants/constantString';

const Profile: React.FC = React.memo(() => {
  return (
    <RNContainer>
      <RNHeader showBackArrow={true} name={constantString.PROFILE} />
      <View flex={1} px={5}></View>
    </RNContainer>
  );
});

export default Profile;
