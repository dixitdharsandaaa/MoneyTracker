import React, {useCallback, useLayoutEffect} from 'react';
import {resetNavigationStack} from '../../Navigation/NavigationServices';
import {routes} from '../../Constants/routes';
import RNContainer from '../../Components/RNContainer/RNContainer';
import {View} from 'native-base';
import RNText from '../../Components/RNText';
import {constantString} from '../../Constants/constantString';
import LinearGradient from 'react-native-linear-gradient';
import {colors, sizes} from '../../Constants/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  createExpenseAndCategoryTable,
  defaultCategory,
} from '../../Sqlite/SqliteService';

const SplashScreen: React.FC = () => {
  useLayoutEffect(
    useCallback(() => {
      createTable();
    }, []),
  );

  const createTable = () => {
    createExpenseAndCategoryTable()
      .then(response => {
        if (response) {
          console.log(response);
          addDefaultCategory();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const addDefaultCategory = () => {
    defaultCategory()
      .then(response => {
        if (response) {
          console.log(response);
          setTimeout(() => {
            resetNavigationStack(routes.MAIN_TAB_NAVIGATION);
          }, 2000);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <RNContainer>
      <LinearGradient
        style={{flex: 1}}
        colors={[colors.secondary, colors.primary]}>
        <View flex={1} justifyContent={'center'} alignItems={'center'}>
          <MaterialIcons
            name="attach-money"
            color={colors.white}
            size={sizes.f35}
          />
          <RNText
            text={constantString.MONEY_TRACKER}
            color={colors.white}
            fontSize={sizes.f13}
          />
        </View>
      </LinearGradient>
    </RNContainer>
  );
};

export default React.memo(SplashScreen);
