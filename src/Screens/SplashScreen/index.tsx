import React, {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {navigate} from '../../Navigation/NavigationServices';
import {routes} from '../../Constants/routes';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';
import RNText from '../../Components/RNText';
import {constantString} from '../../Constants/constantString';

const SplashScreen: React.FC = () => {
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        navigate(routes.MAIN_TAB_NAVIGATION);
      }, 2000);
    }, []),
  );

  return (
    <RNContainer>
      <View flex={1} justifyContent={'center'} alignItems={'center'}>
        <RNText text={constantString.SPLASH_SCREEN} />
      </View>
    </RNContainer>
  );
};

export default SplashScreen;
