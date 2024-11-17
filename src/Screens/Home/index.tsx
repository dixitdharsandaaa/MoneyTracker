import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';
import RNText from '../../Components/RNText';
import {constantString} from '../../Constants/constantString';

const Home: React.FC = () => {
  return (
    <RNContainer>
      <View flex={1} justifyContent={'center'} alignItems={'center'}>
        <RNText text={constantString.HOME} />
      </View>
    </RNContainer>
  );
};

export default Home;
