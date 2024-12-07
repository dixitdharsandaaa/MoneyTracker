import {HStack, View} from 'native-base';
import React from 'react';
import RNText from '../RNText';
import {colors, fonts, sizes} from '../../Constants/theme';
import CalendarIcon from '../CalendarIcon';
import {TouchableOpacity} from 'react-native';
import {constantString} from '../../Constants/constantString';

interface RNSelectDateProps {
  value?: string;
  onPress?: () => void;
}

const RNSelectDate: React.FC<RNSelectDateProps> = React.memo(
  ({value, onPress}) => {
    return (
      <TouchableOpacity disabled={false} onPress={onPress}>
        <HStack
          borderWidth={0.5}
          borderRadius={6}
          borderColor={colors.black}
          px={2.5}
          py={1.5}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <View>
            <RNText
              text={constantString.DATE}
              color={colors.black}
              fontSize={sizes.f13}
              fontFamily={fonts.medium}
            />
            <RNText
              text={value || ''}
              color={colors.primary}
              fontSize={sizes.f15}
              fontFamily={fonts.bold}
            />
          </View>
          <CalendarIcon />
        </HStack>
      </TouchableOpacity>
    );
  },
);
export default RNSelectDate;
