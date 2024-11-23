import {HStack, Modal, View} from 'native-base';
import React, {useState} from 'react';
import RNText from '../RNText';
import {colors, fonts, sizes} from '../../Constants/theme';
import CalendarIcon from '../CalendarIcon';
import {TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';

interface RNSelectDateProps {
  label?: string;
  value?: string;
  onPress?: () => void;
}

const RNSelectDate: React.FC<RNSelectDateProps> = ({label, onPress, value}) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
            text={label || ''}
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
        <CalendarIcon onPress={onPress} primaryColor={true} />
      </HStack>
    </TouchableOpacity>
  );
};

export default RNSelectDate;
