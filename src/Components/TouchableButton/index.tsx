import {HStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import RNText from '../RNText';
import {colors, fonts, sizes} from '../../Constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

interface TouchableButtonProps {
  name?: string;
  iconName?: string;
  onPress?: () => void;
  mt?: number;
  mb?: number;
}

const TouchableButton: React.FC<TouchableButtonProps> = React.memo(
  ({name, iconName, onPress, mt, mb}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <HStack
          mt={mt}
          mb={mb}
          justifyContent={'space-between'}
          borderRadius={6}
          px={2}
          py={3}
          backgroundColor={colors.white}
          alignItems={'center'}>
          <HStack alignItems={'center'} space={3} px={2}>
            <FontAwesome
              name={iconName}
              size={sizes.f16}
              color={colors.primary}
            />
            <RNText
              text={name}
              color={colors.black}
              fontFamily={fonts.medium}
              fontSize={sizes.f13}
            />
          </HStack>
          <Icon
            name={'arrow-forward-ios'}
            size={sizes.f15}
            color={colors.gray}
          />
        </HStack>
      </TouchableOpacity>
    );
  },
);

export default TouchableButton;
