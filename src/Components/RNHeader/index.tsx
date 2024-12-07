import {HStack, View} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, sizes} from '../../Constants/theme';
import BackArrowIcon from '../BackArrowIcon';
import {goBack} from '../../Navigation/NavigationServices';
import RNText from '../RNText';
import DeleteIcon from '../DeleteIcon';

interface HeaderProps {
  showBackArrow?: boolean;
  name?: string;
  showDeleteIcon?: boolean;
  deleteOnPress?: () => void;
}

const RNHeader: React.FC<HeaderProps> = React.memo(
  ({showBackArrow = false, name, deleteOnPress, showDeleteIcon = false}) => {
    return (
      <LinearGradient colors={[colors.secondary, colors.primary]}>
        <HStack
          px={5}
          py={4}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <HStack
            alignItems={'center'}
            space={2}
            justifyContent={'space-between'}>
            {showBackArrow && <BackArrowIcon onPress={() => goBack()} />}
            <RNText
              text={name || ''}
              color={colors.white}
              fontSize={sizes.f14}
            />
          </HStack>
          {showDeleteIcon && <DeleteIcon onPress={deleteOnPress} />}
        </HStack>
      </LinearGradient>
    );
  },
);

export default RNHeader;
