import {HStack, View} from 'native-base';
import React from 'react';
import RNText from '../RNText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, fonts, sizes} from '../../Constants/theme';
import {TouchableHighlight} from 'react-native';

interface TouchableItemProps {
  iconName?: string;
  text?: string;
  onPress?: () => void;
  bgColor?: string;
}

const TouchableItem: React.FC<TouchableItemProps> = ({
  iconName = '',
  text,
  onPress,
  bgColor,
}) => {
  return (
    <HStack
      shadow={1}
      py={2}
      px={2}
      alignItems={'center'}
      backgroundColor={colors.white}
      borderRadius={6}
      flex={1}>
      <TouchableHighlight onPress={onPress}>
        <HStack alignItems={'center'} space={2}>
          <View backgroundColor={bgColor} p={2} borderRadius={6}>
            <FontAwesome
              name={iconName}
              color={colors.white}
              size={sizes.f10}
            />
          </View>
          <RNText
            text={text}
            color={colors.black}
            fontSize={sizes.f12}
            fontFamily={fonts.medium}
          />
        </HStack>
      </TouchableHighlight>
    </HStack>
  );
};

export default TouchableItem;
