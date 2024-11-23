import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';
import {constantString} from '../../Constants/constantString';
import RNHeader from '../../Components/RNHeader';

const Home: React.FC = () => {
  return (
    <RNContainer>
      <RNHeader showText={true} value={constantString.HOME} />
      <View flex={1}></View>
    </RNContainer>
  );
};

export default Home;
