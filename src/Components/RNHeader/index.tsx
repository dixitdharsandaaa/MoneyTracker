import {HStack} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../Constants/theme';
import BackArrowIcon from '../BackArrowIcon';
import {goBack} from '../../Navigation/NavigationServices';

interface HeaderProps {
  showBackArrow?: boolean;
}

const RNHeader: React.FC<HeaderProps> = React.memo(
  ({showBackArrow = false}) => {
    return (
      <LinearGradient colors={[colors.secondary, colors.primary]}>
        <HStack alignItems={'center'} pt={4} pb={3} px={5}>
          {showBackArrow && <BackArrowIcon onPress={() => goBack()} />}
        </HStack>
      </LinearGradient>
    );
  },
);

export default RNHeader;
