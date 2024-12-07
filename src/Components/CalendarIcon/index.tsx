import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, sizes} from '../../Constants/theme';
import {moderateScale} from 'react-native-size-matters';
import {View} from 'native-base';

const CalendarIcon: React.FC = React.memo(() => {
  return (
    <View
      width={moderateScale(35)}
      height={moderateScale(35)}
      justifyContent={'center'}
      alignItems={'center'}
      backgroundColor={colors.gray_light}
      borderRadius={100}>
      <Icon name={'calendar-outline'} size={sizes.f15} color={colors.primary} />
    </View>
  );
});

export default CalendarIcon;
