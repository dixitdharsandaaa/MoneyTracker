import {HStack, View} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, sizes} from '../../Constants/theme';
import BackArrowIcon from '../BackArrowIcon';
import {goBack} from '../../Navigation/NavigationServices';
import RNText from '../RNText';

interface HeaderProps {
  showBackArrow?: boolean;
  name?: string;
}

const RNHeader: React.FC<HeaderProps> = React.memo(
  ({showBackArrow = false, name}) => {
    return (
      <LinearGradient colors={[colors.secondary, colors.primary]}>
        <HStack px={5} py={4} alignItems={'center'} space={2}>
          {showBackArrow && <BackArrowIcon onPress={() => goBack()} />}
          <RNText text={name || ''} color={colors.white} fontSize={sizes.f14} />
        </HStack>
      </LinearGradient>
    );
  },
);

export default RNHeader;
