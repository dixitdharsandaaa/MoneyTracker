import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';
import {constantString} from '../../Constants/constantString';
import PlusIcon from '../../Components/PlusIcon';
import RNHeader from '../../Components/RNHeader';
import {navigate} from '../../Navigation/NavigationServices';
import {routes} from '../../Constants/routes';

const Home: React.FC = () => {
  return (
    <RNContainer>
      <RNHeader showText={true} value={constantString.HOME} />
      <View flex={1}></View>
      <PlusIcon onPress={() => navigate(routes.ADD_UPDATE_INCOME_EXPENSE)} />
    </RNContainer>
  );
};

export default Home;
