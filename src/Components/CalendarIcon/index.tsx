import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors, sizes} from '../../Constants/theme';
import TouchableIcon from '../TouchableIcon';

interface CalendarIconProps {
  onPress?: () => void;
  primaryColor?: boolean;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({
  onPress,
  primaryColor = false,
}) => {
  return (
    <TouchableIcon
      name="calendar-outline"
      color={primaryColor ? colors.primary : colors.white}
      size={sizes.f18}
      onPress={onPress}
      as={Ionicons}
    />
  );
};

export default CalendarIcon;
