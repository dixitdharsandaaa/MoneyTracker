import React from 'react';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';
import RNHeader from '../../Components/RNHeader';
import PlusIcon from '../../Components/PlusIcon';
import {navigate} from '../../Navigation/NavigationServices';
import {routes} from '../../Constants/routes';
import {constantString} from '../../Constants/constantString';

const Home: React.FC = React.memo(() => {
  return (
    <RNContainer>
      <RNHeader name={constantString.HOME} />
      <View flex={1}></View>
      <PlusIcon onPress={() => navigate(routes.ADD_UPDATE_INCOME_EXPENSE)} />
    </RNContainer>
  );
});

export default Home;
